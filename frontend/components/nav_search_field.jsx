var React = require('react');

var NavSearchField = React.createClass({
  getInitialState: function () {
    return {search: ""};
  },

  render: function () {
    return (
      <input className="nav-search-field" type="text" value={this.state.search}/>
    );
  }
});

module.exports = NavSearchField;
