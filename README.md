
# panel.jsx

React Panel component

## Installation

```
$ npm install panel.jsx
```

## Usage

```js
var React = require('react');
var Panel = require('panel.jsx');

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

React.render(<App />, document.getElementById('react'));
```

## Test

```
$ make test
```

## License

MIT
