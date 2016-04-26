/**
 * CrumbItem Component for uxcore
 * @author peijie.dpj
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */

let classnames = require('classnames');
let React = require('react'); 
let ReactDOM = require('react-dom');

class CrumbItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const props = this.props;

    return !props.href ? <span className={classnames({
        [props.className]: !!props.className
    })}>{props.children}</span> : <a href={props.href} className={props.className}>{props.children}</a>
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
  ])
}

CrumbItem.displayName = 'CrumbItem';

module.exports = CrumbItem;