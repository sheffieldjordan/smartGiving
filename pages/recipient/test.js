import React, { Component } from 'react'
import factory from '../../ethereum/factory'
import { Card, Button, Table } from 'semantic-ui-react'
import Layout from '../../components/Layout'
import { Link } from '../../routes'
import SmartGift from '../../ethereum/smartgift'
import GiftRow from '../../components/GiftRow0'

class RecipientGiftIndex extends Component {
	static async getInitialProps() {
		/* creates an array of the Gifts Addresses for Receipient 0xfaa7541...*/
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

		var merchantX = []
		var giftList = []
		var newGift = {}

		var giftJSON = function() {
			return {
				requests: [
					{
						recipient: {
							address: '',
							name: '',
							pic: null,
							about: '',
							challenge: ''
						},
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
				]
			}
		}
    fucntion converToDatabaseObject(EthereumJSON) {
      let DBJSON = {
        recipient: {
          address: EthereumJSON.giftAddress
        },
        max
      }
    }

    // Gabe's dumbass pseudocode
    const getAllGifts = () => {
      return
      let allGifts = []
      for (recipient in recipients) {
        const recipientGifts = getGiftsByRecipient(recipient)
        for (gift in recipientGifts) {
          const giftJSON = getGiftStats(gift)
          allGifts.push(converToDatabaseObject(giftJSON))
        }
      }
      return {
        requests: allGifts
      }

    }


		const getDb = async (recipients, merchants) => {
			for (let i = 0; i < recipients.length - 1; i++) {
				let recipientGifts = await factory.methods
					.getGiftsByRecipient(recipients[i])
					.call()
				var newGift = giftJSON()
				newGift.recipient.address = recipients[i]

				console.log(newGift)
				// newGift.recipient.address = newGift
				// giftList.push(newGift)
			}
			console.log('giftList: ', giftList)
			console.log('Morgan')
		}
		getDb(recipients, merchants)
		return { recipients, merchants, giftList }
	}
	/* Creates a <Row /> with the Gift Address, Recipient, and Gift Stats as props */
	renderRow() {
		return
	}

	render() {
		const { Header, Row, HeaderCell, Body } = Table
		return (
			<div>
				<link
					rel="stylesheet"
					href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
				/>
				<h3> Your Current Gifts</h3>

				<table className="table table-hover">
					<thead>
						<tr>
							<th>1</th>
						</tr>
					</thead>

					<tbody>{this.props.giftList}</tbody>
				</table>
			</div>
		)
	}
}

export default RecipientGiftIndex
