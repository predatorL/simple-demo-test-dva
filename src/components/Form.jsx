import React, {Component, PropTypes} from 'react';

import {Form, Input, Button, Checkbox} from 'antd';
const FormItem = Form.Item;

let Demo = React.createClass({
  render() {
    const {getFieldProps} = this.props.form;
    return (
      <div className="con-body">
        <div className="bd-header"></div>
        <div className="bd-content">
          <Form horizontal onSubmit={this.handleSubmit} className="main-form">
            <FormItem label="账户">
              <Input placeholder="请输入账户名" {...getFieldProps('userName')}/>
            </FormItem>
            <FormItem label="密码">
              <Input type="password" placeholder="请输入密码" {...getFieldProps('password')}/>
            </FormItem>
            <FormItem>
              <Checkbox {...getFieldProps('agreement')}>记住我</Checkbox>
            </FormItem>
            <Button type="primary" htmlType="submit">登录</Button>
          </Form>
        </div>
      </div>
    );
  }
});

Demo = Form.create()(Demo);
export default Demo
