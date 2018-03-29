pragma solidity ^0.4.21;

contract GiftFactory {

    address[] public completedGifts;

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
        require(msg.value > 1000000);
        address newGift = (new SmartGift).value(msg.value)(_recipient, msg.sender, _expiry, _donorMsg);
        _updateMasterStats(newGift, msg.sender, _recipient, _expiry, _donorMsg);
        return newGift;
    }

    function createRolloverGift(address _recipient, address _donor, uint32 _expiry, string _donorMsg) external payable returns(address) {
        require(msg.value > 1000000);
        address newGift = (new SmartGift).value(msg.value)(_recipient, _donor, _expiry, _donorMsg);
        _updateMasterStats(newGift, _donor, _recipient, _expiry, _donorMsg);
        return newGift;
    }

    function _updateMasterStats(address _newGift, address _donor, address _recipient, uint32 _expiry, string _donorMsg) internal returns(bool) {
        giftExists[_newGift] = true;
        uint id = gifts.push(Gift(_newGift, _donorMsg, false, _expiry)) - 1;
        giftToOwner[id] = _recipient;
        recipientGiftCount[_recipient]++;
        donorGiftCount[_donor]++;
    }

    function _updateMerchantStats(address _merchant) internal {
        merchantGiftCount[_merchant]++;
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
        _updateMerchantStats(_merchant);
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
    uint maxPrice; //= address(this).balance;
    uint lowestBid;
    uint creationTime;
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

    function SmartGift(address _owner, address _donor, uint32 _expiry, string _donorMsg) public payable{
        recipient = _owner;
        donor = _donor;
        expiry = _expiry;
        donorMsg = _donorMsg;
        maxPrice = msg.value -1000000;
        creationTime = now;
        giftFactory = GiftFactory(msg.sender);
        recipient.transfer(1000000); // gas money
        giftFactory.giftCreated(address(this), _owner, _expiry);
    }

    function checkBalance() public view returns(uint){
        return address(this).balance;
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

    function carryOver(address _rolloverRecipient, uint32 _rolloverExpiry, string _donorMsg) public payable donorOnly returns(address){
        require(merchant != 0);
        address newGift = giftFactory.createRolloverGift.value(address(this).balance)(_rolloverRecipient, msg.sender, _rolloverExpiry, _donorMsg);

        return newGift;
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
                creationTime,
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
