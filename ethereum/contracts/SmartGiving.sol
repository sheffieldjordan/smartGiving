pragma solidity 0.4.21;

contract GiftFactory {

    address[] outstandingGifts;
    address[] completedGifts;

    event GiftCreated(address gift, address recipient, uint expiry);
    event DonorSetsPrice(address gift, address donor, uint price);
    event MerchantBids(address gift, address merchant, uint bid);
    event DonationMade(address gift, address merchant, uint price); // happens right after Recipient clicks "Select Merchant"
    event ItemShipped(address gift, uint time);
    event ItemDelivered(address gift, uint time);


    function createSmartGift(uint _expiry) public returns(uint, address){
        address newGift;
        uint id;
        newGift = new SmartGift(msg.sender, _expiry);
        id = outstandingGifts.push(newGift);
        return (id, newGift);
    }

    function returnOutstandingGifts() public view returns(address[]) {
        return outstandingGifts;
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
    }
}

contract SmartGift {
    address recipient;
    address donor;
    address merchant;
    uint maxPrice;
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

    function SmartGift(address _owner, uint _expiry) public {
        recipient = _owner;
        expiry = _expiry;
        giftFactory = GiftFactory(msg.sender);
        giftFactory.giftCreated(address(this), _owner, _expiry);

    }

    function donorSetsMaxPrice(string _donorMsg) public payable {
        require(msg.value > 0);
        donor = msg.sender;
        donorMsg = _donorMsg;
        maxPrice = msg.value;
        giftFactory.donorSetsMaxPrice(address(this), msg.sender, msg.value);

    }

    function merchantBids(uint _bid) public payable { // in Web3, the merchant's input must be converted into Wei
        require(_bid > 0);
        require(msg.value >= 1000000001);
        require(msg.sender != recipient && msg.sender != donor);
        require(bidAmounts[_bid] != 0); // "Sorry, someone has already bid that amount. Try bidding lower. The current lowest bid is ${lowestBid}. Try to beat it!"
        recipient.transfer(1000000001);
        if (lowestBid == 0) {
            lowestBid = _bid;
        }
        if (lowestBid > _bid) {
            lowestBid = _bid;
            }
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
}
