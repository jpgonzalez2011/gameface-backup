var Dispatcher = require('../dispatcher/dispatcher'),
    Store = require('flux/utils').Store;


var FriendStore = new Store(Dispatcher);

module.exports = FriendStore;
