var PhotoActions = require('../actions/photo_actions'),
    TimelineActions = require('../actions/timeline_actions');

var PhotoApiUtil = {
  fetchOwnedPhotos: function (ownerId) {
    $.ajax({
      type: "GET",
      url: "api/users/" + ownerId + "/photos",
      dataType: "json",
      success: function (data) {
        var photos = data.photos;
        PhotoActions.receivePhotos(photos);
      }
    });
  },

  acceptNewPhoto: function (photo, resetCallback) {
    $.ajax({
      type: "POST",
      url: "api/users/" + photo.ownerId + "/photos",
      processData: false,
      contentType: false,
      dataType: "json",
      data: photo,
      success: function (data) {
        resetCallback();
        PhotoActions.receiveUpdatedPhoto(data);
      }
    });
  },

  addNewComment: function (comment) {
    $.ajax({
      type: "POST",
      url: "api/comments/",
      dataType: "json",
      data: comment,
      success: function (data) {
        if (comment.comment.mainTimeLine) {
          TimelineActions.receiveNewComment(data);
        } else {
          PhotoActions.receiveUpdatedComment(data);
        }
      }
    });
  }
};

module.exports = PhotoApiUtil;
