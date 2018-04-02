'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _GiftFactory = require('./build/GiftFactory.json');

var _GiftFactory2 = _interopRequireDefault(_GiftFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* This file exists so the DApp can get access to our deployed instance of giftFactory
without having to import web3 into a Component everytime or something */

var factoryInstance = new _web2.default.eth.Contract(JSON.parse(_GiftFactory2.default.interface), '0x49D5C34464f4398A598D3D9e9d973fEB9966a485' // there's Gift Factory deployed on Rinkeby at this address
);

exports.default = factoryInstance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2ZhY3RvcnkuanMiXSwibmFtZXMiOlsid2ViMyIsIkdpZnRGYWN0b3J5IiwiZmFjdG9yeUluc3RhbmNlIiwiZXRoIiwiQ29udHJhY3QiLCJKU09OIiwicGFyc2UiLCJpbnRlcmZhY2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQWlCOzs7Ozs7QUFKeEI7OztBQU1BLElBQU0sc0JBQXNCLGNBQUEsQUFBSyxJQUFULEFBQWEsU0FDcEMsS0FBQSxBQUFLLE1BQU0sc0JBRFksQUFDdkIsQUFBdUIsWUFEQSxBQUV2Qiw2Q0FGRCxBQUF3QixBQUVzQixBQUc5QztBQUx3Qjs7a0JBS3hCLEFBQWUiLCJmaWxlIjoiZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTW9yZ2FuL0RvY3VtZW50cy9zbWFydEdpdmluZyJ9