'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _SmartGift = require('./build/SmartGift.json');

var _SmartGift2 = _interopRequireDefault(_SmartGift);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Pass this a SmartGift address to enable querying stats on a deployed SmartGift 
from within the DApp*/

exports.default = function (address) {
	return new _web2.default.eth.Contract(JSON.parse(_SmartGift2.default.interface), address);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3NtYXJ0Z2lmdC5qcyJdLCJuYW1lcyI6WyJ3ZWIzIiwiU21hcnRHaWZ0IiwiYWRkcmVzcyIsImV0aCIsIkNvbnRyYWN0IiwiSlNPTiIsInBhcnNlIiwiaW50ZXJmYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFHQSxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFlLEFBRXRCOzs7Ozs7QUFOQTs7O2tCQU1lLFVBQUEsQUFBQyxTQUFZLEFBQzNCO1FBQU8sSUFBSSxjQUFBLEFBQUssSUFBVCxBQUFhLFNBQVMsS0FBQSxBQUFLLE1BQU0sb0JBQWpDLEFBQXNCLEFBQXFCLFlBQWxELEFBQU8sQUFBdUQsQUFDOUQ7QUFGRCIsImZpbGUiOiJzbWFydGdpZnQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01vcmdhbi9Eb2N1bWVudHMvc21hcnRHaXZpbmcifQ==