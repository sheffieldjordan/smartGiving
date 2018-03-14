require('events').EventEmitter.defaultMaxListeners = 20
const assert = require('assert')
const ganache = require('ganache-cli')
const Web3 = require('web3')
const provider = ganache.provider()
const web3 = new Web3(provider) // make instance of Web3 and set a provider
// require the compiled versions of our contracts
const compiledFactory = require('../ethereum/build/GiftFactoryUpdate.json')
const compiledGift = require('../ethereum/build/SmartGiftUpdate.json')

let accounts // 0 is us, 1 is Merchant, 2 is Recipient, 3 is Donor
let factory // deployed instance of the factory
let giftAddress // assign gift instance address to this.
let gift // use factory to create instance of gift and assign it to this var

beforeEach(async () => {
	accounts = await web3.eth.getAccounts()
	factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface)) // now contract is in web3, but now you have to deploy it
		.deploy({ data: compiledFactory.bytecode })
		.send({ from: accounts[0], gas: '1000000' }) // we deploy the Factory

	factory.setProvider(provider)

	await factory.methods
		.createSmartGift(accounts[2], web3.utils.toWei('5', 'ether')) // create a Gift and mark accounts[2] as Recipient
		.send({
			from: accounts[1],
			gas: 1000000
		})
	// take the first element out of the array returned and assign it to giftAddress
	;[giftAddress] = await factory.methods.returnDeployedGifts().call()

	gift = await new web3.eth.Contract(
		JSON.parse(compiledGift.interface),
		giftAddress
	) // already been deployed so don't have to execute .deploy or .send, and you include the deployed address
})

describe('SmartGift Contract', () => {
	it('deploys the Factory and SmartGift contracts', () => {
		assert.ok(factory.options.address)
		// console.log(factory.options.address);
		assert.ok(gift.options.address)
	})

	it('marks correct address as the gift recipient', async () => {
		// retrieve recipient variable and compare it to accounts[2]
		const recipient = await gift.methods.recipient().call()
		assert.equal(accounts[2], recipient)
	})

	it('fails if donation amount is incorrect', async () => {
		try {
			await campaign.methods.donate().send({
				from: accounts[3],
				value: web3.utils.toWei('4', 'ether')
			})
		} catch (err) {
			assert(err)
			return
		}
		assert(false)
	})

	it('updates donation status', async () => {
		// const donationAmount = await gift.methods.donationAmt().call()
		// console.log(donationAmount)
		await gift.methods.donate().send({
			from: accounts[3],
			value: web3.utils.toWei('5', 'ether'),
			gas: 1000000
		})
		const giftDonationStatus = await gift.methods.donationExecuted().call()
		// console.log(giftDonationStatus)
		const factoryDonationStatus = await factory.methods
			.giftFulfilled(giftAddress)
			.call()
		// console.log(factoryDonationStatus)

		assert(giftDonationStatus)
		assert(factoryDonationStatus)
	})
})

//
//   it('allows contributors to join', () => {
//     ...
//   });
//

//
//   it(' ')
// }
