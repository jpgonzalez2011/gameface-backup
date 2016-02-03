var Dispatcher = require('../dispatcher/dispatcher'),
    Store = require('flux/utils').Store,
    FriendConstants = require('../constants/friend_constants'),
    FriendApiUtil = require('../util/friend_api_util');

var friends = [];

var FriendStore = new Store(Dispatcher);


FriendStore.findByUser = function (userId) {
  //friends[0].user_id is referring to a user_id trait that will be placed onto
  //the friend object by the back end to identify the owner of the friendships
  if (friends.length > 0 && (friends[0].user_id == userId || friends[0] ==="no friends yet")) {
    return friends;
  } else {
    friends = "loading";
    FriendApiUtil.fetchFriends(userId);
    return friends;
  }
};

FriendStore.acceptNewFriend = function (friend) {
  FriendApiUtil.acceptNewFriend(friend); //to be used when friend request accepted
};

FriendStore.emptyFriends = function (userId) {
  if (friends.length > 0 && friends[0].user_id !== userId) {
    friends = [];
  }
};

FriendStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case FriendConstants.RECEIVED_FRIENDS:
      if (payload.friends.length === 0) {
        friends = ["no friends yet"];
      } else {
        friends = payload.friends;
      }
      this.__emitChange();
      break;
    case FriendConstants.RECEIVE_NEW_FRIEND:
      friends.unshift(payload.friend);
      this.__emitChange();
      break;
  }
};

module.exports = FriendStore;
