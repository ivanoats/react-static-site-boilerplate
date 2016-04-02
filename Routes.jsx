
var React = require('react')
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Root = require('./components/Root.jsx')
var Index = require('./components/Index.jsx')
var About = require('./components/About.jsx')

var Routes = (
  <Route component={Root} path='/'>
    <IndexRoute component={Index} />
    <Route path='/about' component={About} />
  </Route>
)

module.exports = Routes
