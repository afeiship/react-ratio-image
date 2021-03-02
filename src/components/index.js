import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CLASS_NAME = 'react-ratio-image';

export default class ReactRatioImage extends Component {
  static displayName = CLASS_NAME;
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * The ratio value.
     */
    value: PropTypes.number
  };

  static defaultProps = {
    value: 1
  };

  render() {
    const { className, value, style, ...props } = this.props;
    const _style = { paddingBottom: 100 * value + '%', ...style };
    return (
      <figure
        data-component={CLASS_NAME}
        className={classNames('wsui-frame-wrapper', CLASS_NAME, className)}
        style={_style}
        {...props}
      />
    );
  }
}
