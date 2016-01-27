var React = require('react'),
    ProfileStore = require('../../stores/profile_store'),
    apiUtil = require('../../util/api_util');

var Profile = React.createClass({
  getInitialState: function () {
    return this.getStateFromStore(this.props);
  },

  getStateFromStore: function (props) {
    return (
    { profile: ProfileStore.find(props.params.userId) }
    );
  },

  componentDidMount: function () {
    this.storeCBToken = ProfileStore.addListener( function () {
      this.setState(this.getStateFromStore());
    }.bind(this));
    apiUtil.fetchSingleProfile(this.props.params.userId);
  },

  componentWillUnmount: function () {
    this.storeCBToken.remove();
  },

  componentWillReceiveProps: function (newProps) {
    this.setState(this.getStateFromStore(newProps));
  },

  render: function () {
    return (
      <div>
        <header className="profile-header-box">
          <div className="cover-photo-box">
            <h1>{this.props.params.userId}</h1>
          </div>
        </header>
      </div>
    );
  }
});

module.exports = Profile;
