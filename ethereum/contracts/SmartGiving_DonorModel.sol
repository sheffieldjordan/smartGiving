pragma solidity 0.4.20;

/* smartGiving deploys and manages the GiftFactory. This is what is made available
to users on our website. Using this contract, donors call the 'createSmartGift'
function, which instantiates a SmartGift contract for the Recipient to use. */
contract GiftFactory {
    address[] public deployedSmartGifts;
    address public currentDonor;
    uint public nextGiftIndex = 0;
   // uint gasCosts = 1000000; // << is there a way to use oracle for gas cost?


    function createSmartGift(string _donorMsg, string _category, address _recipient)
        public payable {
            require(msg.value >= 1000001);
            address newGift;
            _recipient.transfer(1000000); // sent to Recipient for gas

            newGift = new SmartGift(_donorMsg, _category, _recipient, msg.sender);
            deployedSmartGifts.push(newGift);
            currentDonor = msg.sender;
            //transferMoney(); // << Gift wouldn't instatiate correctly with this

    }
    /* function to transfer the money to the Gift contract. Couldn't figure
    out how to make this happen at instatiation time. Thoughts? */
    function transferMoney() public {
        require(msg.sender == currentDonor);
        deployedSmartGifts[nextGiftIndex].transfer(address(this).balance);
        nextGiftIndex++;
        delete(currentDonor);
    }
    /* return an array of the addresses of the deployed Gifts */
    function returnDeployedGifts() public view returns(address[]) {
        return deployedSmartGifts;
    }

    function getBalance() public view returns(uint){
        return address(this).balance;
    }
}



contract SmartGift {
    address public donor;
    address public recipient;
    address public merchant;

    string public donorMsg; // or a struct
    string category;
    bool public transferToMerchant;
    bool public recipientSigned;

    /*approvedMerchants will be moved to another contract*/
    mapping(address => bool) public approvedMerchants;

    modifier recipientOnly() {
        require(msg.sender == recipient);
        _;
    }
    /* creates the SmartGift, indicates the donor's message, the donor,
    and the recipient. approvedMerchants will be moved to a separate contract
    managed by smartGiving. Also need to figure out how to manage category. */
    function SmartGift(string _donorMsg, string _category, address _recipient, address _donor) public payable {
        donor = _donor;
        donorMsg = _donorMsg;
        recipient = _recipient;
        category = _category;
        approvedMerchants[0x583031d1113ad414f02576bd6afabfb302140225] = true;
    }
    /* recipient transfers the money to the merchant.
    Merchant has to be on approved list */
    function transferToMerchant(address _merchant) public recipientOnly returns(bool) {
        require(address(this).balance !=0);
        require(approvedMerchants[_merchant] = true);
        _merchant.transfer(address(this).balance);
        transferToMerchant = true;
        return true;
    }
    /* recipeint signs to confirm he's received the goods and continue using
    our site to make requests */
    function recipientSign() public recipientOnly returns(bool){
        recipientSigned = true;
    }
    /* check that the ether transfer happened from the donor to the Gift contract */
    function getBalance() public view returns(uint){
        return address(this).balance;
    }

    function() public payable {}
}
