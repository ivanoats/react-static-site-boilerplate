
var React = require('react')
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var RoutingContext = ReactRouter.RoutingContext;
var match = ReactRouter.match;
var createHistory = ReactRouter.createHistory;
var createMemoryHistory = ReactRouter.createMemoryHistory;
var Routes = require('./Routes.jsx')

// if (typeof document !== 'undefined') {
//   var initialProps = JSON.parse(document.getElementById('initial-props').innerHTML)
//   Router.run(Routes, Router.HistoryLocation, function (Handler) {
//     React.render(React.createElement(Handler, initialProps), document)
//   })
// }

module.exports = function render(locals, callback) {
  var history = createMemoryHistory();
  var location = history.createLocation(locals.path);

  match({ Routes, location}, function(error, redirectlocation, renderProps) {
    var html = ReactDOMServer.renderToString(<RoutingContext {...renderProps}/>)
    callback(null, '<!DOCTYPE html>' + html)
  })
}
