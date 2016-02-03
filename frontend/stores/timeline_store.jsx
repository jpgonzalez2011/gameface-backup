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
  }
};

module.exports = TimelineStore;
