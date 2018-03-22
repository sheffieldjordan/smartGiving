webpackHotUpdate(6,{

/***/ 1145:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(88);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _factory = __webpack_require__(716);

var _factory2 = _interopRequireDefault(_factory);

var _semanticUiReact = __webpack_require__(483);

var _Layout = __webpack_require__(1125);

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = __webpack_require__(1127);

var _smartgift = __webpack_require__(1146);

var _smartgift2 = _interopRequireDefault(_smartgift);

var _GiftRow = __webpack_require__(1336);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/Morgan/Documents/smartGiving/pages/recipient/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Morgan/Documents/smartGiving/pages/recipient/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/recipient")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi4wZTZjMzg3YzAwM2M5MjliYzg3MS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvcmVjaXBpZW50PzhjMTdjNjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGZhY3RvcnkgZnJvbSAnLi4vLi4vZXRoZXJldW0vZmFjdG9yeSdcbmltcG9ydCB7IENhcmQsIEJ1dHRvbiwgVGFibGUgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vLi4vcm91dGVzJ1xuaW1wb3J0IFNtYXJ0R2lmdCBmcm9tICcuLi8uLi9ldGhlcmV1bS9zbWFydGdpZnQnXG5pbXBvcnQgR2lmdFJvdyBmcm9tICcuLi8uLi9jb21wb25lbnRzL0dpZnRSb3cnXG5cbi8vIGV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbi8vIFx0cmV0dXJuIDxoMT5UaGVzZSBhcmUgdGhlIFJlY2lwaWVudCdzIEdpZnRzITwvaDE+XG4vLyB9XG4vKiBJR05PUkUgVEhFU0UgTk9URVM6IFJlZGVmaW5lIHRoZSBhYm92ZSBmdW5jdGlvbmFsLUNvbXBvbmVudCB0byBhIENsYXNzLUJhc2VkLUNvbXBvbmVudFxuVGhhdCBlbmFibGVzIHVzIHRvIGFjY2VzcyBsaWZlY3ljbGUgbWV0aG9kIGNvbXBvbmVudERpZE1vdW50KCksIHdoaWNoXG5pcyBhIGdyZWF0IHBsYWNlIHRvIGxvYWQgdXAgZGF0YSBpbnNpZGUgb2YgYSBSZWFjdCBDb21wb25lbnQuIE9uY2Ugd2UgbG9hZCB0aGVcbmRhdGEsIHdlIGNhbiByZW5kZXIgaXQgb3V0IHRvIHRoZSB1c2VyLiBTbyBjbGFzcyBiYXNlZCBjb21wb25lbnQgYmVsb3c6XG4uLi4gYnV0IGNvbXBvbmVudERpZE1vdW50KCkgaXMgbm90IGV4ZWN1dGVkIG9uIHRoZSBzZXJ2ZXIgd2hlbiB5b3UgdXNlIE5leHRKUywgc29cbndlIGhhdmUgdG8gdXNlIGdldEluaXRpYWxQcm9wcygpIGluc3RlYWQgKGFsc28gYSBMQyBNZXRob2QsIGJ1dCB1c2VkIGV4Y2x1c2l2ZWx5XG5ieSBOZXh0SlMpLlxuc3RhdGljIGtleXdvcmQgYXNzaWducyB0aGlzIG1ldGhvZCB0byB0aGUgQ2xhc3MgaXRzZWxmLCBhbmQgeW91IGRvbid0IG5lZWQgYW5cbmluc3RhbmNlIHRvIGNhbGwgdGhlIGZ1bmN0aW9uIHRoYXQgZm9sbG93cyBpdC5cbk5leHQgd2FudHMgdG8gZ2V0IGRhdGEgd2l0aG91dCByZW5kZXJpbmcgaXQuKi9cblxuY2xhc3MgUmVjaXBpZW50R2lmdEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcblx0c3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcblx0XHQvKiBjcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBHaWZ0cyBBZGRyZXNzZXMgZm9yIFJlY2VpcGllbnQgMHhmYWE3NTQxLi4uKi9cblx0XHRsZXQgcmVjaXBpZW50R2lmdHMgPSBhd2FpdCBmYWN0b3J5Lm1ldGhvZHNcblx0XHRcdC5nZXRHaWZ0c0J5UmVjaXBpZW50KCcweGZhYTc1NDFjNWNiZTIyZTQ1MTg3MzZkMmI1ZmMzNGQwNzM0N2VlNDUnKVxuXHRcdFx0LmNhbGwoKVxuXHRcdHJlY2lwaWVudEdpZnRzID0gcmVjaXBpZW50R2lmdHMuZmlsdGVyKFxuXHRcdFx0KGFkZHJlc3MpID0+IGFkZHJlc3MgIT09ICcweDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAnXG5cdFx0KVxuXG5cdFx0LyogaXRlcmF0ZXMgb3ZlciB0aGUgYXJyYXkgb2YgR2lmdCBBZGRyZXNzZXMsIGFuZCBnZXRzIEdpZnQgU3RhdHMgZm9yIGVhY2ggKi9cblx0XHRsZXQgZ2lmdFN0YXRzID0gW11cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHJlY2lwaWVudEdpZnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRnaWZ0U3RhdHMucHVzaChcblx0XHRcdFx0YXdhaXQgU21hcnRHaWZ0KHJlY2lwaWVudEdpZnRzW2ldKVxuXHRcdFx0XHRcdC5tZXRob2RzLmdldEdpZnRTdGF0cygpXG5cdFx0XHRcdFx0LmNhbGwoKVxuXHRcdFx0KVxuXHRcdH1cblxuXHRcdHJldHVybiB7IHJlY2lwaWVudEdpZnRzLCBnaWZ0U3RhdHMgfVxuXHR9XG5cdC8qIENyZWF0ZXMgYSA8Um93IC8+IHdpdGggdGhlIEdpZnQgQWRkcmVzcywgUmVjaXBpZW50LCBhbmQgR2lmdCBTdGF0cyBhcyBwcm9wcyAqL1xuXHRyZW5kZXJSb3coKSB7XG5cdFx0cmV0dXJuIHRoaXMucHJvcHMuZ2lmdFN0YXRzLm1hcCgoZ2lmdCwgaW5kZXgpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxHaWZ0Um93XG5cdFx0XHRcdFx0a2V5PXtpbmRleH1cblx0XHRcdFx0XHRpZD17aW5kZXh9XG5cdFx0XHRcdFx0Z2lmdEFkZHJlc3M9e3RoaXMucHJvcHMucmVjaXBpZW50R2lmdHNbaW5kZXhdfVxuXHRcdFx0XHRcdGdpZnQ9e2dpZnR9XG5cdFx0XHRcdC8+XG5cdFx0XHQpXG5cdFx0fSlcblx0fVxuXG5cdC8vTXkgUmVhY3QgTm90ZXMgKElHTk9SRSk6IFlvdSBhbHdheXMgaGF2ZSB0byByZW5kZXIgb3V0IEpTWCBpbiBhIHJlbmRlciBtZXRob2QuIElmIHlvdSBkb24ndCB5b3UnbGxcblx0Ly9nZXQgYW4gZXJyb3IuIFdoZXZlciBOZXh0IGltcG9ydHMgYSBmaWxlLCBOZXh0LmpzIGFsd2F5cyBleHBlY3RzIHlvdSB0byBleHBvcnQoKVxuXHQvL2EgUmVhY3QgQ29tcG9uZW50LCBvciBpdCB0aHJvd3MgZXJyb3IuIEl0J3Mgbm90IGVub3VnaCB0byBkZWZpbmUgaXQuICBTbyBhbHdheXNcblx0Ly9jcmVhdGUgYSByZW5kZXIoUmV0dXJuKEpTWCkpIGZ1bmN0aW9uIGFuZCBhbHdheXMgbWFrZSBhbiBlcHhvcnQgZGVmYXVsdCBzdGF0ZW1lbnQgd2hlbiB0ZXN0aW5nLlxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3QgeyBIZWFkZXIsIFJvdywgSGVhZGVyQ2VsbCwgQm9keSB9ID0gVGFibGVcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PGxpbmtcblx0XHRcdFx0XHRyZWw9XCJzdHlsZXNoZWV0XCJcblx0XHRcdFx0XHRocmVmPVwiLy9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2VtYW50aWMtdWkvMi4yLjEyL3NlbWFudGljLm1pbi5jc3NcIlxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8aDM+IFlvdXIgQ3VycmVudCBHaWZ0czwvaDM+XG5cblx0XHRcdFx0PFRhYmxlPlxuXHRcdFx0XHRcdDxIZWFkZXI+XG5cdFx0XHRcdFx0XHQ8Um93PlxuXHRcdFx0XHRcdFx0XHQ8SGVhZGVyQ2VsbD5JRDwvSGVhZGVyQ2VsbD5cblx0XHRcdFx0XHRcdFx0PEhlYWRlckNlbGw+R2lmdCBBZGRyZXNzPC9IZWFkZXJDZWxsPlxuXHRcdFx0XHRcdFx0XHQ8SGVhZGVyQ2VsbD5SZWNpcGllbnQ8L0hlYWRlckNlbGw+XG5cdFx0XHRcdFx0XHRcdDxIZWFkZXJDZWxsPkRvbm9yPC9IZWFkZXJDZWxsPlxuXHRcdFx0XHRcdFx0XHQ8SGVhZGVyQ2VsbD5NZXJjaGFudDwvSGVhZGVyQ2VsbD5cblx0XHRcdFx0XHRcdFx0PEhlYWRlckNlbGw+RG9ub3IncyBNYXggUHJpY2U8L0hlYWRlckNlbGw+XG5cdFx0XHRcdFx0XHRcdDxIZWFkZXJDZWxsPkxvd2VzdCBCaWQ8L0hlYWRlckNlbGw+XG5cdFx0XHRcdFx0XHRcdDxIZWFkZXJDZWxsPkZpbmFsIFByaWNlPC9IZWFkZXJDZWxsPlxuXHRcdFx0XHRcdFx0XHQ8SGVhZGVyQ2VsbD5FeHBpcnk8L0hlYWRlckNlbGw+XG5cdFx0XHRcdFx0XHRcdDxIZWFkZXJDZWxsPkJpZGRlciBDb3VudDwvSGVhZGVyQ2VsbD5cblx0XHRcdFx0XHRcdFx0PEhlYWRlckNlbGw+SXRlbSBTaGlwcGVkPC9IZWFkZXJDZWxsPlxuXHRcdFx0XHRcdFx0XHQ8SGVhZGVyQ2VsbD5JdGVtIERlbGl2ZXJlZDwvSGVhZGVyQ2VsbD5cblx0XHRcdFx0XHRcdFx0PEhlYWRlckNlbGw+RG9ub3IgTWVzc2FnZTwvSGVhZGVyQ2VsbD5cblx0XHRcdFx0XHRcdDwvUm93PlxuXHRcdFx0XHRcdDwvSGVhZGVyPlxuXHRcdFx0XHRcdDxCb2R5Pnt0aGlzLnJlbmRlclJvdygpfTwvQm9keT5cblx0XHRcdFx0PC9UYWJsZT5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWNpcGllbnRHaWZ0SW5kZXhcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL3JlY2lwaWVudD9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUNBO0FBQ0E7O0FBQUE7QUFDQTtBQUNBO0FBREE7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUNBOztBQUpBO0FBT0E7QUFQQTtBQUNBO0FBT0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFBQTs7QUFGQTtBQUlBO0FBSkE7QUFDQTs7QUFHQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFHQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FBakVBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUFBOzs7OztBQUNBOzs7Ozs7O0FBRUE7QUFDQTs7Ozs7O0FBSEE7Ozs7OztBQVFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0RBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=