var Dispatcher = require('../dispatcher/dispatcher'),
    TimelineConstants = require('../constants/timeline_constants');

var TimelineActions = {
  receiveItems: function (items) {
    Dispatcher.dispatch({
      actionType: TimelineConstants.RECEIVED_ITEMS,
      items: items
    });
  }
};

module.exports = TimelineActions;
