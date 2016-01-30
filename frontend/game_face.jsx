var React = require('react'),
    ReactDOM = require('react-dom'),
    Router = require('react-router').Router,
    Route = require('react-router').Route,
    History = require('react-router').History;

var LoggedInNavHeader = require('./components/logged_in_nav_header'),
    LoggedOutNavHeader = require('./components/logged_out_nav_header'),
    Profile = require('./components/profiles/profile'),
    PhotosIndex = require('./components/photos/photos_index'),
    CurrentUserStore = require('./stores/current_user_store');

var GameFace = React.createClass({

  mixins: [History],

  getInitialState: function () {
    return ({
      currentUser: CurrentUserStore.currentUser() });
  },

  getCurrentUserFromStore: function () {
     this.setState({currentUser: CurrentUserStore.currentUser()});
  },

  userReceived: function () {
    this.getCurrentUserFromStore();
    var url = "/users/" + CurrentUserStore.currentUser().id;
    this.history.pushState({}, url, CurrentUserStore.currentUser.id);
  },

  componentDidMount: function () {
    CurrentUserStore.addListener(this.userReceived);
  },

  render: function () {
    if (CurrentUserStore.loggedIn()) {
      return (
        <div id="gamefaces">
          <LoggedInNavHeader />
          {this.props.children}
        </div>
      );
    } else {
      return (
        <div id="gamefaces">
          <LoggedOutNavHeader />
        </div>
      );
    }
  }
});

var router = (
  <Router>
    <Route path="/" component={GameFace}>
      <Route path="users/:userId" component={Profile} onEnter={_ensureLoggedIn}>  //ensure login here
        <Route path="photos" component={PhotosIndex} />
      </Route>
    </Route>
  </Router>
);

function _ensureLoggedIn () {
  if (CurrentUserStore.loggedIn()) {
    return {};
  } else  {
    window.location.hash = "/";
  }
}

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render( router, document.getElementById('root'));
});
