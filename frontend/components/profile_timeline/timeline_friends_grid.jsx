var React = require('react'),
    FriendStore = require('../../stores/friend_store'),
    FriendGridItem = require('./friend_grid_item');

var FriendGrid = React.createClass({
  getInitialState: function () {
    return (this.getStateFromStore(this.props));
  },

  getStateFromStore: function (props) {
    return ({ gridFriends: FriendStore.findByUser(props.userId).slice(0,9)});
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
    FriendStore.emptyFriends(newProps.userId);
    this.setState(this.getStateFromStore(newProps));
  },

  render: function () {
    if (this.state.gridFriends[0] === "no friends yet") {
      return (
        <div className="friends-grid-container group">
          <h1 className="friends-grid-header">
            TOP FRIENDS
          </h1>
          No friends yet!
        </div>
      );
    } else if (this.state.gridFriends === "loading") {
      return (
        <div>
        </div>
      );
    } else {
      return (
        <div className="friends-grid-container group">
          <h1 className="friends-grid-header">
            TOP FRIENDS
          </h1>
          <ul className="friends-grid group">
            {this.state.gridFriends.map ( function (friend, i){
              return (
                <FriendGridItem friend={friend} key={i} />
              );
            })}
          </ul>
        </div>
      );
    }

  }
});

module.exports = FriendGrid;
