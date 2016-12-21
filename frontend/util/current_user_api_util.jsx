var CurrentUserActions = require('../actions/current_user_actions');


var CurrentUserApiUtil = {
  transmitCredentials: function (credentials) {
    $.ajax({
      type: "POST",
      url: "/api/session",
      dataType: 'json',
      data: credentials,
      success: function (data) {
        CurrentUserActions.newUserReceived(data);
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
        CurrentUserActions.existingUserReceived(data);
      },
      error: function () {
        console.log("No existing user to fetch so killed here to avoid error");
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
