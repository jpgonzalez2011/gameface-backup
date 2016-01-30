var React = require('react'),
    ProfileStore = require('../../stores/profile_store'),
    History = require('react-router').History;

var Profile = React.createClass({

  mixins: [History],

  getInitialState: function () {
    return { profile: {} };
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

  componentWillUnmount: function () {
    this.storeCBToken.remove();
  },

  componentWillReceiveProps: function (newProps) {
    this.setState(this.getStateFromStore(newProps));
  },


  render: function () {
    var photos = "#/users/" + this.props.params.userId + "/photos",
        about = "#/about/" + this.props.params.userId + "/about",
        timeline = "#/about/" + this.props.params.userId + "timeline",
        friends = "#/about/" + this.props.params.userId + "friends";

    return (
      <div>
        <header className="profile-header-box group">
          <div className="cover-photo-box">
            <img src={this.state.profile.cover_photo} />
          </div>
          <ul className="profile-nav group">
            <li> <a href={about}> About </a> </li>
            <li> <a href={timeline}> Timeline </a> </li>
            <li> <a href={photos}> Photos </a> </li>
            <li> <a href={friends}> Friends </a> </li>
          </ul>
          <div className="profile-picture-box">
            <img src={this.state.profile.profile_photo} />
          </div>
        </header>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Profile;
