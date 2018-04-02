'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Morgan/Documents/smartGiving/components/GiftRow.js';


var GiftRow = function (_Component) {
	(0, _inherits3.default)(GiftRow, _Component);

	function GiftRow() {
		(0, _classCallCheck3.default)(this, GiftRow);

		return (0, _possibleConstructorReturn3.default)(this, (GiftRow.__proto__ || (0, _getPrototypeOf2.default)(GiftRow)).apply(this, arguments));
	}

	(0, _createClass3.default)(GiftRow, [{
		key: 'render',
		value: function render() {
			var Row = _semanticUiReact.Table.Row,
			    Cell = _semanticUiReact.Table.Cell;
			var _props = this.props,
			    id = _props.id,
			    gift = _props.gift,
			    giftAddress = _props.giftAddress;

			return _react2.default.createElement(Row, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 10
				}
			}, _react2.default.createElement(Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 11
				}
			}, id), _react2.default.createElement(Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 12
				}
			}, giftAddress.slice(0, 9), '...'), _react2.default.createElement(Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 13
				}
			}, gift[0].slice(0, 9), '...'), _react2.default.createElement(Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 14
				}
			}, gift[1].slice(0, 9), '...'), _react2.default.createElement(Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 15
				}
			}, gift[2].slice(0, 9), '...'), _react2.default.createElement(Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 16
				}
			}, _web2.default.utils.fromWei(gift[3], 'ether').slice(0, 5) + ' ether'), _react2.default.createElement(Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 19
				}
			}, gift[4]), _react2.default.createElement(Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 20
				}
			}, gift[5]), _react2.default.createElement(Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 21
				}
			}, gift[6]), _react2.default.createElement(Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 22
				}
			}, gift[7]), _react2.default.createElement(Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 23
				}
			}, gift[8]), _react2.default.createElement(Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 24
				}
			}, gift[9]), _react2.default.createElement(Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 25
				}
			}, gift[10].toString()), _react2.default.createElement(Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 26
				}
			}, gift[11].toString()), _react2.default.createElement(Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 27
				}
			}, gift[12].valueOf()));
		}
	}]);

	return GiftRow;
}(_react.Component);

exports.default = GiftRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvR2lmdFJvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlRhYmxlIiwid2ViMyIsIkdpZnRSb3ciLCJSb3ciLCJDZWxsIiwicHJvcHMiLCJpZCIsImdpZnQiLCJnaWZ0QWRkcmVzcyIsInNsaWNlIiwidXRpbHMiLCJmcm9tV2VpIiwidG9TdHJpbmciLCJ2YWx1ZU9mIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTOztBQUNULEFBQU8sQUFBVTs7Ozs7Ozs7O0lBRVgsQTs7Ozs7Ozs7Ozs7MkJBQ0k7T0FBQSxBQUNBLE1BREEsQUFDYyx1QkFEZCxBQUNBO09BREEsQUFDSyxPQURMLEFBQ2MsdUJBRGQsQUFDSztnQkFDcUIsS0FGMUIsQUFFK0I7T0FGL0IsQUFFQSxZQUZBLEFBRUE7T0FGQSxBQUVJLGNBRkosQUFFSTtPQUZKLEFBRVUscUJBRlYsQUFFVSxBQUNsQjs7MEJBQ0UsY0FBRDs7ZUFBQTtpQkFBQSxBQUNDO0FBREQ7QUFBQSxJQUFBLGtCQUNFLGNBQUQ7O2VBQUE7aUJBQUEsQUFBTztBQUFQO0FBQUEsTUFERCxBQUNDLEFBQ0EscUJBQUMsY0FBRDs7ZUFBQTtpQkFBQSxBQUFPO0FBQVA7QUFBQSxrQkFBTyxBQUFZLE1BQVosQUFBa0IsR0FBekIsQUFBTyxBQUFxQixJQUY3QixBQUVDLEFBQ0Esd0JBQUMsY0FBRDs7ZUFBQTtpQkFBQSxBQUFPO0FBQVA7QUFBQSxXQUFPLEFBQUssR0FBTCxBQUFRLE1BQVIsQUFBYyxHQUFyQixBQUFPLEFBQWlCLElBSHpCLEFBR0MsQUFDQSx3QkFBQyxjQUFEOztlQUFBO2lCQUFBLEFBQU87QUFBUDtBQUFBLFdBQU8sQUFBSyxHQUFMLEFBQVEsTUFBUixBQUFjLEdBQXJCLEFBQU8sQUFBaUIsSUFKekIsQUFJQyxBQUNBLHdCQUFDLGNBQUQ7O2VBQUE7aUJBQUEsQUFBTztBQUFQO0FBQUEsV0FBTyxBQUFLLEdBQUwsQUFBUSxNQUFSLEFBQWMsR0FBckIsQUFBTyxBQUFpQixJQUx6QixBQUtDLEFBQ0Esd0JBQUMsY0FBRDs7ZUFBQTtpQkFBQSxBQUNFO0FBREY7QUFBQSxvQkFDRSxBQUFLLE1BQUwsQUFBVyxRQUFRLEtBQW5CLEFBQW1CLEFBQUssSUFBeEIsQUFBNEIsU0FBNUIsQUFBcUMsTUFBckMsQUFBMkMsR0FBM0MsQUFBOEMsS0FQakQsQUFNQyxBQUNxRCxBQUVyRCwyQkFBQyxjQUFEOztlQUFBO2lCQUFBLEFBQU87QUFBUDtBQUFBLFdBVEQsQUFTQyxBQUFPLEFBQUssQUFDWixxQkFBQyxjQUFEOztlQUFBO2lCQUFBLEFBQU87QUFBUDtBQUFBLFdBVkQsQUFVQyxBQUFPLEFBQUssQUFDWixxQkFBQyxjQUFEOztlQUFBO2lCQUFBLEFBQU87QUFBUDtBQUFBLFdBWEQsQUFXQyxBQUFPLEFBQUssQUFDWixxQkFBQyxjQUFEOztlQUFBO2lCQUFBLEFBQU87QUFBUDtBQUFBLFdBWkQsQUFZQyxBQUFPLEFBQUssQUFDWixxQkFBQyxjQUFEOztlQUFBO2lCQUFBLEFBQU87QUFBUDtBQUFBLFdBYkQsQUFhQyxBQUFPLEFBQUssQUFDWixxQkFBQyxjQUFEOztlQUFBO2lCQUFBLEFBQU87QUFBUDtBQUFBLFdBZEQsQUFjQyxBQUFPLEFBQUssQUFDWixxQkFBQyxjQUFEOztlQUFBO2lCQUFBLEFBQU87QUFBUDtBQUFBLFdBQU8sQUFBSyxJQWZiLEFBZUMsQUFBTyxBQUFTLEFBQ2hCLDZCQUFDLGNBQUQ7O2VBQUE7aUJBQUEsQUFBTztBQUFQO0FBQUEsV0FBTyxBQUFLLElBaEJiLEFBZ0JDLEFBQU8sQUFBUyxBQUNoQiw2QkFBQyxjQUFEOztlQUFBO2lCQUFBLEFBQU87QUFBUDtBQUFBLFdBQU8sQUFBSyxJQWxCZCxBQUNDLEFBaUJDLEFBQU8sQUFBUyxBQUdsQjs7Ozs7QUF6Qm9CLEEsQUE0QnRCOztrQkFBQSxBQUFlIiwiZmlsZSI6IkdpZnRSb3cuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01vcmdhbi9Eb2N1bWVudHMvc21hcnRHaXZpbmcifQ==