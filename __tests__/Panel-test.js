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

});
