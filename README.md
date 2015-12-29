
# panel.jsx

React Panel component

## Installation

```
$ npm install panel.jsx
```

## Usage

```js
import React from 'react';
import ReactDOM from 'react-dom';
import Panel from 'panel.jsx';

class App extends React.Component {

  render() {

    var rows = [
      {href: '#', text: 'Dog'},
      {href: '#', text: 'Cat'},
      {href: '#', text: 'Horse'}
    ];

    return (
      <div>
        <Panel title="Animals" rows={rows} />
      </div>
    );
  }

}

ReactDOM.render(<App />, document.getElementById('react'));
```

## Test

```
$ make test
```

## License

MIT
