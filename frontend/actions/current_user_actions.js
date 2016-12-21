var Dispatcher = require('../dispatcher/dispatcher'),
    CurrentUserConstants = require('../constants/current_user_constants');

var CurrentUserActions = {
  newUserReceived: function (currentUser) {
    Dispatcher.dispatch({
      actionType: CurrentUserConstants.NEW_USER_RECEIVED,
      currentUser: currentUser
    });
  },

  existingUserReceived: function (currentUser) {
    Dispatcher.dispatch({
      actionType: CurrentUserConstants.EXISTING_USER_RECEIVED,
      currentUser: currentUser
    });
  },

  logOut: function () {
    Dispatcher.dispatch({
      actionType: CurrentUserConstants.LOG_OUT,
    });
  }
};

module.exports = CurrentUserActions;
