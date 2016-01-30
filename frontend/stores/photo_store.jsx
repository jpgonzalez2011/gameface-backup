var Dispatcher = require('../dispatcher/dispatcher'),
    Store = require('flux/utils').Store,
    PhotoConstants = require('../constants/photo_constants'),
    PhotoApiUtil = require('../util/photo_api_util');

var photos = [];

var PhotoStore = new Store(Dispatcher);

PhotoStore.findByOwner = function (ownerId) {
  if (photos.length === 0 ) {
    PhotoApiUtil.fetchOwnedPhotos(ownerId);
  }
  return photos;
};

PhotoStore.acceptNewPhoto = function (photo, resetCallback) {
  PhotoApiUtil.acceptNewPhoto(photo, resetCallback);
};

PhotoStore.emptyPhotos = function (userId) {
  if (photos.length > 0 && photos[0].uploader_id !== userId ) {
    photos = [];
  }
};

PhotoStore.__onDispatch = function (payload) {
  switch (payload.actionType){
    case PhotoConstants.RECEIVED_PHOTOS:
    if (photos.length !== payload.photos.length || payload.photos.length !== 0) {
      photos = payload.photos;
      this.__emitChange();
    }
      break;
    case PhotoConstants.RECEIVE_UPDATED_PHOTO:
      photos.push(payload.photo);
      this.__emitChange();
      break;
  }
};

module.exports = PhotoStore;
