'use strict';

var React = require('react');
var Panel = require('./index');



class App extends React.Component {

  render() {

    var style = {
      width: 500,
      margin: '0 auto'
    };

    return (
      <div style={style}>
        <Panel title="awesome" badge={2} body="panel" />
      </div>
    );
  }

}



React.render(<App />, document.getElementById('react'));
