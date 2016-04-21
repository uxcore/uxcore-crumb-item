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
                    <Crumb.Item href="#" className="crumb-item-style">首页</Crumb.Item>
                    <Crumb.Item href="#">管理平台</Crumb.Item>
                    <Crumb.Item href="#">流程管理</Crumb.Item>
                    <Crumb.Item className="crumb-item-style">编辑流程信息</Crumb.Item>
                </Crumb>
            </div>
        );
    }
};

module.exports = Demo;
