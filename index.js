'use strict';

var React = require('react');



/**
 * Panel component
 */
class Panel extends React.Component {



  /**
   * Property types
   */
  static propTypes = {
    title: React.PropTypes.string,
    body: React.PropTypes.string
  }



  /**
   * Default properties
   */
  static defaultProps = {
    title: 'Hello',
    body: 'World'
  }



  /**
   * Constructor function
   */
  constructor(props) {
    super(props);
  }



  /**
   * Render component
   */
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">{this.props.title}</h3>
        </div>
        <div className="panel-body">
          {this.props.body}
        </div>
      </div>
    )
  }

}



/**
 * Export component
 */
module.exports = Panel;
