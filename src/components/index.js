import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';

const CLASS_NAME = 'react-ratio-image';

export default class extends Component {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.number
  };

  static defaultProps = {
    value: 1
  };
  /*===properties end===*/

  render() {
    const { className, value, style, ...props } = this.props;
    const _style = objectAssign({ paddingBottom: 100 * value + '%' }, style);
    return (
      <figure
        className={classNames(
          'webkit-sassui-frame-wrapper',
          CLASS_NAME,
          className
        )}
        style={_style}
        {...props}
      />
    );
  }
}
