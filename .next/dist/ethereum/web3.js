'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// let web3 = new Web3(window.web3.currentProvider)

var web3 = void 0;

// if this runs we are in the browser and metamask is running
/*
This tells the DApp how to interact with the Network
*/

if (typeof window !== 'undefined' && window.web3 !== 'undefined') {
	web3 = new _web2.default(window.web3.currentProvider);
} else {
	/* if this runs, we are on the server *OR* the user is not running metamask
  we set up our own provider through infura */
	var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/0EQx7uotOUUoAlWuNWHq');
	web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsIndlYjMiLCJ3aW5kb3ciLCJjdXJyZW50UHJvdmlkZXIiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBSUEsQUFBTzs7Ozs7O0FBRVA7O0FBRUEsSUFBSSxZQUFKOztBQUVBO0FBVkE7Ozs7QUFXQSxJQUFJLE9BQUEsQUFBTyxXQUFQLEFBQWtCLGVBQWUsT0FBQSxBQUFPLFNBQTVDLEFBQXFELGFBQWEsQUFDakU7UUFBTyxBQUFJLGtCQUFLLE9BQUEsQUFBTyxLQUF2QixBQUFPLEFBQXFCLEFBQzVCO0FBRkQsT0FFTyxBQUNOO0FBRUE7O0tBQU0sV0FBVyxJQUFJLGNBQUEsQUFBSyxVQUFULEFBQW1CLGFBQXBDLEFBQWlCLEFBQ2hCLEFBRUQ7UUFBTyxBQUFJLGtCQUFYLEFBQU8sQUFBUyxBQUNoQjtBQUVEOztrQkFBQSxBQUFlIiwiZmlsZSI6IndlYjMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01vcmdhbi9Eb2N1bWVudHMvc21hcnRHaXZpbmcifQ==