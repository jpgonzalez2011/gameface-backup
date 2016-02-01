var React = require('react'),
    ProfileStore = require('../../stores/profile_store');

var About = React.createClass({
  getInitialState: function () {
    return ( this.getStateFromStore(this.props) );
  },

  getStateFromStore: function (props) {
    return ( { aboutInfo: ProfileStore.find(props.params.userId) } );
  },

  componentDidMount: function () {
    this.storeCBToken = ProfileStore.addListener( function () {
      this.setState(this.getStateFromStore(this.props));
    }.bind(this));
  },

  componentWillMount: function () {
    this.getStateFromStore(this.props);
  },

  componentWillUnMount: function () {
    this.storeCBToken.remove();
  },

  componentWillReceiveProps: function (newProps) {
    debugger
    this.setState(this.getStateFromStore(newProps));
  },

  render: function () {
    return (
      <div className="about-container group">
        <h1 className="about-header"> ABOUT </h1>
        <feature className="about-nav">
          <ul>
            <li>
              General Info
            </li>
          </ul>
        </feature>
        <ul className="about-list group">
          <li>
            Full Name: {this.state.aboutInfo.fname} {this.state.aboutInfo.lname}
          </li>
          <li>
            Date of Birth: {this.state.aboutInfo.date_of_birth}
          </li>
          <li>
            Occuption: {this.state.aboutInfo.occupation}
          </li>
          <li>
            Description: {this.state.aboutInfo.description}
          </li>
        </ul>
      </div>
    );
  }
});

module.exports = About;
