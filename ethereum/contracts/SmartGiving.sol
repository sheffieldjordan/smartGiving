pragma solidity ^0.4.21;

contract GiftFactory {

    address[] public completedGifts;

    address public nextGift;
    address public nextRecipient;
    address public currentDonor;

    mapping(address => bool) public giftExists;

    mapping(uint => address) public giftToOwner;

    mapping(address => uint) public recipientGiftCount;
    mapping(address => uint) public donorGiftCount;
    mapping(address => uint) public merchantGiftCount;

    struct Gift {
      address location;
      string donorMsg;
      bool completed;
      uint expiry;
    }

    Gift[] gifts;

    event GiftCreated(address gift, address recipient, uint expiry);
    event DonorSetsPrice(address gift, address donor, uint price);
    event MerchantBids(address gift, address merchant, uint bid);
    event DonationMade(address gift, address merchant, uint price); // happens right after Recipient clicks "Select Merchant"
    event ItemShipped(address gift, uint time);
    event ItemDelivered(address gift, uint time);


    function createSmartGift(address _recipient, uint32 _expiry, string _donorMsg) public payable returns(address){
        address newGift;

        newGift = new SmartGift(_recipient, msg.sender, _expiry, _donorMsg);
        giftExists[newGift] = true;

        uint id = gifts.push(Gift(newGift, _donorMsg,false, _expiry));
        giftToOwner[id-1] = _recipient;
        recipientGiftCount[_recipient]++;
        donorGiftCount[msg.sender]++;

        nextGift = newGift;

        // nextGift.transfer(address(this).balance); // doesn't work within this function for some reason
        currentDonor = msg.sender; // instead set these variables to call donate() below
        nextRecipient = _recipient;

        return newGift;
    }

    function donate() public payable returns (uint){
        require(msg.sender == currentDonor);
        nextGift.transfer(msg.value - 1000000);
        nextRecipient.transfer(999999);
        SmartGift(nextGift).setMaxPrice();

        return msg.value;
    }


    function checkBalance() public view returns(uint){
        return address(this).balance;
    }
    // functions below enable the Gift to call the Factory Events. Our app will
    // have listeners pointed at the Factory (not at individual Gifts).
    // If you want stats from an individual gift, you can call that gift's
    // getGiftStats( ) function.

    function giftCreated(address _gift, address _owner, uint _expiry) public {
        emit GiftCreated(_gift, _owner, _expiry);
    }

    function donorSetsMaxPrice(address _gift, address _donor, uint _value) public {
        emit DonorSetsPrice(_gift, _donor, _value);
    }

    function merchantBids(address _gift, address _merchant, uint _bid) public {
        emit MerchantBids(_gift, _merchant, _bid);
    }

    function donationMade(address _gift, address _merchant, uint price) public {
        emit DonationMade(_gift, _merchant, price);
    }

    function itemShipped(address _gift, uint time) public {
        emit ItemShipped(_gift, time);
    }

    function itemDelivered(address _gift, uint time) public {
        emit ItemDelivered(_gift, time);
        completedGifts.push(_gift);
    }

    function getGiftsByRecipient(address _recipient) external view returns(address[]) {
        address[] memory result = new address[](recipientGiftCount[_recipient]);
        uint counter = 0;
        for (uint i = 0; i < gifts.length; i++) {
            if (giftToOwner[i] == _recipient) {
                result[counter] = gifts[i].location;  //??
                counter++;
            }
        }
        return result;
    }
}

contract SmartGift {
    address recipient;
    address donor;
    address merchant;
    uint public maxPrice; //= address(this).balance;
    uint lowestBid;
    uint expiry;
    uint bidderCount;
    uint finalCost;
    bool itemShipped;
    bool itemDelivered;
    string donorMsg;

    address public parentFactory;
    GiftFactory giftFactory;

    mapping(address => uint) merchantsToBids;
    mapping(uint => address) bidAmounts;

    modifier recipientOnly() {
        require(msg.sender == recipient);
        _;
    }

    modifier donorOnly() {
        require(msg.sender == donor);
        _;
    }

    function SmartGift(address _owner, address _donor, uint _expiry, string _donorMsg) public payable{
        recipient = _owner;
        donor = _donor;
        expiry = _expiry;
        donorMsg = _donorMsg;
        giftFactory = GiftFactory(msg.sender);
        giftFactory.giftCreated(address(this), _owner, _expiry);
    }

    function checkBalance() public view returns(uint){
        return address(this).balance;
    }

    function setMaxPrice() external {
        maxPrice = address(this).balance;
    }

    function donorSetsMaxPrice(string _donorMsg) public payable {
        require(msg.value > 0);
        donor = msg.sender;
        donorMsg = _donorMsg;
        maxPrice = msg.value;
        giftFactory.donorSetsMaxPrice(address(this), msg.sender, msg.value);
    }

    function merchantBids(uint _bid) public { // in Web3, the merchant's input must be converted into Wei
        require(_bid > 0);
        require(msg.sender != recipient && msg.sender != donor);
        require(bidAmounts[_bid] == 0); // "Sorry, someone has already bid that amount. Try bidding lower. The current lowest bid is ${lowestBid}. Try to beat it!"
        if (lowestBid == 0) {
            lowestBid = _bid;
        }
        if (lowestBid > _bid) {
            lowestBid = _bid;
            }
        bidderCount++;
        giftFactory.merchantBids(address(this), msg.sender, _bid);
        merchantsToBids[msg.sender] = _bid;
    }

    function recipientPicksMerchant(address _merchant) public recipientOnly {
        merchant = _merchant;
        finalCost = merchantsToBids[merchant];
        merchant.transfer(finalCost);
        giftFactory.donationMade(address(this), _merchant, finalCost);
    }

    function merchantShipsItem() public {
        require(msg.sender == merchant);
        itemShipped = true;
        giftFactory.itemShipped(address(this), now);
    }

    function recipientReceivesItem() public recipientOnly {
        itemDelivered = true;
        giftFactory.itemShipped(address(this), now);
    }

    function recoverExtra() public donorOnly {
        require(merchant != 0); // if true, merchant payment has been made.
        donor.transfer(address(this).balance);
    }

    function carryOver(address targetGift, string _donorMsg) public donorOnly {
        require(merchant != 0);
        SmartGift newGift;
        newGift = SmartGift(targetGift);
        newGift.donorSetsMaxPrice.value(address(this).balance)(_donorMsg); // donor sends his leftover money to a new Gift.
    }


    function getGiftStats() public view returns (
        address,
        address,
        address,
        uint,
        uint,
        uint,
        uint,
        uint,
        bool,
        bool,
        string
        ) {
            return (
                recipient,
                donor,
                merchant,
                maxPrice,
                lowestBid,
                finalCost,
                expiry,
                bidderCount,
                itemShipped,
                itemDelivered,
                donorMsg
                );
        }
    function() public payable{
        return;
    }
}
