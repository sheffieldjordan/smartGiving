const HDWalletProvider = require('truffle-hdwallet-provider')
const Web3 = require('web3')
const compiledFactory = require('./build/GiftFactory.json')

const provider = new HDWalletProvider(
	'body armor enrich average marble note staff prize three arrest glory deny',
	'https://rinkeby.infura.io/0EQx7uotOUUoAlWuNWHq'
)
const web3 = new Web3(provider)

const deploy = async () => {
	const accounts = await web3.eth.getAccounts()
	console.log('Deploying GiftFactory from account', accounts[0])
	const result = await new web3.eth.Contract(
		JSON.parse(compiledFactory.interface)
	)
		.deploy({ data: compiledFactory.bytecode })
		.send({ gas: '1000000', from: accounts[0] })

	console.log(compiledFactory.interface)
	console.log('SmartGift Factory deployed to', result.options.address)
}
deploy()
