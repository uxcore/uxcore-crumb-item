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
    const {...props} = this.props;
    if (props.onClick) {
      props.href = "javascript:void(0);";
    }
    return props.href
      ? <a {...props}>{props.children}</a>
      : <span {...props}>{props.children}</span>;
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
   * @veIgnore
   */
  onClick: React.PropTypes.func
};

CrumbItem.displayName = 'CrumbItem';

module.exports = CrumbItem;
