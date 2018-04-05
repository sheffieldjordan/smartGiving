import React, { Component } from 'react'
import web3 from '../../ethereum/web3'
import SmartGift from '../../ethereum/smartgift'

class ItemSent extends Component {
	state = {
		loading: false
	}

	itemShipped = async () => {
		event.preventDefault()
		this.setState({
			loading: true
		})
		console.log('state set')

		try {
			const gift = SmartGift('0xF7277A10450F61AC86FDCDEb9B14F001888aA78D') // the gift has to come from Mongo or React Router
			console.log(`gift: ${gift}`)
			const accounts = await web3.eth.getAccounts()
			const merchantShipsItem = await gift.methods.merchantShipsItem().send({
				from: accounts[0],
				gas: 1000000
			})

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
			<div className="item-sent">
				<div>
					<h2>
						Congratulations! You've been selected to fulfill this SmartGift!
					</h2>
					<h3>
						[your bid amount] Ether has been sent to [your Ethereum address].
						After shipping the item, please update the SmartGift Contract by
						clicking below.
					</h3>
					<p>
						This is required to continue using the SmartGiving platform and to
						maintain your Merchant Reputation.
					</p>

					<button onClick={() => this.itemShipped()}>Item Sent</button>
				</div>
				<p>{this.state.errorMessage}</p>
				<h3>{this.state.message}</h3>
			</div>
		)
	}
}

export default ItemSent
