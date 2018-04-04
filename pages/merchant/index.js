import React, { Component } from 'react'
import web3 from '../../ethereum/web3'
import Bid from '../../components/Bid'

// import './App.css'

class Merchant extends Component {
	render() {
		return (
			<div className="bid">
				<div>
					<Bid />
				</div>
			</div>
		)
	}
}

export default Merchant
