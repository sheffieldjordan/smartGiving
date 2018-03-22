import React, { Component } from 'react'
import factory from '../../ethereum/factory'
import { Card, Button, Table } from 'semantic-ui-react'
import Layout from '../../components/Layout'
import { Link } from '../../routes'
import SmartGift from '../../ethereum/smartgift'
import GiftRow from '../../components/GiftRow'

// export default () => {
// 	return <h1>These are the Recipient's Gifts!</h1>
// }
/* IGNORE THESE NOTES: Redefine the above functional-Component to a Class-Based-Component
That enables us to access lifecycle method componentDidMount(), which
is a great place to load up data inside of a React Component. Once we load the
data, we can render it out to the user. So class based component below:
... but componentDidMount() is not executed on the server when you use NextJS, so
we have to use getInitialProps() instead (also a LC Method, but used exclusively
by NextJS).
static keyword assigns this method to the Class itself, and you don't need an
instance to call the function that follows it.
Next wants to get data without rendering it.*/

class RecipientGiftIndex extends Component {
	static async getInitialProps() {
		/* creates an array of the Gifts Addresses for Receipient 0xfaa7541...*/
		let recipientGifts = await factory.methods
			.getGiftsByRecipient('0xfaa7541c5cbe22e4518736d2b5fc34d07347ee45')
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

	//My React Notes (IGNORE): You always have to render out JSX in a render method. If you don't you'll
	//get an error. Whever Next imports a file, Next.js always expects you to export()
	//a React Component, or it throws error. It's not enough to define it.  So always
	//create a render(Return(JSX)) function and always make an epxort default statement when testing.
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
