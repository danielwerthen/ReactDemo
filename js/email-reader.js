var React = require('react');

var Reader = React.createClass({
  render: function () {
    if (!this.props.message) {
      return <div className="reader">
        Open an email
      </div>;
    }
    return <div className="reader">
      <h2>{this.props.message.subject}</h2>
      <h3>From <span>{this.props.message.from}</span></h3>
      <p>{this.props.message.body}</p>
    </div>;
  }
});

module.exports = Reader;
