import { Connect, SimpleSigner } from 'uport-connect'

const uport = new Connect("Morgan Jordan's new app", {
	clientId: '2opRVGrwqrqynaUtEuYYi1q1nbhsaGpM6B1', // smartAid address
	network: 'rinkeby or ropsten or kovan',
	signer: SimpleSigner(
		'dfaff7bcafafe06a063a7479185ed8b01b7ea72916946ecf93ed4e5d978c1698'
	)
})

// Request credentials to login
uport
	.requestCredentials({
		requested: ['name', 'phone', 'country'],
		notifications: true // We want this if we want to recieve credentials
	})
	.then((credentials) => {
		// Do something
	})

// Attest specific credentials
uport.attestCredentials({
	sub: THE_RECEIVING_UPORT_ADDRESS,
	claim: {
		CREDENTIAL_NAME: CREDENTIAL_VALUE
	},
	exp: new Date().getTime() + 30 * 24 * 60 * 60 * 1000 // 30 days from now
})

const web3 = uport.getWeb3()
export { web3, uport, MNID }
