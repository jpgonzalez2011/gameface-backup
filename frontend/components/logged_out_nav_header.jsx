var React = require('react'),
    CurrentUserStore = require('../stores/current_user_store');

var NavSearchField = require('./nav_search_field');

var LoggedOutNavHeader = React.createClass({
  getInitialState: function () {
    return ({
      currentUser: CurrentUserStore.currentUser() });
  },

  getCurrentUserFromStore: function () {
     this.setState({currentUser: CurrentUserStore.currentUser()});
  },

  submitCredentials: function (e) {
    e.preventDefault();
    CurrentUserStore.acceptCredentials(
      { username: this.state.username, password: this.state.password }
    );
  },

  logInAsMario: function () {
    CurrentUserStore.acceptCredentials(
      { username: "mario", password: "password"}
    );
  },

  // userReceived: function () {
  //   this.getCurrentUserFromStore();
  // },

  updateUsername: function (e) {
    this.setState({ username: e.target.value.toLowerCase() });
  },

  updatePassword: function (e) {
    this.setState({ password: e.target.value });
  },

  // componentDidMount: function () {
  //   CurrentUserStore.addListener(this.userReceived);
  // },

  render: function () {
    return (
      <header className="header group">
        <nav className="nav-header group">
          <header className="header-text">
            <a href="#/">GameFaces!</a>
          </header>
            <button onClick={this.logInAsMario} className="mario-log-in"> Log in as Mario! </button>
          <header className="sign-in-header group">
            <form onSubmit={this.submitCredentials} className="sign-in-header-form group">
                <label htmlFor="username">Username</label>
                <label htmlFor="password">Password</label>
                <br></br>
                <input onChange={this.updateUsername} type="text" name="user[username]" id="username"/>
                <input onChange={this.updatePassword} type="password" name="user[password]" id="password"/>
                <button>Submit</button>
            </form>
          </header>
        </nav>
      </header>
    );
  }
});


module.exports = LoggedOutNavHeader;
