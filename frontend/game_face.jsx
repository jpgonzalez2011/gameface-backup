var React = require('react'),
    ReactDOM = require('react-dom'),
    Router = require('react-router').Router,
    Route = require('react-router').Route,
    History = require('react-router').History;

var LoggedInNavHeader = require('./components/logged_in_nav_header'),
    LoggedOutNavHeader = require('./components/logged_out_nav_header'),
    Profile = require('./components/profiles/profile'),
    PhotosIndex = require('./components/photos/photos_index'),
    About = require('./components/about/about'),
    CurrentUserStore = require('./stores/current_user_store'),
    ProfileTimeline = require('./components/profile_timeline/profile_timeline'),
    FriendsIndex = require('./components/friends/friends_index'),
    Timeline = require('./components/timeline/timeline');

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
    // this.getCurrentUserFromStore();
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
      <Route path="timeline" component={Timeline} onEnter={_ensureLoggedIn}/>
      <Route path="users/:userId" component={Profile} onEnter={_ensureLoggedIn}>  //ensure login here
        <Route path="photos" component={PhotosIndex} />
        <Route path="about" component={About} />
        <Route path="timeline" component={ProfileTimeline} />
        <Route path="friends" component={FriendsIndex} />
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
