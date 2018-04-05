import React, { Component } from 'react'
import web3 from '../../ethereum/web3'
import SmartGift from '../../ethereum/smartgift'

class ItemReceived extends Component {
	state = {
		errorMessage: '',
		message: ''
	}
	static async getInitialProps(props) {
		const giftAddress = '0xF7277A10450F61AC86FDCDEb9B14F001888aA78D'

		return {
			giftAddress
		}
	}

	itemReceived = async () => {
		event.preventDefault()
		this.setState({
			loading: true
		})
		console.log('state set')

		try {
			const gift = SmartGift(this.props.giftAddress) // the gift has to come from Mongo or React Router
			console.log(`gift: ${gift}`)
			const accounts = await web3.eth.getAccounts()
			const recipientReceivesItem = await gift.methods
				.recipientReceivesItem()
				.send({
					from: accounts[0],
					gas: 1000000
				})
			console.log(recipientReceivesItem)
			this.setState({
				message: 'Transaction Validated! Thanks!'
			})
		} catch (err) {
			this.setState({ errorMessage: err.message.slice(0, 80) })
		}

		this.setState({ loading: false })
	}

	render() {
		return (
			<div className="item-received">
				<div>
					<h2>Your SmartGift has been shipped!</h2>
					<h3>
						After receiving the item, please update the SmartGift Contract
						status below. Please leave any relevant comments too.
					</h3>
					<p>
						This is required to continue using the SmartGiving platform and to
						maintain your Recipient Reputation.
					</p>

					<button onClick={() => this.itemReceived()}>Item Received</button>
					<button onClick={() => this.itemMissing()}>Item Missing</button>
					<button onClick={() => this.itemDamaged()}>Item Damaged</button>
				</div>
				<p>{this.state.errorMessage}</p>
				<h3>{this.state.message}</h3>
			</div>
		)
	}
}

export default ItemReceived
