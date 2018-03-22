import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from '../routes'

export default () => {
	return (
		<Menu>
			<Link route="/" />

			<Menu.Menu>
				<Link>Gifts</Link>
				<Link>+</Link>
			</Menu.Menu>
		</Menu>
	)
}
