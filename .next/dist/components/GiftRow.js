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
					lineNumber: 9
				}
			}, _react2.default.createElement(Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 10
				}
			}, id), _react2.default.createElement(Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 11
				}
			}, giftAddress.slice(0, 9), '...'), _react2.default.createElement(Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 12
				}
			}, gift[0].slice(0, 9), '...'), _react2.default.createElement(Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 13
				}
			}, gift[1].slice(0, 9), '...'), _react2.default.createElement(Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 14
				}
			}, gift[2].slice(0, 9), '...'), _react2.default.createElement(Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 15
				}
			}, gift[3]), _react2.default.createElement(Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 16
				}
			}, gift[4]), _react2.default.createElement(Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 17
				}
			}, gift[5]), _react2.default.createElement(Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 18
				}
			}, gift[6]), _react2.default.createElement(Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 19
				}
			}, gift[7]), _react2.default.createElement(Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 20
				}
			}, gift[8].toString()), _react2.default.createElement(Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 21
				}
			}, gift[9].toString()), _react2.default.createElement(Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 22
				}
			}, gift[10].valueOf()));
		}
	}]);

	return GiftRow;
}(_react.Component);

exports.default = GiftRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvR2lmdFJvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlRhYmxlIiwiR2lmdFJvdyIsIlJvdyIsIkNlbGwiLCJwcm9wcyIsImlkIiwiZ2lmdCIsImdpZnRBZGRyZXNzIiwic2xpY2UiLCJ0b1N0cmluZyIsInZhbHVlT2YiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVM7Ozs7Ozs7SUFFSCxBOzs7Ozs7Ozs7OzsyQkFDSTtPQUFBLEFBQ0EsTUFEQSxBQUNjLHVCQURkLEFBQ0E7T0FEQSxBQUNLLE9BREwsQUFDYyx1QkFEZCxBQUNLO2dCQUNxQixLQUYxQixBQUUrQjtPQUYvQixBQUVBLFlBRkEsQUFFQTtPQUZBLEFBRUksY0FGSixBQUVJO09BRkosQUFFVSxxQkFGVixBQUVVLEFBQ2xCOzswQkFDRSxjQUFEOztlQUFBO2lCQUFBLEFBQ0M7QUFERDtBQUFBLElBQUEsa0JBQ0UsY0FBRDs7ZUFBQTtpQkFBQSxBQUFPO0FBQVA7QUFBQSxNQURELEFBQ0MsQUFDQSxxQkFBQyxjQUFEOztlQUFBO2lCQUFBLEFBQU87QUFBUDtBQUFBLGtCQUFPLEFBQVksTUFBWixBQUFrQixHQUF6QixBQUFPLEFBQXFCLElBRjdCLEFBRUMsQUFDQSx3QkFBQyxjQUFEOztlQUFBO2lCQUFBLEFBQU87QUFBUDtBQUFBLFdBQU8sQUFBSyxHQUFMLEFBQVEsTUFBUixBQUFjLEdBQXJCLEFBQU8sQUFBaUIsSUFIekIsQUFHQyxBQUNBLHdCQUFDLGNBQUQ7O2VBQUE7aUJBQUEsQUFBTztBQUFQO0FBQUEsV0FBTyxBQUFLLEdBQUwsQUFBUSxNQUFSLEFBQWMsR0FBckIsQUFBTyxBQUFpQixJQUp6QixBQUlDLEFBQ0Esd0JBQUMsY0FBRDs7ZUFBQTtpQkFBQSxBQUFPO0FBQVA7QUFBQSxXQUFPLEFBQUssR0FBTCxBQUFRLE1BQVIsQUFBYyxHQUFyQixBQUFPLEFBQWlCLElBTHpCLEFBS0MsQUFDQSx3QkFBQyxjQUFEOztlQUFBO2lCQUFBLEFBQU87QUFBUDtBQUFBLFdBTkQsQUFNQyxBQUFPLEFBQUssQUFDWixxQkFBQyxjQUFEOztlQUFBO2lCQUFBLEFBQU87QUFBUDtBQUFBLFdBUEQsQUFPQyxBQUFPLEFBQUssQUFDWixxQkFBQyxjQUFEOztlQUFBO2lCQUFBLEFBQU87QUFBUDtBQUFBLFdBUkQsQUFRQyxBQUFPLEFBQUssQUFDWixxQkFBQyxjQUFEOztlQUFBO2lCQUFBLEFBQU87QUFBUDtBQUFBLFdBVEQsQUFTQyxBQUFPLEFBQUssQUFDWixxQkFBQyxjQUFEOztlQUFBO2lCQUFBLEFBQU87QUFBUDtBQUFBLFdBVkQsQUFVQyxBQUFPLEFBQUssQUFDWixxQkFBQyxjQUFEOztlQUFBO2lCQUFBLEFBQU87QUFBUDtBQUFBLFdBQU8sQUFBSyxHQVhiLEFBV0MsQUFBTyxBQUFRLEFBQ2YsNkJBQUMsY0FBRDs7ZUFBQTtpQkFBQSxBQUFPO0FBQVA7QUFBQSxXQUFPLEFBQUssR0FaYixBQVlDLEFBQU8sQUFBUSxBQUNmLDZCQUFDLGNBQUQ7O2VBQUE7aUJBQUEsQUFBTztBQUFQO0FBQUEsV0FBTyxBQUFLLElBZGQsQUFDQyxBQWFDLEFBQU8sQUFBUyxBQUdsQjs7Ozs7QUFyQm9CLEEsQUF3QnRCOztrQkFBQSxBQUFlIiwiZmlsZSI6IkdpZnRSb3cuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01vcmdhbi9Eb2N1bWVudHMvc21hcnRHaXZpbmcifQ==