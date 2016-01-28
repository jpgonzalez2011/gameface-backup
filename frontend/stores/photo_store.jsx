var Dispatcher = require('../dispatcher/dispatcher'),
    Store = require('flux/utils').Store,
    ProfileConstants = require('../constants/profile_constants'),
    ApiUtil = require('../util/api_util');

var _photos = {};

var PhotoStore = new Store(Dispatcher);

PhotoStore.findByOwner = function () {
  return (
    ["https://upload.wikimedia.org/wikipedia/en/9/99/MarioSMBW.png",
    "http://vignette1.wikia.nocookie.net/mario/images/1/15/MarioNSMB2.png/revision/latest?cb=20120816162009"]
  );
};

PhotoStore.__onDispatch = function (payload) {
  if (payload.actionType === "Not going to fire!") {
    _photos = payload.profile;
    this.__emitChange();
  }
};

module.exports = PhotoStore;
