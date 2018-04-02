import React, { Component } from 'react'
import factory from '../../ethereum/factory'
import { Card, Button, Table } from 'semantic-ui-react'
import Layout from '../../components/Layout'
import { Link } from '../../routes'
import SmartGift from '../../ethereum/smartgift'
import GiftRow from '../../components/GiftRow'

class RecipientGiftIndex extends Component {
	static async getInitialProps() {
		/* creates an array of the Gifts Addresses for Receipient 0xfaa7541...*/
		let recipientGifts = await factory.methods
			.getGiftsByRecipient('0x68009930D2E4a9A0A4b53484AED8289c86802Ae5')
			.call()
		recipientGifts = recipientGifts.filter(
			(address) => address !== '0x0000000000000000000000000000000000000000'
		)

		/* iterates over the array of Gift Addresses, and gets Gift Stats for each */
		let giftStats = []
		for (let i = 0; i < recipientGifts.length; i++) {
			giftStats.push(
				await SmartGift(recipientGifts[i])
					.methods.getGiftStats()
					.call()
			)
		}

		return { recipientGifts, giftStats }
	}
	/* Creates a <Row /> with the Gift Address, Recipient, and Gift Stats as props */
	renderRow() {
		return this.props.giftStats.map((gift, index) => {
			return (
				<GiftRow
					key={index}
					id={index}
					giftAddress={this.props.recipientGifts[index]}
					gift={gift}
				/>
			)
		})
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

				<Table>
					<Header>
						<Row>
							<HeaderCell>ID</HeaderCell>
							<HeaderCell>Gift Address</HeaderCell>
							<HeaderCell>Recipient</HeaderCell>
							<HeaderCell>Donor</HeaderCell>
							<HeaderCell>Merchant</HeaderCell>
							<HeaderCell>Donor's Max Price</HeaderCell>
							<HeaderCell>Lowest Bid</HeaderCell>
							<HeaderCell>Final Price</HeaderCell>
							<HeaderCell>Expiry</HeaderCell>
							<HeaderCell>Last Update</HeaderCell>
							<HeaderCell>Creation Time</HeaderCell>
							<HeaderCell>Bidder Count</HeaderCell>
							<HeaderCell>Item Shipped</HeaderCell>
							<HeaderCell>Item Delivered</HeaderCell>
							<HeaderCell>Donor Message</HeaderCell>
						</Row>
					</Header>
					<Body>{this.renderRow()}</Body>
				</Table>
			</div>
		)
	}
}

export default RecipientGiftIndex
