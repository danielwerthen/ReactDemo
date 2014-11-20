var Dispatcher = require('./dispatcher');

var Actions = {
  load: function (messages) {
    Dispatcher.handleViewAction({
      actionType: 'load',
      messages: messages
    });
  },
  read: function (id) {
    Dispatcher.handleViewAction({
      actionType: 'read',
      id: id
    });
  },
  readToggle: function (id) {
    Dispatcher.handleViewAction({
      actionType: 'readToggle',
      id: id
    });
  }
};

module.exports = Actions;
