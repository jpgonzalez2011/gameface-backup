var Dispatcher = require('../dispatcher/dispatcher'),
    Store = require('flux/utils').Store,
    CurrentUserConstants = require('../constants/current_user_constants'),
    CurrentUserApiUtil = require('../util/current_user_api_util');

var _currentUser = {};
var _loginFailure = false;

var CurrentUserStore = new Store(Dispatcher);

CurrentUserStore.currentUser = function () {
  if (_currentUser.id) {
    return $.extend({}, _currentUser);
  } else {
    CurrentUserApiUtil.checkForExistingUser();
    return {};
  }
};

CurrentUserStore.loginFailure = function () {
  return _loginFailure;
};

CurrentUserStore.loggedIn = function () {
  return !!_currentUser.id;
};

CurrentUserStore.logOut = function () {
  CurrentUserApiUtil.logOut();
};

CurrentUserStore.acceptCredentials = function (credentials) {
  CurrentUserApiUtil.transmitCredentials(credentials);
};

CurrentUserStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case CurrentUserConstants.CURRENT_USER_RECEIVED:
      _currentUser = payload.currentUser[0];
      this.__emitChange();
      break;
    case CurrentUserConstants.LOGIN_FAILURE:
      _loginFailure = true;
      break;
    case CurrentUserConstants.LOG_OUT:
      _currentUser = {};
      this.__emitChange();
      break;
  }
};


module.exports = CurrentUserStore;
