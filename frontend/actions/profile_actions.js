var Dispatcher = require('../dispatcher/dispatcher'),
    ProfileConstants = require('../constants/profile_constants');


var ProfileActions = {
    receiveSingleProfile: function (profile) {
      Dispatcher.dispatch({
      actionType: ProfileConstants.SINGLE_PROFILE_RECEIVED,
      profile: profile
    });
  }
};

module.exports = ProfileActions;
