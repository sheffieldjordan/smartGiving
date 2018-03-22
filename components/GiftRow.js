import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'

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
				<Cell>{gift[3]}</Cell>
				<Cell>{gift[4]}</Cell>
				<Cell>{gift[5]}</Cell>
				<Cell>{gift[6]}</Cell>
				<Cell>{gift[7]}</Cell>
				<Cell>{gift[8].toString()}</Cell>
				<Cell>{gift[9].toString()}</Cell>
				<Cell>{gift[10].valueOf()}</Cell>
			</Row>
		)
	}
}

export default GiftRow
