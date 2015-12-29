
import React from 'react';
import ReactDOM from 'react-dom';
import Panel from './Panel';



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



ReactDOM.render(<App />, document.getElementById('react'));
