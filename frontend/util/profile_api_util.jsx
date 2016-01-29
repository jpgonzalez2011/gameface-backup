var ProfileActions = require('../actions/profile_actions');

var ProfileApiUtil = {
  fetchSingleProfile: function (id) {
    $.ajax({
      type: 'GET',
      url: '/api/users/' + id,
      dataType: 'json',
      success: function (data) {
        ProfileActions.receiveSingleProfile(data);
      }
    });
  }
};

module.exports = ProfileApiUtil;
