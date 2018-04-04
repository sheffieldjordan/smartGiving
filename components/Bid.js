import React, { Component } from 'react'

import web3 from '../ethereum/web3'
import SmartGift from '../ethereum/smartgift'
import { Router } from '../routes' /* importing the Router property from routes.js
 so we can refresh the page after a contribution has been made*/

class Bid extends Component {
	constructor(props) {
		super(props)
		this.state = {
			bid: '',
			lowestBid: '[Amount from MongoDB]',
			errorMessage: '',
			loading: false,
			message: '',
			giftAddress: '0xf7277a10450f61ac86fdcdeb9b14f001888aa78d',
			recipientAddress: '[Address from MongoDB]',
			recipientMessage: '[Message from MongoDB]'
		}
	}
	// static async getInitialProps() {
	// 	let giftAddress = 0xf7277a10450f61ac86fdcdeb9b14f001888aa78d // can come from props.query.address in url or Mongo DB
	// 	let recipientaddress = '[Address from MongoDB]'
	// 	let recipientMessage = '[Message from MongoDB]'
	// 	let targetGift = SmartGift(giftAddress)
	//
	// 	let lowestBid = await targetGift.methods.lowestBid().call() // async call to Blockchain. Can come from Mongo too.
	//
	// 	return {
	// 		bid: '',
	// 		lowestBid: 'morgan',
	// 		errorMessage: '',
	// 		loading: false,
	// 		message: '',
	// 		giftaddress: giftAddress,
	// 		recipientAddress: recipientAddress,
	// 		recipientMessage: recipientMessage
	// 	}

	// async componentWillMount() {
	// 	this.setState({ lowestBid: async () => await smartgift.methods })
	// }

	onSubmit = async (event) => {
		var x = document.forms['bidForm']['bidField'].value
		if (x == '' || isNaN(x) || x == 0) {
			alert('Please enter a number greater than 0 in order to bid.')
			return false
		}

		event.preventDefault()
		this.setState({
			message: 'Waiting on bid validation...',
			loading: true,
			errorMessage: ''
		})

		/* wrap Web3 state-changing functions in a try/catch statement to handle errors */
		try {
			const targetGift = SmartGift(this.state.giftAddress)
			const accounts = await web3.eth.getAccounts()
			const bidEntry = await targetGift.methods
				.merchantBids(web3.utils.toWei(this.state.bid, 'ether'))
				.send({
					from: accounts[0],
					gas: 1000000
				})

			this.setState({
				message: `You've successfully bid ${this.state.bid} ether.`
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
				<h2>Bid on the following Gift:</h2>
				<h2>{this.state.giftAddress}</h2>
				<p>Recipient: {this.state.recipientAddress}</p>
				<p>Recipient's Request: {this.state.recipientMessage}</p>
				<p>
					Please input your lowest bid below. The Recipient will be required to
					select one of the lowest three bids. Currently the lowest bid is:{
						this.state.lowestBid
					}
				</p>
				<hr />
				<form name="bidForm" onSubmit={this.onSubmit}>
					<h4>Enter details below</h4>
					<div>
						<label>Bid Amount: </label>
						<input
							name="bidField"
							value={this.props.bid}
							onChange={(event) => this.setState({ bid: event.target.value })}
						/>
					</div>
					<p id="demo" />
					<button>Bid</button>
				</form>
				<hr />
				<h1>{this.state.message}</h1>
			</div>
		)
	}
}

export default Bid
