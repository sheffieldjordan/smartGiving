import React, { Component } from 'react'
import web3 from '../../ethereum/web3'
import SmartGift from '../../ethereum/smartgift'
import factory from '../../ethereum/factory'

const recipients = [
	'0xfAA7541C5cBe22E4518736D2b5fC34D07347eE45',
	'0x68009930D2E4a9A0A4b53484AED8289c86802Ae5',
	'0xBae217221CbFE934d8e190c8f0A836Cd44a7ed07',
	'0x038740aE426fa19758f6B77E7A92d4F4169e1772'
]
const merchants = [
	'0xfAA7541C5cBe22E4518736D2b5fC34D07347eE45',
	'0x68009930D2E4a9A0A4b53484AED8289c86802Ae5',
	'0xBae217221CbFE934d8e190c8f0A836Cd44a7ed07',
	'0x038740aE426fa19758f6B77E7A92d4F4169e1772'
]

var allGifts = []
var merchantX = []
var giftList = []

giftJSON = {
	recipient: { address: '', name: '', pic: null, about: '', challenge: '' },
	expiry: 0,
	description: '',
	items: [{ desc: '', qty: 0, unit: '' }],
	preferredMerchants: [''],
	donor: '',
	maxDonation: 0,
	recommendedDonation: 0,
	startTime: 0,
	giftAddress: '',
	bids: [
		{
			merchId: '',
			bid: 0,
			merchInfo: { name: '', location: '', about: '', pic: null }
		}
	],
	updateTime: 0,
	selectedMerchant: '',
	finalCost: 0,
	merchantShipped: false,
	timeShipped: 0,
	itemReceived: false,
	timeReceived: 0,
	balance: 0
}

async function getDb(recipients, merchants) {
	for (let i = 0; i < recipients.length - 1; i++) {
		let recipientGifts = await factory.methods
			.getGiftsByRecipient(recipients[i])
			.call()
		let newGift = new giftJSON()
		newGift.recipient.address = newGift
		giftList.push(newGift)
	}
	console.log(giftList)
}

getDb(recipients, merchants)

/* iterates over the array of Gift Addresses, and gets Gift Stats for each */
// let giftStats = []
// for (let i = 0; i < recipientGifts.length; i++) {
// 	giftStats.push(
// 		await SmartGift(recipientGifts[i])
// 			.methods.merchantsToBids('0x038740aE426fa19758f6B77E7A92d4F4169e1772')
// 			.call()
// 	)
// }
// console.log(giftStats)

return { recipientGifts, giftStats }
}
}
