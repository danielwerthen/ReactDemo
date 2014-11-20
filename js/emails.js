var React = require('react/addons'),
    _ = require('lodash');

var Emails = React.createClass({
  render: function () {
    var self = this,
      cx = React.addons.classSet,
      unread = _.reduce(self.props.messages, function (sum, m) {
        return sum + (m.read ? 0 : 1);
      }, 0);
    var messages = _.map(self.props.messages, function (m, id) {
      var classes = cx({
        'message': true,
        'unread': !m.read
      });
      function onOpen() {
        self.props.onOpen(id);
      }
      return <div key={id} className={classes} onClick={onOpen}>
        <label>From: </label>
        <p>{m.from}</p>
        <label>Subject: </label>
        <h3>{m.subject}</h3>
      </div>;
    });
    
    return <div className="messages">
      <label>Unread: <span>{unread}</span></label>
      {messages}
    </div>;
  }
});

module.exports = Emails;
