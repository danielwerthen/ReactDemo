var React = require('react'),
    Emails = require('./emails'),
    messages = [
      { from: 'Richard', subject: 'Lorem hello' },
      { from: 'Boomer', subject: 'Lorem hello' },
      { from: 'Sara', subject: 'Lorem hello' },
      { from: 'Anne', subject: 'Lorem hello' }
    ];

React.render(
  <Emails messages={messages} />,
  document.getElementById('container')
);
