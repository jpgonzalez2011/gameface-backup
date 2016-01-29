var Dispatcher = require('../dispatcher/dispatcher'),
    CurrentUserConstants = require('../constants/current_user_constants');

var CurrentUserActions = {
  currentUserReceived: function (currentUser) {
    Dispatcher.dispatch({
      actionType: CurrentUserConstants.CURRENT_USER_RECEIVED,
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
