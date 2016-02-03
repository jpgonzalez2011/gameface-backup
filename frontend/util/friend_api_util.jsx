var FriendActions = require('../actions/friend_actions');


var FriendApiUtil = {
  fetchFriends: function (userId) {
    $.ajax({
      type: "GET",
      url: "api/users/" + userId + "/friendships",
      dataType: "json",
      success: function (data) {
        var friends = data.friends;
        FriendActions.receiveFriends(friends);
      }
    });
  }
};

module.exports = FriendApiUtil;
