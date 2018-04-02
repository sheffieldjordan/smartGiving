'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _factory = require('../../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _semanticUiReact = require('semantic-ui-react');

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require('../../routes');

var _smartgift = require('../../ethereum/smartgift');

var _smartgift2 = _interopRequireDefault(_smartgift);

var _GiftRow = require('../../components/GiftRow');

var _GiftRow2 = _interopRequireDefault(_GiftRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Morgan/Documents/smartGiving/pages/recipient/index.js?entry';


var RecipientGiftIndex = function (_Component) {
	(0, _inherits3.default)(RecipientGiftIndex, _Component);

	function RecipientGiftIndex() {
		(0, _classCallCheck3.default)(this, RecipientGiftIndex);

		return (0, _possibleConstructorReturn3.default)(this, (RecipientGiftIndex.__proto__ || (0, _getPrototypeOf2.default)(RecipientGiftIndex)).apply(this, arguments));
	}

	(0, _createClass3.default)(RecipientGiftIndex, [{
		key: 'renderRow',

		/* Creates a <Row /> with the Gift Address, Recipient, and Gift Stats as props */
		value: function renderRow() {
			var _this2 = this;

			return this.props.giftStats.map(function (gift, index) {
				return _react2.default.createElement(_GiftRow2.default, {
					key: index,
					id: index,
					giftAddress: _this2.props.recipientGifts[index],
					gift: gift,
					__source: {
						fileName: _jsxFileName,
						lineNumber: 35
					}
				});
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var Header = _semanticUiReact.Table.Header,
			    Row = _semanticUiReact.Table.Row,
			    HeaderCell = _semanticUiReact.Table.HeaderCell,
			    Body = _semanticUiReact.Table.Body;

			return _react2.default.createElement('div', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 48
				}
			}, _react2.default.createElement('link', {
				rel: 'stylesheet',
				href: '//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 49
				}
			}), _react2.default.createElement('h3', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 53
				}
			}, ' Your Current Gifts'), _react2.default.createElement(_semanticUiReact.Table, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 55
				}
			}, _react2.default.createElement(Header, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 56
				}
			}, _react2.default.createElement(Row, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 57
				}
			}, _react2.default.createElement(HeaderCell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 58
				}
			}, 'ID'), _react2.default.createElement(HeaderCell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 59
				}
			}, 'Gift Address'), _react2.default.createElement(HeaderCell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 60
				}
			}, 'Recipient'), _react2.default.createElement(HeaderCell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 61
				}
			}, 'Donor'), _react2.default.createElement(HeaderCell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 62
				}
			}, 'Merchant'), _react2.default.createElement(HeaderCell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 63
				}
			}, 'Donor\'s Max Price'), _react2.default.createElement(HeaderCell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 64
				}
			}, 'Lowest Bid'), _react2.default.createElement(HeaderCell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 65
				}
			}, 'Final Price'), _react2.default.createElement(HeaderCell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 66
				}
			}, 'Expiry'), _react2.default.createElement(HeaderCell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 67
				}
			}, 'Last Update'), _react2.default.createElement(HeaderCell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 68
				}
			}, 'Creation Time'), _react2.default.createElement(HeaderCell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 69
				}
			}, 'Bidder Count'), _react2.default.createElement(HeaderCell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 70
				}
			}, 'Item Shipped'), _react2.default.createElement(HeaderCell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 71
				}
			}, 'Item Delivered'), _react2.default.createElement(HeaderCell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 72
				}
			}, 'Donor Message'))), _react2.default.createElement(Body, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 75
				}
			}, this.renderRow())));
		}
	}], [{
		key: 'getInitialProps',
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
				var recipientGifts, giftStats, i;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.next = 2;
								return _factory2.default.methods.getGiftsByRecipient('0x68009930D2E4a9A0A4b53484AED8289c86802Ae5').call();

							case 2:
								recipientGifts = _context.sent;

								recipientGifts = recipientGifts.filter(function (address) {
									return address !== '0x0000000000000000000000000000000000000000';
								});

								/* iterates over the array of Gift Addresses, and gets Gift Stats for each */
								giftStats = [];
								i = 0;

							case 6:
								if (!(i < recipientGifts.length)) {
									_context.next = 15;
									break;
								}

								_context.t0 = giftStats;
								_context.next = 10;
								return (0, _smartgift2.default)(recipientGifts[i]).methods.getGiftStats().call();

							case 10:
								_context.t1 = _context.sent;

								_context.t0.push.call(_context.t0, _context.t1);

							case 12:
								i++;
								_context.next = 6;
								break;

							case 15:
								return _context.abrupt('return', { recipientGifts: recipientGifts, giftStats: giftStats });

							case 16:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function getInitialProps() {
				return _ref.apply(this, arguments);
			}

			return getInitialProps;
		}()
	}]);

	return RecipientGiftIndex;
}(_react.Component);

