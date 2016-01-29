var CurrentUserActions = require('../actions/current_user_actions');


var CurrentUserApiUtil = {
  transmitCredentials: function (credentials) {
    $.ajax({
      type: "POST",
      url: "/api/session",
      dataType: 'json',
      data: credentials,
      success: function (data) {
        CurrentUserActions.currentUserReceived(data);
      },
      // error: function () {
      //   CurrentUserActions.logInFailure();
      // }
    });
  },

  checkForExistingUser: function () {
    $.ajax({
      type: "GET",
      url: "api/session",
      dataType: 'json',
      success: function (data) {
        CurrentUserActions.currentUserReceived(data);
      }
    });
  },

  logOut: function () {
    $.ajax({
      type: "DELETE",
      url: "api/session",
      dataType: 'json',
      success: function () {
        CurrentUserActions.logOut();
      }
    });
  }
};

module.exports = CurrentUserApiUtil;
