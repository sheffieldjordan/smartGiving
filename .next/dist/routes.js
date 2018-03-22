'use strict';

var routes = require('next-routes')(); //so it returns a funciton which will be invoked

// how we defirne new route mapping.
routes.add('/campaigns/new', '/campaigns/new').add('/campaigns/:address', '/campaigns/show').add('/campaigns/:address/requests', '/campaigns/requests/index').add('/campaigns/:address/requests/new', '/campaigns/requests/new');

module.exports = routes; // exports helpers that help us navigate our users around our site


// now setup server.js file, telling it to use routes.js
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZixBLDBCQUF3Qzs7QUFFeEM7QUFDQSxPQUNHLEFBREgsSUFDTyxBQURQLGtCQUN3QixBQUR4QixrQkFFRyxBQUZILElBRU8sQUFGUCx1QkFFOEIsQUFGOUIsbUJBR0csQUFISCxJQUdPLEFBSFAsZ0NBR3NDLEFBSHRDLDZCQUlHLEFBSkgsSUFJTyxBQUpQLG9DQUkyQyxBQUozQzs7QUFNQSxPQUFPLEFBQVAsVUFBaUIsQUFBakIsQSxRQUF3Qjs7O0FBR3hCIiwiZmlsZSI6InJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTW9yZ2FuL0RvY3VtZW50cy9zbWFydEdpdmluZyJ9