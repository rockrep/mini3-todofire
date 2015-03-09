//var React = require('react');
var React = require('./../public/common').react;
var ListContainer = require('./ListContainer');

var App = React.createClass({
  render: function() {
    return (
      <div className="container">
        <div className="row">
          <ListContainer />
        </div>
      </div>
    )
  }
});

React.render(
  <App />,
  document.getElementById('app')
)
