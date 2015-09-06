'use strict';


var React = require('react/addons');
var Panel = require('../Panel');
var TestUtils = React.addons.TestUtils;



describe('Panel', () => {

  it('should render some rows by default', () => {
    var instance = TestUtils.renderIntoDocument(
      <Panel />
    );
    var rows = TestUtils.scryRenderedDOMComponentsWithClass(instance, 'list-group-item');
    expect(rows.length).toEqual(3);
  });

  it('should render the title', () => {
    var instance = TestUtils.renderIntoDocument(
      <Panel title="superman" />
    );
    var title = TestUtils.findRenderedDOMComponentWithClass(instance, 'panel-title');
    expect(React.findDOMNode(title).textContent).toEqual('superman3');
  });

  it('should render custom rows', () => {
    var rows = [
      {href: '#', text: 'darmstadt'},
      {href: '#', text: 'frankfurt'},
      {href: '#', text: 'mannheim'}
    ];
    var instance = TestUtils.renderIntoDocument(
      <Panel rows={rows} />
    );
    var group = TestUtils.findRenderedDOMComponentWithClass(instance, 'list-group');
    expect(React.findDOMNode(group).textContent).toEqual('darmstadtfrankfurtmannheim');
  });

  it('should show a badge', () => {
    var instance = TestUtils.renderIntoDocument(
      <Panel />
    );
    var badge = TestUtils.findRenderedDOMComponentWithClass(instance, 'badge');
    expect(React.findDOMNode(badge).textContent).toEqual('3');
  });

  it('should update the list upon search', () => {
    var instance = TestUtils.renderIntoDocument(
      <Panel />
    );
    var rows = TestUtils.scryRenderedDOMComponentsWithClass(instance, 'list-group-item');
    expect(rows.length).toEqual(3);

    // simulate search action
    var input = TestUtils.findRenderedDOMComponentWithClass(instance, 'form-control');
    var inputDOM = React.findDOMNode(input);
    React.addons.TestUtils.Simulate.change(inputDOM, {
      target: {
        value: 'two'
      }
    });

    // make sure list contains only one item
    rows = TestUtils.scryRenderedDOMComponentsWithClass(instance, 'list-group-item');
    expect(rows.length).toEqual(1);
  });

});
