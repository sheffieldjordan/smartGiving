import React from 'react'

const MerchantItem = ({ merchant, onMerchantSelect }) => {
	return (
		<li>
			<button
				onClick={() => onMerchantSelect(merchant)}
				className="merchant-name"
			>
				{merchant}
			</button>
		</li>
	)
}

export default MerchantItem
