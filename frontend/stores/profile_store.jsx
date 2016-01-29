var Dispatcher = require('../dispatcher/dispatcher'),
    Store = require('flux/utils').Store,
    ProfileConstants = require('../constants/profile_constants'),
    ProfileApiUtil = require('../util/profile_api_util');

var _profiles = {};

var ProfileStore = new Store(Dispatcher);

ProfileStore.all = function () {
  var output = [];
  for (var key in _profiles) {
    output.push(_profiles[key]);
  }
  return output;
};

ProfileStore.find = function (id) {
  if (typeof _profiles[id] === "undefined"){
    ProfileApiUtil.fetchSingleProfile(id);
  }
  return _profiles[id] || {};
};

ProfileStore.resetProfiles = function (profiles) {
  _profiles = {};
  profiles.forEach( function (profile) {
    _profiles[profile.id] = profile;
  });
  this.__emitChange();
};

ProfileStore.__onDispatch = function (payload) {
  if (payload.actionType === ProfileConstants.SINGLE_PROFILE_RECEIVED) {
    _profiles[payload.profile.id] = payload.profile;
    this.__emitChange();
  }
};

module.exports = ProfileStore;
