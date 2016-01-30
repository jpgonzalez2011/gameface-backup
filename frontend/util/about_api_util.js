var AboutActions = require('../actions/about_actions');

var AboutApiUtil = {
  fetchAboutInfo: function (id) {
    $.ajax({
      type: "GET",
      url: "api/users/" + id + "/about/",
      dataType: "json",
      success: function (data) {
        AboutActions.receiveAboutInfo(data);
      }
    });
  }
};

module.exports = AboutApiUtil;
