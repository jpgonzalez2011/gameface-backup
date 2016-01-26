var React = require('react');

var NavSearchField = require('./nav_search_field');

var NavHeader = React.createClass({
  render: function () {
    return (
        <header className="header group">
          <nav className="nav-header group">
            <header className="left-side-header">
              <h1 className="header-logo">
              </h1>
              <NavSearchField />
            </header>
          </nav>
        </header>
    );
  }
});


module.exports = NavHeader;
