var React = require('react'),
    ReactDOM = require('react-dom'),
    Router = require('react-router').Router,
    Route = require('react-router').Route;

var NavHeader = require('./components/nav_header'),
    Profile = require('./components/profiles/profile'),
    PhotosIndex = require('./components/photos/photos_index');

var GameFace = React.createClass({
  render: function () {
    return (
      <div id="gamefaces">
        <NavHeader />
        {this.props.children}
      </div>
    );
  }
});

var router = (
  <Router>
    <Route path="/" component={GameFace}>
      <Route path="users/:userId" component={Profile}>
        <Route path="photos" component={PhotosIndex} />
      </Route>
    </Route>
  </Router>
);

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render( router, document.getElementById('root'));
});
