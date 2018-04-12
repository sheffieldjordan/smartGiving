'use strict';

var routes = require('next-routes')(); //so it returns a funciton which will be invoked

// how we defirne new route mapping.
routes.add('/campaigns/new', '/campaigns/new').add('/campaigns/:address', '/campaigns/show')
// .add('/:address', '/recipient')
.add('/campaigns/:address/requests', '/campaigns/requests/index').add('/campaigns/:address/requests/new', '/campaigns/requests/new');

module.exports = routes; // exports helpers that help us navigate our users around our site

// now setup server.js file, telling it to use routes.js
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZixBLDBCQUF3Qzs7QUFFeEM7QUFDQSxPQUNFLEFBREYsSUFDTSxBQUROLGtCQUN3QixBQUR4QixrQkFFRSxBQUZGLElBRU0sQUFGTix1QkFFNkIsQUFGN0I7QUFHQyxBQUhEO0NBSUUsQUFKRixJQUlNLEFBSk4sZ0NBSXNDLEFBSnRDLDZCQUtFLEFBTEYsSUFLTSxBQUxOLG9DQUswQyxBQUwxQzs7QUFPQSxPQUFPLEFBQVAsVUFBaUIsQUFBakIsQSxRQUF3Qjs7QUFFeEIiLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9Nb3JnYW4vRG9jdW1lbnRzL3NtYXJ0R2l2aW5nIn0=