import React, {Component} from 'react';
import PropTypes from 'prop-types';


class Text extends Component {
  static propTypes = {
    clickText: PropTypes.string.isRequired,
    staticText: PropTypes.string.isRequired
  };

  render() {
    return (
      <div>
        <p className="text">{this.props.staticText}</p>
      </div>
    );
  }
}

export default Text;