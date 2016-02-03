var React = require('react'),
    FriendStore = require('../../stores/friend_store');

var FriendsIndex = React.createClass({
  getInitialState: function () {
    return (this.getStateFromStore(this.props));
  },

  getStateFromStore: function (props) {
    return ({ friends: FriendStore.findByUser(props.params.userId)});
  },

  componentDidMount: function () {
    this.storeCBToken = FriendsStore.addListener( function () {
      this.setState(this.getStateFromStore(this.props));
    }.bind(this));
  },

  componentWillUnmount: function () {
    this.storeCBToken.remove();
  },

  componentWillMount: function () {
    FriendStore.emptyFriends(this.props.params.userId);
    this.getStateFromStore(this.props);
  },

  componentWillReceiveProps: function (newProps) {
    FriendStore.emptyFriends(newProps.params.userId);
    this.setState(this.getStateFromStore(newProps));
  },

  render: function () {
    return (
      <div>
        Hello from the div.
      </div>
    );
  }
});

module.exports = FriendsIndex;
