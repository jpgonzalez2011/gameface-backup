var Dispatcher = require('../dispatcher/dispatcher'),
    Store = require('flux/utils').Store,
    TimelineConstants = require('../constants/timeline_constants'),
    TimelineApiUtil = require('../util/timeline_api_util'),
    PostConstants = require('../constants/post_constants'),
    PhotoConstants = require('../constants/photo_constants');

var items = [];

var TimelineStore = new Store(Dispatcher);

TimelineStore.allItems = function () {
  if (items.length === 0) {
    TimelineApiUtil.fetchAllItems();
  }
  return items;
};

TimelineStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case TimelineConstants.RECEIVED_ITEMS:
      items = payload.items;
      this.__emitChange();
      break;
    case TimelineConstants.NEW_COMMENT_MADE_ON_TIMELINE:
    var comment = payload.comment;
    var itemIdx = items.findIndex( function(el) { return (el.id === comment.commentable_id && el.type === comment.commentable_type); });
    items[itemIdx].comments.push(comment);
    this.__emitChange();
    break;
  }
};

module.exports = TimelineStore;
