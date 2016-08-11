import React, {Component, PropTypes} from 'react';
import {Form, Input, Button, Checkbox, Table, Icon, Select} from 'antd';

const [FormItem, Option] = [Form.Item, Select.Option];

const columns = [{"title":"城市","dataIndex":"age","key":"age0"},{"title":"商圈","dataIndex":"age","key":"age1"},{"title":"调度模式","dataIndex":"age","key":"age2"},{"title":"在职人员数","dataIndex":"age","key":"age3"},{"title":"负责人","dataIndex":"age","key":"age4"},{"title":"联系电话","dataIndex":"age","key":"age5"},{"title":"状态","dataIndex":"age","key":"age6"},{"title":"操作","dataIndex":"age","key":"age7"}];



const _List = React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    console.log('收到表单值：', 'asdas');
    this.setState({data:[{age:22}]})
  },

  render() {
    return (
      <div className="con-body main-list">
        <div className="bd-header">
          <Form inline onSubmit={this.handleSubmit}>
            <FormItem label="商圈">
              <Select defaultValue="lucy" style={{ width: 120 }}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="yiminghe">yiminghe</Option>
              </Select>
            </FormItem>
            <Button type="primary" htmlType="submit">查询</Button>
          </Form>
        </div>
        <div className="bd-content">
          <Table columns={columns} dataSource={this.props.data} />
        </div>
      </div>
    );
  }
});

export default _List;
