pragma solidity ^0.4.20;

/* smartGiving deploys and manages the GiftFactory.  Using this contract,
a Recipient calls the 'createSmartGift'
function, which instantiates a SmartGift contract for the merchant to bid on and
a Donor to fulfill.
The front-end DApp will also call functions to update Gift and Factory state*/

contract GiftFactory {

    address[] public deployedSmartGifts;
    // RecipientGiftTracker[] recipientGifts;

    mapping(address => address[]) recipientGiftStore;
    // mapping(address => RecipientGiftTracker[]) public recipientGiftStore;
    mapping(address => address[]) donorGiftStore;
    mapping(address => address[]) merchantGiftStore;
    mapping(address => bool) public giftFulfilled;

    struct RecipientGiftTracker {
        address giftAddress;
        bool giftStatus;
    }

    event DonationMade(address gift, address donor); // for event listening in JS


    /* _recipient creates a smartGift with inputs: suggested sales price, expiry date.
    If no expiry provided, browser can provide X days as default*/
    function createSmartGift(uint _suggestedCost, uint expiry) public payable returns(address){

        address newGift;

        newGift = new SmartGift(_suggestedCost, msg.sender, expiry);

        deployedSmartGifts.push(newGift);

        //xxx RecipientGiftTracker memory newGiftEntry = RecipientGiftTracker({
        //   xxx  giftAddress: newGift,
        // xxx    giftStatus: false
        // xxx });
        // requests.push(newRequest);
        // recipientGiftStore[msg.sender].push(RecipientGiftTracker(newGift, false));
        recipientGiftStore[msg.sender].push(newGift);
        return newGift;
    }

    // the front-end will call this to get an array of all smartGifts for display
    function returnDeployedGifts() public view returns(address[]) {
        return deployedSmartGifts;
    }

    // the browser will call this when the Recipient browses to smartgift.io/profile/giftstore
    // function returnGiftStore() public view returns(address[]) {
        // return recipientGiftStore[msg.sender];
    // }

    // this can be used to query fulfillment status if the Event Listener fails
    function checkFulfillment(address _gift) public view returns(bool){
        bool donationStatus = SmartGift(_gift).donationExecuted();
        return donationStatus;
    }

    // the SmartGift calls this to update the fulfillment status mapping
    function updateFulfillmentMapping(address _gift, bool status, address _donor) external returns(bool){
        SmartGift smartGift = SmartGift(_gift);
        require(_donor == smartGift.donorCheck());
        giftFulfilled[_gift] = status;
        emit DonationMade(_gift, _donor);
        return giftFulfilled[_gift];
    }

    function () public {
        revert();
    }
}

/* contract for SmartGift is below; Merchants pay to deploy this. The front-end
makes the donate() function available to potential donors, and the recipientSign()
available to the Recipient */

contract SmartGift {
    address public donor;
    address public recipient;
    address public merchant;
    address public parentFactory;
    address[7] public merchantList; // seven is the maximum number of bids

    uint public donationAmt;
    uint public expirationDate;
    uint public bidderCount;

    bool public donationExecuted;
    bool public recipientSigned;
    bool public recipientReportsDeliveryFailure;

    mapping(address => uint) public merchantBids;

    modifier recipientOnly() {
        require(msg.sender == recipient);
        _;
    }
    event MaxBiddersReached(address gift, uint time);

    // this is called by the Factory on behalf of the Recipient to instantiate the Gift.
    function SmartGift(uint totalCost, address _recipient, uint expiry) public payable {
        donationAmt =  totalCost;
        recipient = _recipient;
        expirationDate = now + expiry;
        parentFactory = msg.sender;

        }

    // Merchant clls the bid function
    function bid(uint bidAmount) public payable returns(bool){
        require(bidderCount <= 7);
        require(msg.value >= 1000000001); // for gas
        for (uint i = 0; i < merchantList.length; i++) {
            if (merchantList[i] == 0) {
                merchantBids[msg.sender] = bidAmount;
                merchantList[bidderCount] = msg.sender;
                bidderCount += 1;
                return true;
            }
        }
    }


    // recipient selects merchant
    function selectMerchant(address selectedMerchant) public recipientOnly {
        require(merchantBids[selectedMerchant] != 0);
        merchant = selectedMerchant;
    }

    // the Donor call this; it updates the fulfillment status in Factory
    function donate() public payable returns(bool) {
        require(msg.value == donationAmt * 1000000000000000000);
        require(merchant != 0);
        require(!donationExecuted);
        require(now < expirationDate);

        donor = msg.sender;
        merchant.transfer(msg.value);
        donationExecuted = true;
        GiftFactory giftFactory = GiftFactory(parentFactory);
        giftFactory.updateFulfillmentMapping(this, true, msg.sender);

        return donationExecuted;
    }

    // recipient signs this to continue using the platform. What do we do about lost private keys?
    function recipientSign() public recipientOnly returns(bool){
        recipientSigned = true;
        return recipientSigned;
    }
    // enables recipient to articulate delivery failure
    function recipientReportsDeliveryFailure() public recipientOnly returns(address){
        recipientReportsDeliveryFailure = true;
        return merchant; // we could add this to a 'probation' array
    }

    // merchant calls this to remove bid
    function removeBid() public {
        merchantBids[msg.sender] = 0;
        for (uint i = 0; i < merchantList.length; i++) {
            if (merchantList[i] == msg.sender) {
                delete merchantList[i];
                bidderCount -= 1;
            }
        }
    }

    /* this is called by Factory to do input validation, to ensure only
    valid addresses call the updateFulfillmentMapping */
    function donorCheck() public view returns(address) {
        return donor;
    }

    function() public {
        revert();
    }
}
