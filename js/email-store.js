var EventEmitter = require('events').EventEmitter,
    merge = require('object-assign'),
    AppDispatcher = require('./dispatcher');

var CHANGE_EVENT = 'change';

var _messages = [];

function read(id) {
  _messages[id].read = true;
}

function readToggle(id) {
  _messages[id].read = !_messages[id].read;
}

var EmailStore = merge(EventEmitter.prototype, {
  getAll: function () {
    return _messages;
  },
  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

AppDispatcher.register(function (payload) {
  var action = payload.action;

  switch (action.actionType) {
    case 'read':
      read(action.id);
      break;

    case 'readToggle':
      readToggle(action.id);
      break;

    case 'load':
      _messages = action.messages;
      break;
  }

  EmailStore.emitChange();
  return true;
});


module.exports =  EmailStore;
