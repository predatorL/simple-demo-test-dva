import React, {Component, PropTypes} from 'react';
import {Form, Input, Button, Checkbox, Table, Icon} from 'antd';

const FormItem = Form.Item;

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a href="#">{text}</a>
  }, {
    title: '年龄',
    dataIndex: 'age',
    key: 'age'
  }, {
    title: '住址',
    dataIndex: 'address',
    key: 'address'
  }, {
    title: '操作',
    key: 'operation',
    render: (text, record) => (
      <span>
        <a href="#">操作一{record.name}</a>
        <span className="ant-divider"></span>
        <a href="#">操作二</a>
        <span className="ant-divider"></span>
        <a href="#" className="ant-dropdown-link">
          更多
          <Icon type="down"/>
        </a>
      </span>
    )
  }
];
const data = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号'
  }, {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号'
  }, {
    key: '3',
    name: '李大嘴',
    age: 32,
    address: '西湖区湖底公园1号'
  }
];

const _List = React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    console.log('收到表单值：', 'asdas');
  },
  render() {
    return (
      <div className="con-body main-list">
        <div className="bd-header">
          <Form inline onSubmit={this.handleSubmit}>
            <FormItem label="姓名">
              <Input name="name" placeholder="请输入账户名"/>
            </FormItem>
            <FormItem label="帐号">
              <Input name="account" type="text" placeholder="请输入账户"/>
            </FormItem>
            <Button type="primary" htmlType="submit">查询</Button>
          </Form>
        </div>
        <div className="bd-content">
          <Table columns={columns} dataSource={data} />
        </div>
      </div>
    );
  }
});

export default _List;
