'use strict';

var React = require('react');
var Panel = require('./index');



class App extends React.Component {

  render() {
    return (
      <div>
        <Panel />
      </div>
    )
  }

}



React.render(<App />, document.getElementById('react'));
