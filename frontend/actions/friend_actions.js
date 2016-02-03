var Dispatcher = require('../dispatcher/dispatcher'),
    FriendConstants = require('../constants/friend_constants');


var FriendActions = {
  receiveFriends: function (friends) {
    Dispatcher.dispatch({
      actionType: FriendConstants.RECEIVED_FRIENDS,
      friends: friends
    });
  }
};

module.exports = FriendActions;
