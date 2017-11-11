import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Overlay extends PureComponent {
  render() {
    return this.props.visible ?
      <div className="overlay" >
        <i className="fa fa-spinner fa-spin" />
      </div> : '';
  }
}

Overlay.propTypes = {
  visible: PropTypes.bool.isRequired,
};
