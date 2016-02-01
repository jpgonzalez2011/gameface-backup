var Dispatcher = require('../dispatcher/dispatcher'),
    Store = require('flux/utils').Store,
    PostConstants = require('../constants/post_constants'),
    PostApiUtil = require('../util/post_api_util');

var posts = [];

var PostStore = new Store(Dispatcher);

PostStore.findByTarget = function (targetId) {
  if (posts.length === 0) {
    PostApiUtil.fetchTargetedPosts(targetId);
  }
  return posts;
};

PostStore.acceptNewPost = function (post) {
  PostApiUtil.acceptNewPost(post);
};

PostStore.emptyPosts = function (targetId) {
  if (posts.length > 0 && posts[0].target_id !== targetId) {
    posts = [];
  }
};

PostStore.__onDispatch = function (payload) {
  switch (payload.actionType){
    case PostConstants.RECEIVED_POSTS:
      if (posts.length !== payload.posts.length || payload.posts.length !== 0) {
        posts = payload.posts;
        this.__emitChange();
      }
      break;
    case PostConstants.RECEIVE_UPDATED_POST:
      posts.unshift(payload.post);
      this.__emitChange();
      break;
  }
};

module.exports = PostStore;
