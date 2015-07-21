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
    rows: React.PropTypes.arrayOf(React.PropTypes.shape({
      href: React.PropTypes.string,
      text: React.PropTypes.string
    }))
  }



  /**
   * Default properties
   */
  static defaultProps = {
    title: 'Hello',
    rows: [
      {href: '', text: 'one'},
      {href: '', text: 'two'},
      {href: '', text: 'three'}
    ]
  }



  /**
   * Constructor function
   */
  constructor(props) {
    super(props);
  }



  /**
   * Initial state
   */
  state = {
    search: ''
  }



  /**
   * Handle change event from input field
   */
  onChange = (event) => {
    this.setState({
      search: event.target.value
    });
  }



  /**
   * Render component
   */
  render() {

    var rows = this.props.rows
      .filter(row =>
        row.text.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
      )
      .map((row, index) =>
        <a key={index} href={row.href} className="list-group-item">
          {row.text}
        </a>
      );

    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">
            {this.props.title}
            <span className="badge" style={{float: 'right'}}>
              {this.props.rows.length}
            </span>
          </h3>
          <div className="form-group has-feedback" style={{
            marginBottom: 0,
            marginTop: 10
          }}>
            <input type="search" className="form-control" onChange={this.onChange} value={this.state.search} />
            <span className="glyphicon glyphicon-search form-control-feedback"></span>
          </div>
        </div>
        <div className="list-group">
          {rows}
        </div>
      </div>
    );
  }

}



/**
 * Export component
 */
module.exports = Panel;
