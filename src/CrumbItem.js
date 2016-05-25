/**
 * CrumbItem Component for uxcore
 * @author peijie.dpj
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */

let classnames = require('classnames');
let React = require('react');

class CrumbItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const props = this.props;
    let onClick = null;
    if (props.onClick || props.href) {
      onClick = (e) => {
        e.preventDefault();
        if (props.onClick) {
          props.onClick(e);
        } else {
          location.href = props.href
        }
      };
    }
    let _props = {
      className: props.className,
      onClick: onClick,
      href: onClick ? '#' : null
    };
    return onClick
      ? <a {..._props}>{props.children}</a>
      : <span {..._props}>{props.children}</span>;
  }
}

CrumbItem.defaultProps = {
  children: '链接'
}


// http://facebook.github.io/react/docs/reusable-components.html
CrumbItem.propTypes = {
  /**
   * @title 链接
   */
  href: React.PropTypes.string,
  /**
   * @title 类名
   * @veIgnore
   */
  className: React.PropTypes.string,
  /**
   * @title 文案
   */
  children: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.element
  ]),
  /**
   * @title 点击事件
   */
  onClick: React.PropTypes.func
};

CrumbItem.displayName = 'CrumbItem';

module.exports = CrumbItem;
