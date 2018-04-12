import React, { Component } from 'react'

import web3 from '../ethereum/web3'
import factory from '../ethereum/factory'

class Donate extends Component {
	state = {
		value: '',
		errorMessage: '',
		loading: false,
		recipientAddress: '0x68009930D2E4a9A0A4b53484AED8289c86802Ae5', // this must update based on what the donor is looking at
		expiry: '',
		donorMsg: 'enter message here', //
		message: '',
		giftInstance: '',
		recipientMessage: ''
	}
	async componentDidMount() {}

	onSubmit = async (event) => {
		event.preventDefault()
		this.setState({
			message: 'Waiting on transaction validation...',
			loading: true,
			errorMessage: ''
		})

		/* wrap Web3 state-changing functions in a try/catch statement to handle errors */
		try {
			const accounts = await web3.eth.getAccounts()
			const giftInstance = await factory.methods
				.createSmartGift(
					this.state.recipientAddress,
					this.state.expiry,
					this.state.donorMsg
				)
				.send({
					from: accounts[0],
					value: web3.utils.toWei(this.state.value, 'ether'),
					gas: 1000000
				})

			this.setState({
				giftInstance: giftInstance.events.GiftCreated.returnValues['0'],
				message: `You've created a Gift for ${
					this.state.recipientAddress
				} worth up to ${this.state.value} ether at address`
			})
		} catch (err) {
			this.setState({ errorMessage: err.message })
		}

		this.setState({ loading: false, value: '' })
	}

	render() {
		/* the {this.onSubmit} below is without parentheses because we dont' want it
     to be called on initial rendertime; we want to pass a reference on the
     function so we can call it in the future
     */
		return (
			<div>
				<h2>Finalize your Donation</h2>
				<p>Recipient: {this.state.recipientAddress}</p>
				<p>Recipient's Request: {this.state.recipientMessage}</p>
				Expiration Date: {this.state.expiry}
				<p>
					Please input your maximum donation amount and a message below.
					Merchants will bid to fulfill this gift. The Recipient will be
					required to select one of the lowest three bids.
				</p>
				<hr />
				<form onSubmit={this.onSubmit}>
					<h4>Enter details below</h4>
					<div>
						<label>Donation Amount: </label>
						<input
							name="value"
							value={this.state.value}
							onChange={(event) => this.setState({ value: event.target.value })}
						/>
						<div>
							<label>Donor Message: </label>
							<input
								name="donorMsg"
								value={this.state.donorMsg}
								onChange={(event) =>
									this.setState({ donorMsg: event.target.value })
								}
							/>
						</div>
					</div>
					<button>Donate</button>
				</form>
				<hr />
				<h1>{this.state.message}</h1>
				<p>{this.state.giftInstance}</p>
			</div>
		)
	}
}

export default Donate

//
// <form
//   className="commentForm"
//   onSubmit={this.onSubmit}
//   error={toString(!!this.state.errorMessage)}
// >
//   <input
//     label="ether"
//     value={this.state.value}
//     onChange={(event) => this.setState({ value: event.target.value })}
//   />
//   <input type="submit" value="Donate" />
//
//   <div>{this.state.errorMessage}</div>
