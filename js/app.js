var React = require('react'),
    Emails = require('./emails'),
    Reader = require('./email-reader'),
    messages = [
      { from: 'Richard', subject: 'Fine day today', body: 'Is it not?' },
      { from: 'Boomer', subject: 'Do you have time?', body: 'I would like to meet' },
      { from: 'Sara', subject: 'Request for more info', body: 'How are you' },
      { from: 'Anne', subject: 'Message update', body: 'This has happened' }
    ],
    message = null;

var Controller = React.createClass({
  getInitialState: function () {
    return {
      messages: messages,
      message: null
    };
  },
  onOpen: function (id) {
    this.setState({ message: messages[id] });
  },
  render: function () {
    return <div>
      <Emails messages={this.state.messages} onOpen={this.onOpen} />
      <Reader message={this.state.message} />
    </div>;
  }
});

React.render(<Controller/>,
  document.getElementById('container')
);
