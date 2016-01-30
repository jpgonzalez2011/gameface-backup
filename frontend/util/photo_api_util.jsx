var PhotoActions = require('../actions/photo_actions');

var PhotoApiUtil = {
  fetchOwnedPhotos: function (ownerId) {
    $.ajax({
      type: "GET",
      url: "api/users/" + ownerId + "/photos",
      dataType: "json",
      success: function (data) {
        debugger
        PhotoActions.receivePhotos(data);
      }
    });
  }
};

module.exports = PhotoApiUtil;
