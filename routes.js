const routes = require('next-routes')() //so it returns a funciton which will be invoked

// how we defirne new route mapping.
routes
  .add('/campaigns/new','/campaigns/new')
  .add('/campaigns/:address', '/campaigns/show')
  .add('/campaigns/:address/requests','/campaigns/requests/index')
  .add('/campaigns/:address/requests/new', '/campaigns/requests/new');

module.exports = routes;// exports helpers that help us navigate our users around our site


// now setup server.js file, telling it to use routes.js
