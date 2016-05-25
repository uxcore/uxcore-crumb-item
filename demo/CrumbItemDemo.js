/**
 * CrumbItem Component Demo for uxcore
 * @author eternalsky
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */

let classnames = require('classnames');

let CrumbItem = require('../src');
let Crumb = require('uxcore-crumb');

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <Crumb className="crumb-style crumb-root">
                    <CrumbItem href="#" className="crumb-item-style">首页</CrumbItem>
                    <CrumbItem onClick={alert.bind(window, '管理平台')}>管理平台</CrumbItem>
                    <CrumbItem href="#">流程管理</CrumbItem>
                    <CrumbItem className="crumb-item-style">编辑流程信息</CrumbItem>
                </Crumb>
            </div>
        );
    }
};

module.exports = Demo;
