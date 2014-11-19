var React = require('react'),
    _ = require('lodash');

var Emails = React.createClass({
  render: function () {
    var self = this;
    var messages = _.map(self.props.messages, function (m, id) {
      function onOpen() {
        self.props.onOpen(id);
      }
      return <div key={id} className="message" onClick={onOpen}>
        <label>From: </label>
        <p>{m.from}</p>
        <label>Subject: </label>
        <h3>{m.subject}</h3>
      </div>;
    });
    
    return <div className="messages">
      {messages}
    </div>;
  }
});

module.exports = Emails;
