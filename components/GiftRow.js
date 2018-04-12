import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'
import web3 from '../ethereum/web3'

class GiftRow extends Component {
	render() {
		const { Row, Cell } = Table
		const { id, gift, giftAddress } = this.props
		return (
			<Row>
				<Cell>{id}</Cell>
				<Cell>{giftAddress.slice(0, 9)}...</Cell>
				<Cell>{gift[0].slice(0, 9)}...</Cell>
				<Cell>{gift[1].slice(0, 9)}...</Cell>
				<Cell>{gift[2].slice(0, 9)}...</Cell>
				<Cell>
					{web3.utils.fromWei(gift[3], 'ether').slice(0, 5) + ' ether'}
				</Cell>
				<Cell>{web3.utils.fromWei(gift[4], 'ether') + ' ether'}</Cell>
				<Cell>{web3.utils.fromWei(gift[5], 'ether') + ' ether'}</Cell>
				<Cell>{gift[6]}</Cell>
				<Cell>{gift[7]}</Cell>
				<Cell>{gift[8]}</Cell>
				<Cell>{gift[9]}</Cell>
				<Cell>{gift[10].toString()}</Cell>
				<Cell>{gift[11].toString()}</Cell>
				<Cell>{gift[12].valueOf()}</Cell>
			</Row>
		)
	}
}

export default GiftRow
