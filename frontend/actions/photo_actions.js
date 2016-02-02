var Dispatcher = require('../dispatcher/dispatcher'),
    PhotoConstants = require('../constants/photo_constants');

var PhotoActions = {
  receivePhotos: function (photos) {
      Dispatcher.dispatch({
        actionType: PhotoConstants.RECEIVED_PHOTOS,
        photos: photos
    });
  },

  receiveUpdatedPhoto: function(photo) {
    Dispatcher.dispatch({
      actionType: PhotoConstants.RECEIVE_UPDATED_PHOTO,
      photo: photo
    });
  },

  receiveUpdatedComment: function (comment) {
    Dispatcher.dispatch({
      actionType: PhotoConstants.RECEIVE_UPDATED_COMMENT,
      comment: comment
    });
  }
};

module.exports = PhotoActions;
