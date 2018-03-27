'use strict';

var routes = require('next-routes')(); //so it returns a funciton which will be invoked

// how we defirne new route mapping.
routes.add('/campaigns/new', '/campaigns/new').add('/campaigns/:address', '/campaigns/show').add('/:address', '/recipient').add('/campaigns/:address/requests', '/campaigns/requests/index').add('/campaigns/:address/requests/new', '/campaigns/requests/new');

module.exports = routes; // exports helpers that help us navigate our users around our site

// now setup server.js file, telling it to use routes.js
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZixBLDBCQUF3Qzs7QUFFeEM7QUFDQSxPQUNFLEFBREYsSUFDTSxBQUROLGtCQUN3QixBQUR4QixrQkFFRSxBQUZGLElBRU0sQUFGTix1QkFFNkIsQUFGN0IsbUJBR0UsQUFIRixJQUdNLEFBSE4sYUFHbUIsQUFIbkIsY0FJRSxBQUpGLElBSU0sQUFKTixnQ0FJc0MsQUFKdEMsNkJBS0UsQUFMRixJQUtNLEFBTE4sb0NBSzBDLEFBTDFDOztBQU9BLE9BQU8sQUFBUCxVQUFpQixBQUFqQixBLFFBQXdCOztBQUV4QiIsImZpbGUiOiJyb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01vcmdhbi9Eb2N1bWVudHMvc21hcnRHaXZpbmcifQ==