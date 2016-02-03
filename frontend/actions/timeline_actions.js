var Dispatcher = require('../dispatcher/dispatcher'),
    TimelineConstants = require('../constants/timeline_constants');

var TimelineActions = {
  receiveItems: function (items) {
    Dispatcher.dispatch({
      actionType: TimelineConstants.RECEIVED_ITEMS,
      items: items
    });
  },

  receiveNewComment: function (comment) {
    Dispatcher.dispatch({
      actionType: TimelineConstants.NEW_COMMENT_MADE_ON_TIMELINE,
      comment: comment
    });
  }

};

module.exports = TimelineActions;
