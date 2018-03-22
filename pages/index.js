import React, { Component } from 'react'
import factory from '../ethereum/factory'
import { Card, Button } from 'semantic-ui-react'
import Layout from '../components/Layout'

class GiftIndex extends Component {
	componentDidMount() {}

	// static async getInitialProps() {
	// 	// const gifts = await factory.methods.
	// 	const completedGifts = await factory.methods.completedGifts().call()
	//
	// 	return {
	// 		campaigns: completedGifts
	// 	}
	// }

	render() {
		return (
			// <Layout>
			<div>
				<link
					rel="stylesheet"
					href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
				/>
				<h3>Events Logger</h3>
			</div>
			// </Layout>
		)
	}
}
export default GiftIndex
