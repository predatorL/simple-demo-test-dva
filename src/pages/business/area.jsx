import React, {Component, PropTypes} from 'react';
import {Form, Input, Button, Checkbox, Table, Icon, Select} from 'antd';
import dva, { connect } from 'dva';

const [FormItem, Option] = [Form.Item, Select.Option];

const columns = [{"title":"城市","dataIndex":"age","key":"age0"},{"title":"商圈","dataIndex":"age","key":"age1"},{"title":"调度模式","dataIndex":"age","key":"age2"},{"title":"在职人员数","dataIndex":"age","key":"age3"},{"title":"负责人","dataIndex":"age","key":"age4"},{"title":"联系电话","dataIndex":"age","key":"age5"},{"title":"状态","dataIndex":"age","key":"age6"},{"title":"操作","dataIndex":"age","key":"age7"}];


let Search = ({form,area}) => {
  const { getFieldProps, getFieldsValue } = form;
  function handleSubmit(e) {
    e.preventDefault();
    console.log('收到表单值：', getFieldsValue());
  };
  return (
    <Form inline onSubmit={handleSubmit}>
      <FormItem label="商圈">
        <Select style={{ width: 120 }} {...getFieldProps('area',{initialValue: area || ''})}>
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="yiminghe">yiminghe</Option>
        </Select>
      </FormItem>
      <Button type="primary" htmlType="submit">查询</Button>
    </Form>
  );
};
Search = Form.create()(Search)//这会给Search添加一个form属性

const View = ({area,dispatch}) => {
  return (
    <div className="con-body main-list">
      <div className="bd-header">
        <Search {...area.search}/>
      </div>
      <div className="bd-content">
        <Table columns={columns} dataSource={area.list} />
      </div>
    </div>
  );
};

function mapStateToProps({area}) {
  console.log(area)
  return {area};
};

export default connect(mapStateToProps)(View);
