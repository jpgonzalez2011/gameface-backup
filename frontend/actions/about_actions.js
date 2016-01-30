var Dispatcher = require('../dispatcher/dispatcher'),
    AboutConstants = require('../constants/about_constants');

var AboutActions = {
  receiveAboutInfo: function (aboutInfo) {
    Dispatcher.dispatch({
      actionType: AboutConstants.ABOUT_INFO_RECEIVED,
      aboutInfo: aboutInfo
    });
  }
};

module.exports = AboutActions;
