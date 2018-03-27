import React, { Component } from 'react'
import { Form, Input, Message, Button, Divider } from 'semantic-ui-react'
import web3 from '../ethereum/web3'

class Donate extends Component {
	static async getInitialProps() {
		return {
      value: '',
		errorMessage: '',
		loading: false,
		recipientAddress: '0xfAA7541C5cBe22E4518736D2b5fC34D07347eE45'
	}

	onSubmit = async (event) => {
		event.preventDefault()

		this.setState({ loading: true, errorMessage: '' })

		/* anytime you call a funciton wrap it in a try/catch statement to handle error */
		try {
			const accounts = await web3.eth.getAccounts()
			await web3.eth.sendTransaction({
				to: this.props.recipientAddress,
				from: accounts[0],
				value: web3.utils.toWei(this.state.value, 'ether')
			})

			// Router.replaceRoute(`/campaigns/${this.props.address}`);
		} catch (err) {
			this.setState({ errorMessage: err.message })
		}

		this.setState({ loading: false, value: '' })
	}

	render() {
		/* the {this.onSubmit} below is without parentheses because we dont' want to to be called on
     rendertime, we want to pass a reference on the function so we can callit in the future
     */
		return (
			<div onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
				<form>
					<label style={{ marginBottom: 5, marginTop: 50 }}>
Pledge Your Donation Here
				</label>
					<input
						label="ether"
						labelPosition="right"
						value={this.state.value}
						onChange={(event) => this.setState({ value: event.target.value })}
					/>
					<alert error header="Oops!" content={this.state.errorMessage} />
					<button
						primary
						loading={this.state.loading}
						style={{ marginBottom: 20, marginTop: 10 }}
					>
						Donate
					</button>
        </form>

			</div>
		)
	}
}

export default Donate
