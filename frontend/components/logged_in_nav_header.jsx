var React = require('react'),
    CurrentUserStore = require('../stores/current_user_store');

var NavSearchField = require('./nav_search_field');

var LoggedInNavHeader = React.createClass({

  logOut: function (e) {
    CurrentUserStore.logOut();
  },

  render: function () {
    return (
      <header className="header group">
        <nav className="nav-header group">
          <header className="header-text">
            <a href="#/">GameFaces!</a>
          </header>
          <button onClick={this.logOut} className="log-out"> Sign Out! </button>
          <header className="signed-in-header">
            <div className="signed-in-header-name">
              {CurrentUserStore.currentUser().fname}
            </div>
          </header>
        </nav>
      </header>
    );
  }
});

module.exports = LoggedInNavHeader;