exports.default = RecipientGiftIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3JlY2lwaWVudC9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImZhY3RvcnkiLCJDYXJkIiwiQnV0dG9uIiwiVGFibGUiLCJMYXlvdXQiLCJMaW5rIiwiU21hcnRHaWZ0IiwiR2lmdFJvdyIsIlJlY2lwaWVudEdpZnRJbmRleCIsInByb3BzIiwiZ2lmdFN0YXRzIiwibWFwIiwiZ2lmdCIsImluZGV4IiwicmVjaXBpZW50R2lmdHMiLCJIZWFkZXIiLCJSb3ciLCJIZWFkZXJDZWxsIiwiQm9keSIsInJlbmRlclJvdyIsIm1ldGhvZHMiLCJnZXRHaWZ0c0J5UmVjaXBpZW50IiwiY2FsbCIsImZpbHRlciIsImFkZHJlc3MiLCJpIiwibGVuZ3RoIiwiZ2V0R2lmdFN0YXRzIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBUyxBQUFNLEFBQVE7O0FBQ3ZCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQVk7O0FBQ3JCLEFBQU8sQUFBZTs7OztBQUN0QixBQUFPLEFBQWE7Ozs7Ozs7OztJQUVkLEE7Ozs7Ozs7Ozs7T0FzQkw7Ozs4QkFDWTtnQkFDWDs7ZUFBTyxBQUFLLE1BQUwsQUFBVyxVQUFYLEFBQXFCLElBQUksVUFBQSxBQUFDLE1BQUQsQUFBTyxPQUFVLEFBQ2hEOzJCQUNDLEFBQUM7VUFBRCxBQUNNLEFBQ0w7U0FGRCxBQUVLLEFBQ0o7a0JBQWEsT0FBQSxBQUFLLE1BQUwsQUFBVyxlQUh6QixBQUdjLEFBQTBCLEFBQ3ZDO1dBSkQsQUFJTzs7Z0JBSlA7a0JBREQsQUFDQyxBQU9EO0FBUEM7QUFDQyxLQUREO0FBRkYsQUFBTyxBQVVQLElBVk87Ozs7MkJBWUM7T0FBQSxBQUNBLFNBREEsQUFDa0MsdUJBRGxDLEFBQ0E7T0FEQSxBQUNRLE1BRFIsQUFDa0MsdUJBRGxDLEFBQ1E7T0FEUixBQUNhLGFBRGIsQUFDa0MsdUJBRGxDLEFBQ2E7T0FEYixBQUN5QixPQUR6QixBQUNrQyx1QkFEbEMsQUFDeUIsQUFDakM7OzBCQUNDLGNBQUE7O2VBQUE7aUJBQUEsQUFDQztBQUREO0FBQUEsSUFBQTtTQUNDLEFBQ0ssQUFDSjtVQUZELEFBRU07O2VBRk47aUJBREQsQUFDQyxBQUlBO0FBSkE7QUFDQyx1QkFHRCxjQUFBOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQUxELEFBS0MsQUFFQSx3Q0FBQSxBQUFDOztlQUFEO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNFLGNBQUQ7O2VBQUE7aUJBQUEsQUFDQztBQUREO0FBQUEsc0JBQ0UsY0FBRDs7ZUFBQTtpQkFBQSxBQUNDO0FBREQ7QUFBQSxzQkFDRSxjQUFEOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQURELEFBQ0MsQUFDQSx1QkFBQyxjQUFEOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQUZELEFBRUMsQUFDQSxpQ0FBQyxjQUFEOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQUhELEFBR0MsQUFDQSw4QkFBQyxjQUFEOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQUpELEFBSUMsQUFDQSwwQkFBQyxjQUFEOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQUxELEFBS0MsQUFDQSw2QkFBQyxjQUFEOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQU5ELEFBTUMsQUFDQSx1Q0FBQyxjQUFEOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQVBELEFBT0MsQUFDQSwrQkFBQyxjQUFEOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQVJELEFBUUMsQUFDQSxnQ0FBQyxjQUFEOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQVRELEFBU0MsQUFDQSwyQkFBQyxjQUFEOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQVZELEFBVUMsQUFDQSxnQ0FBQyxjQUFEOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQVhELEFBV0MsQUFDQSxrQ0FBQyxjQUFEOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQVpELEFBWUMsQUFDQSxpQ0FBQyxjQUFEOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQWJELEFBYUMsQUFDQSxpQ0FBQyxjQUFEOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQWRELEFBY0MsQUFDQSxtQ0FBQyxjQUFEOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQWpCSCxBQUNDLEFBQ0MsQUFlQyxBQUdGLG9DQUFDLGNBQUQ7O2VBQUE7aUJBQUEsQUFBTztBQUFQO0FBQUEsV0E1QkgsQUFDQyxBQU9DLEFBb0JDLEFBQU8sQUFBSyxBQUlmOzs7Ozs7Ozs7Ozs7ZUFuRTJCLGtCQUFBLEFBQVEsUUFBUixBQUN6QixvQkFEeUIsQUFDTCw4Q0FESyxBLEFBRXpCOztZQUZFO0Esa0NBR0o7O3dDQUFpQixBQUFlLE9BQy9CLFVBQUEsQUFBQyxTQUFEO2dCQUFhLFlBQWIsQUFBeUI7QUFEMUIsQUFBaUIsQUFJakIsU0FKaUI7O0FBS2I7QSxvQixBQUFZLEFBQ1A7QSxZQUFJLEE7OztjQUFHLElBQUksZUFBZSxBOzs7OztzQkFDbEMsQTs7ZUFDTyx5QkFBVSxlQUFWLEFBQVUsQUFBZSxJQUF6QixBQUNKLFFBREksQUFDSSxlQURKLEFBRUosQTs7Ozs7b0JBSE8sQTs7WUFEZ0M7QTs7Ozs7eUNBUXBDLEVBQUUsZ0JBQUYsZ0JBQWtCLFcsQUFBbEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFwQndCLEEsQUF5RWpDOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9Nb3JnYW4vRG9jdW1lbnRzL3NtYXJ0R2l2aW5nIn0=