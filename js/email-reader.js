var React = require('react'),
    Actions = require('./actions');

var Reader = React.createClass({
  handleChange: function () {
    Actions.readToggle(this.props.messageId);
  },
  render: function () {
    var message = this.props.message;
    if (!message) {
      return <div className="reader">
        Open an email
      </div>;
    }
    
    return <div className="reader">
      <label>Is read:
        <input type="checkbox" checked={message.read} onChange={this.handleChange}/>
      </label>
      <h2>{message.subject}</h2>
      <h3>From <span>{message.from}</span></h3>
      <p>{message.body}</p>
    </div>;
  }
});

module.exports = Reader;
