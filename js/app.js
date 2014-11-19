var React = require('react'),
    Emails = require('./emails'),
    Reader = require('./email-reader'),
    EmailStore = require('./email-store'),
    Actions = require('./actions'),
    messages = [
      { from: 'Richard', subject: 'Fine day today', body: 'Is it not?' },
      { from: 'Boomer', subject: 'Do you have time?', body: 'I would like to meet' },
      { from: 'Sara', subject: 'Request for more info', body: 'How are you' },
      { from: 'Anne', subject: 'Message update', body: 'This has happened' }
    ];

Actions.load(messages);

var Controller = React.createClass({
  getInitialState: function () {
    return {
      messages: EmailStore.getAll(),
      openedMessageId: -1
    };
  },
  componentDidMount: function () {
    EmailStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function () {
    EmailStore.removeChangeListener(this._onChange);
  },
  _onChange: function () {
    this.setState({ messages: EmailStore.getAll() });
  },
  onOpen: function (id) {
    this.setState({ openedMessageId: id });
    Actions.read(id);
  },
  render: function () {
    var message = null,
      opened = this.state.openedMessageId;
    if (opened > -1) {
      message = this.state.messages[opened];
    }
    return <div>
      <Emails messages={this.state.messages} onOpen={this.onOpen} />
      <Reader message={message} messageId={opened}/>
    </div>;
  }
});

React.render(<Controller/>,
  document.getElementById('container')
);
