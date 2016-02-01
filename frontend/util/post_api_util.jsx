var PostActions = require('../actions/post_actions');

var PostApiUtil = {
  fetchTargetedPosts: function (targetId) {
    $.ajax({
      type: "GET",
      url: "api/users/" + targetId + "/posts",
      dataType: "json",
      success: function (data) {
        PostActions.receivePosts(data);
      }
    });
  },

  acceptNewPost: function (post, resetCallback) {
    $.ajax({
      type: "POST",
      url: "api/posts/",
      dataType: "json",
      data: post,
      success: function (data) {
        PostActions.receiveUpdatedPost(data);
      }
    });
  }
};

module.exports = PostApiUtil;
