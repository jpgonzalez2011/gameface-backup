var Dispatcher = require('../dispatcher/dispatcher'),
    PhotoConstants = require('../constants/photo_constants');

var PhotoActions = {
  receivePhotos: function (photos) {
      Dispatcher.dispatch({
      actionType: PhotoConstants.RECEIVED_PHOTOS,
      photos: photos
    });
  },

  receiveUpdatedPhotos: function(photos) {
    Dispatcher.dispatch({
      actionType: PhotoConstants.RECEIVE_UPDATED_PHOTOS,
      photos: photos
    });
  }
};

module.exports = PhotoActions;
