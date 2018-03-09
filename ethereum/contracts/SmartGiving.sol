pragma solidity ^0.4.20;

/* smartGiving deploys and manages the GiftFactory.  Using this contract,
a Merchant calls the 'createSmartGift'
function, which instantiates a SmartGift contract for a Donor to fulfill.
The front-end DApp will also call functions to update state*/

contract GiftFactory {

    address[] public deployedSmartGifts;

    mapping(address => bool) giftFulfilled;

    event DonationMade(address gift, address donor); // for event listening in JS

    // _recipient comes from our database; totalCost is inputted by the Merchant
    function createSmartGift(address _recipient, uint totalCost) public payable {

            require(msg.value >= 1000000001); // for gas
            require(msg.value >= totalCost + 1000000001);

            address newGift;

            _recipient.transfer(1000000000); // pay gas to recipient to pay for their signature

            newGift = new SmartGift(totalCost, _recipient, msg.sender);
            deployedSmartGifts.push(newGift);
    }

    // the front-end will call this to get an array of all smartGifts for display
    function returnDeployedGifts() public view returns(address[]) {
        return deployedSmartGifts;
    }

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
        DonationMade(_gift, _donor);
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

    uint public donationAmt;
    uint public expirationDate;

    bool public donationExecuted;
    bool public recipientSigned;

    modifier recipientOnly() {
        require(msg.sender == recipient);
        _;
    }

    // this is called by the Factory on behalf of the Merchant to instantiate the Gift.
    function SmartGift(uint totalCost, address _recipient, address _merchant) public payable {
        donationAmt =  totalCost;
        recipient = _recipient;
        merchant = _merchant;
        expirationDate = now + 30 days;
        parentFactory = msg.sender;

        }

    // the Donor call this; it updates the fulfillment status in Factory
    function donate() public payable returns(bool) {
        require(msg.value == donationAmt * 1000000000000000000);
        donor = msg.sender;
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

    /* this is called by Factory to do input validation, to ensure only
    valid addresses call the updateFulfillmentMapping */
    function donorCheck() public view returns(address) {
        return donor;
    }

    function() public {
        revert();
    }
}
