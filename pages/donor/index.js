import React, { Component } from 'react'
import web3 from '../../ethereum/web3'
import Donate from '../../components/Donate'

// import './App.css'

class Donor extends Component {
	render() {
		return (
			<div className="App">
				<div>
					<Donate />
				</div>
			</div>
		)
	}
}

export default Donor
