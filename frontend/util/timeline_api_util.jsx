var TimelineActions = require('../actions/timeline_actions');

var TimelineApiUtil = {
  fetchAllItems: function () {
    $.ajax({
      type: "GET",
      url: "/api/timeline",
      dataType: "json",
      success: function (data) {
        var items = data.timeline;
        TimelineActions.receiveItems(items);
      }
    });
  }
};

module.exports = TimelineApiUtil;
