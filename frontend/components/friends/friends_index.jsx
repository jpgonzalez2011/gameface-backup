var React = require('react'),
    FriendStore = require('../../stores/friend_store'),
    FriendIndexItem = require('./friend_index_item');

var FriendsIndex = React.createClass({
  getInitialState: function () {
    return (this.getStateFromStore(this.props));
  },

  getStateFromStore: function (props) {
    return ({ friends: FriendStore.findByUser(props.params.userId)});
  },

  componentDidMount: function () {
    this.storeCBToken = FriendStore.addListener( function () {
      this.setState(this.getStateFromStore(this.props));
    }.bind(this));
  },

  componentWillUnmount: function () {
    this.storeCBToken.remove();
  },

  componentWillMount: function () {
    this.getStateFromStore(this.props);
  },

  componentWillReceiveProps: function (newProps) {
    FriendStore.emptyFriends(newProps.params.userId);
    this.setState(this.getStateFromStore(newProps));
  },

  render: function () {
    if (this.state.friends[0] === "no friends yet") {
      return (
        <div className="friends-container group">
          <h1 className="friends-header">
            FRIENDS
          </h1>
          No friends yet!
        </div>
      );
    } else if (this.state.friends === "loading") {
      return (
        <div>
        </div>
      );
    } else {
      return (
        <div className="friends-container group">
          <h1 className="friends-header">
            FRIENDS
          </h1>
          <ul className="friends-list group">
            {this.state.friends.map ( function (friend, i) {
                return (
                  <FriendIndexItem friend={friend} key={i} />
                );
              }
          )}
          </ul>
        </div>
      );
    }
  }
});

module.exports = FriendsIndex;
