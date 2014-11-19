var React = require('react'),
    _ = require('lodash');

var Emails = React.createClass({
  render: function () {
    var messages = _.map(this.props.messages, function (m) {
      return <div className="message">
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
