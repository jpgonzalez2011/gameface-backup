var React = require('react'),
    ProfileStore = require('../../stores/profile_store'),
    History = require('react-router').History;

var Profile = React.createClass({

  mixins: [History],

  getInitialState: function () {
    return { profile: ProfileStore.find(this.props.params.userId) };
  },

  getStateFromStore: function (props) {
    return (
      { profile: ProfileStore.find(props.params.userId) }
    );
  },

  componentDidMount: function () {
    this.storeCBToken = ProfileStore.addListener( function () {
      this.setState(this.getStateFromStore(this.props));
    }.bind(this));
  },

  componentWillMount: function () {
    this.getStateFromStore(this.props);
  },

  componentWillUnmount: function () {
    this.storeCBToken.remove();
  },

  componentWillReceiveProps: function (newProps) {
    this.setState(this.getStateFromStore(newProps));
  },

  render: function () {
    var photos = "#/users/" + this.props.params.userId + "/photos",
        about = "#/users/" + this.props.params.userId + "/about",
        timeline = "#/users/" + this.props.params.userId + "/timeline",
        friends = "#/users/" + this.props.params.userId + "/friends";

    return (
      <div className="main-div">
        <header className="profile-header-box group">
          <div className="cover-photo-box">
            <img src={this.state.profile.cover_url} />
          </div>
          <ul className="profile-nav group">
            <li> <a href={about}> About </a> </li>
            <li> <a href={timeline}> Timeline </a> </li>
            <li> <a href={photos}> Photos </a> </li>
            <li> <a href={friends}> Friends </a> </li>
          </ul>
          <div className="profile-picture-box">
            <img src={this.state.profile.profile_medium_url} />
          </div>
        </header>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Profile;
