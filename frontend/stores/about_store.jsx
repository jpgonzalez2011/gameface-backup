var Dispatcher = require('../dispatcher/dispatcher'),
    Store = require('flux/utils').Store,
    AboutConstants = require('../constants/about_constants'),
    AboutApiUtil = require('../util/about_api_util');

var aboutInfo = {};

var AboutStore = new Store(Dispatcher);

AboutStore.findByUserId = function (userId) {
  if (parseInt(aboutInfo.id) !== parseInt(userId) ) {
    AboutApiUtil.fetchAboutInfo(userId);
  } else {
    return aboutInfo;
  }
};

AboutStore.emptyAboutInfo = function (userId) {
  if (aboutInfo.length > 0 && aboutInfo.id !== userId) {
    aboutInfo = {};
  }
};

AboutStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case AboutConstants.ABOUT_INFO_RECEIVED:
      aboutInfo = payload.aboutInfo;
      this.__emitChange();
      break;
  }
};

module.exports = AboutStore;
