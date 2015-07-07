'use strict';

var React = require('react');
var Panel = require('./index');



class App extends React.Component {

  render() {

    var style = {
      width: 500,
      margin: '0 auto'
    };

    var rows = [
      {href: '#', text: 'Dog'},
      {href: '#', text: 'Cat'},
      {href: '#', text: 'Horse'}
    ];

    return (
      <div style={style}>
        <Panel title="awesome" rows={rows} />
      </div>
    );
  }

}



React.render(<App />, document.getElementById('react'));
