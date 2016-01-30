var Dispatcher = require('../dispatcher/dispatcher'),
    Store = require('flux/utils').Store,
    PhotoConstants = require('../constants/photo_constants'),
    PhotoApiUtil = require('../util/photo_api_util');

var _photos = [];

var PhotoStore = new Store(Dispatcher);

PhotoStore.findByOwner = function (ownerId) {
  debugger
  PhotoApiUtil.fetchOwnedPhotos(ownerId);
};

PhotoStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case PhotoConstants.RECEIVED_PHOTOS:
      _photos = payload.photos;
      this.__emitChange();
      break;
  }
};

module.exports = PhotoStore;
