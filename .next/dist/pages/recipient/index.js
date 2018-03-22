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


// export default () => {
// 	return <h1>These are the Recipient's Gifts!</h1>
// }
/* IGNORE THESE NOTES: Redefine the above functional-Component to a Class-Based-Component
That enables us to access lifecycle method componentDidMount(), which
is a great place to load up data inside of a React Component. Once we load the
data, we can render it out to the user. So class based component below:
... but componentDidMount() is not executed on the server when you use NextJS, so
we have to use getInitialProps() instead (also a LC Method, but used exclusively
by NextJS).
static keyword assigns this method to the Class itself, and you don't need an
instance to call the function that follows it.
Next wants to get data without rendering it.*/

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
						lineNumber: 49
					}
				});
			});
		}

		//My React Notes (IGNORE): You always have to render out JSX in a render method. If you don't you'll
		//get an error. Whever Next imports a file, Next.js always expects you to export()
		//a React Component, or it throws error. It's not enough to define it.  So always
		//create a render(Return(JSX)) function and always make an epxort default statement when testing.

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
					lineNumber: 66
				}
			}, _react2.default.createElement('link', {
				rel: 'stylesheet',
				href: '//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 67
				}
			}), _react2.default.createElement('h3', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 71
				}
			}, ' Your Current Gifts'), _react2.default.createElement(_semanticUiReact.Table, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 73
				}
			}, _react2.default.createElement(Header, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 74
				}
			}, _react2.default.createElement(Row, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 75
				}
			}, _react2.default.createElement(HeaderCell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 76
				}
			}, 'ID'), _react2.default.createElement(HeaderCell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 77
				}
			}, 'Gift Address'), _react2.default.createElement(HeaderCell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 78
				}
			}, 'Recipient'), _react2.default.createElement(HeaderCell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 79
				}
			}, 'Donor'), _react2.default.createElement(HeaderCell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 80
				}
			}, 'Merchant'), _react2.default.createElement(HeaderCell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 81
				}
			}, 'Donor\'s Max Price'), _react2.default.createElement(HeaderCell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 82
				}
			}, 'Lowest Bid'), _react2.default.createElement(HeaderCell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 83
				}
			}, 'Final Price'), _react2.default.createElement(HeaderCell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 84
				}
			}, 'Expiry'), _react2.default.createElement(HeaderCell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 85
				}
			}, 'Bidder Count'), _react2.default.createElement(HeaderCell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 86
				}
			}, 'Item Shipped'), _react2.default.createElement(HeaderCell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 87
				}
			}, 'Item Delivered'), _react2.default.createElement(HeaderCell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 88
				}
			}, 'Donor Message'))), _react2.default.createElement(Body, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 91
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
								return _factory2.default.methods.getGiftsByRecipient('0xfaa7541c5cbe22e4518736d2b5fc34d07347ee45').call();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3JlY2lwaWVudC9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImZhY3RvcnkiLCJDYXJkIiwiQnV0dG9uIiwiVGFibGUiLCJMYXlvdXQiLCJMaW5rIiwiU21hcnRHaWZ0IiwiR2lmdFJvdyIsIlJlY2lwaWVudEdpZnRJbmRleCIsInByb3BzIiwiZ2lmdFN0YXRzIiwibWFwIiwiZ2lmdCIsImluZGV4IiwicmVjaXBpZW50R2lmdHMiLCJIZWFkZXIiLCJSb3ciLCJIZWFkZXJDZWxsIiwiQm9keSIsInJlbmRlclJvdyIsIm1ldGhvZHMiLCJnZXRHaWZ0c0J5UmVjaXBpZW50IiwiY2FsbCIsImZpbHRlciIsImFkZHJlc3MiLCJpIiwibGVuZ3RoIiwiZ2V0R2lmdFN0YXRzIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBUyxBQUFNLEFBQVE7O0FBQ3ZCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQVk7O0FBQ3JCLEFBQU8sQUFBZTs7OztBQUN0QixBQUFPLEFBQWE7Ozs7Ozs7OztBQUVwQjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7SSxBQVdNOzs7Ozs7Ozs7O09Bc0JMOzs7OEJBQ1k7Z0JBQ1g7O2VBQU8sQUFBSyxNQUFMLEFBQVcsVUFBWCxBQUFxQixJQUFJLFVBQUEsQUFBQyxNQUFELEFBQU8sT0FBVSxBQUNoRDsyQkFDQyxBQUFDO1VBQUQsQUFDTSxBQUNMO1NBRkQsQUFFSyxBQUNKO2tCQUFhLE9BQUEsQUFBSyxNQUFMLEFBQVcsZUFIekIsQUFHYyxBQUEwQixBQUN2QztXQUpELEFBSU87O2dCQUpQO2tCQURELEFBQ0MsQUFPRDtBQVBDO0FBQ0MsS0FERDtBQUZGLEFBQU8sQUFVUCxJQVZPO0FBWVI7O0FBQ0E7QUFDQTtBQUNBOzs7OzsyQkFDUztPQUFBLEFBQ0EsU0FEQSxBQUNrQyx1QkFEbEMsQUFDQTtPQURBLEFBQ1EsTUFEUixBQUNrQyx1QkFEbEMsQUFDUTtPQURSLEFBQ2EsYUFEYixBQUNrQyx1QkFEbEMsQUFDYTtPQURiLEFBQ3lCLE9BRHpCLEFBQ2tDLHVCQURsQyxBQUN5QixBQUNqQzs7MEJBQ0MsY0FBQTs7ZUFBQTtpQkFBQSxBQUNDO0FBREQ7QUFBQSxJQUFBO1NBQ0MsQUFDSyxBQUNKO1VBRkQsQUFFTTs7ZUFGTjtpQkFERCxBQUNDLEFBSUE7QUFKQTtBQUNDLHVCQUdELGNBQUE7O2VBQUE7aUJBQUE7QUFBQTtBQUFBLE1BTEQsQUFLQyxBQUVBLHdDQUFBLEFBQUM7O2VBQUQ7aUJBQUEsQUFDQztBQUREO0FBQUEsc0JBQ0UsY0FBRDs7ZUFBQTtpQkFBQSxBQUNDO0FBREQ7QUFBQSxzQkFDRSxjQUFEOztlQUFBO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNFLGNBQUQ7O2VBQUE7aUJBQUE7QUFBQTtBQUFBLE1BREQsQUFDQyxBQUNBLHVCQUFDLGNBQUQ7O2VBQUE7aUJBQUE7QUFBQTtBQUFBLE1BRkQsQUFFQyxBQUNBLGlDQUFDLGNBQUQ7O2VBQUE7aUJBQUE7QUFBQTtBQUFBLE1BSEQsQUFHQyxBQUNBLDhCQUFDLGNBQUQ7O2VBQUE7aUJBQUE7QUFBQTtBQUFBLE1BSkQsQUFJQyxBQUNBLDBCQUFDLGNBQUQ7O2VBQUE7aUJBQUE7QUFBQTtBQUFBLE1BTEQsQUFLQyxBQUNBLDZCQUFDLGNBQUQ7O2VBQUE7aUJBQUE7QUFBQTtBQUFBLE1BTkQsQUFNQyxBQUNBLHVDQUFDLGNBQUQ7O2VBQUE7aUJBQUE7QUFBQTtBQUFBLE1BUEQsQUFPQyxBQUNBLCtCQUFDLGNBQUQ7O2VBQUE7aUJBQUE7QUFBQTtBQUFBLE1BUkQsQUFRQyxBQUNBLGdDQUFDLGNBQUQ7O2VBQUE7aUJBQUE7QUFBQTtBQUFBLE1BVEQsQUFTQyxBQUNBLDJCQUFDLGNBQUQ7O2VBQUE7aUJBQUE7QUFBQTtBQUFBLE1BVkQsQUFVQyxBQUNBLGlDQUFDLGNBQUQ7O2VBQUE7aUJBQUE7QUFBQTtBQUFBLE1BWEQsQUFXQyxBQUNBLGlDQUFDLGNBQUQ7O2VBQUE7aUJBQUE7QUFBQTtBQUFBLE1BWkQsQUFZQyxBQUNBLG1DQUFDLGNBQUQ7O2VBQUE7aUJBQUE7QUFBQTtBQUFBLE1BZkgsQUFDQyxBQUNDLEFBYUMsQUFHRixvQ0FBQyxjQUFEOztlQUFBO2lCQUFBLEFBQU87QUFBUDtBQUFBLFdBMUJILEFBQ0MsQUFPQyxBQWtCQyxBQUFPLEFBQUssQUFJZjs7Ozs7Ozs7Ozs7O2VBckUyQixrQkFBQSxBQUFRLFFBQVIsQUFDekIsb0JBRHlCLEFBQ0wsOENBQ3BCLEEsQUFGeUI7O1lBQXZCO0Esa0NBR0o7O3dDQUFpQixBQUFlLE9BQy9CLFVBQUEsQUFBQyxTQUFEO2dCQUFhLFlBQWIsQUFBeUI7QUFEMUIsQUFBaUIsQUFJakIsU0FKaUI7O0FBS2I7QSxvQixBQUFZLEFBQ1A7QSxZQUFJLEE7OztjQUFHLElBQUksZUFBZSxBOzs7OztzQkFDbEMsQTs7ZUFDTyx5QkFBVSxlQUFWLEFBQVUsQUFBZSxJQUF6QixBQUNKLFFBREksQUFDSSxlQURKLEFBRUosQTs7Ozs7b0JBSE8sQTs7WUFEZ0M7QTs7Ozs7eUNBUXBDLEVBQUUsZ0JBQUYsZ0JBQWtCLFdBQWxCLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFwQndCLEEsQUEyRWpDOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9Nb3JnYW4vRG9jdW1lbnRzL3NtYXJ0R2l2aW5nIn0=