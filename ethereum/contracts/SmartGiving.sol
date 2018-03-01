pragma solidity ^0.4.20;

contract GiftFactory {
    address[] public deployedSmartGifts;
    address public currentDonor;
    uint public nextGiftIndex = 0;
   // uint gasCosts = 1000000; // use oracle

    function createSmartGift(string _donorMsg, string _category, address _recipient)
        public payable {

            require(msg.value >= 1000001);
            address newGift;
            _recipient.transfer(1000000);

            newGift = new SmartGift(_donorMsg, _category, _recipient, msg.sender);
            deployedSmartGifts.push(newGift);
            currentDonor = msg.sender;
            //transferMoney();

    }
    function transferMoney() public {
        require(msg.sender == currentDonor);
        deployedSmartGifts[nextGiftIndex].transfer(address(this).balance);
        nextGiftIndex++;
        delete(currentDonor);
    }

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

    mapping(address => bool) public approvedMerchants;

    modifier recipientOnly() {
        require(msg.sender == recipient);
        _;
    }

    function SmartGift(string _donorMsg, string _category, address _recipient, address _donor) public payable {
        donor = _donor;
        donorMsg = _donorMsg;
        recipient = _recipient;
        category = _category;
        approvedMerchants[0x583031d1113ad414f02576bd6afabfb302140225] = true;
    }

    function transferToMerchant(address _merchant) public recipientOnly returns(bool) {
        require(address(this).balance !=0);
        require(approvedMerchants[_merchant] = true);
        _merchant.transfer(address(this).balance);
        transferToMerchant = true;
        return true;
    }

    function recipientSign() public recipientOnly returns(bool){
        recipientSigned = true;
    }

    function getBalance() public view returns(uint){
        return address(this).balance;
    }

    function() public payable {}
}
