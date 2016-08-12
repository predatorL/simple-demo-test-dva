import React, {Component, PropTypes} from 'react';
import { Form, Input, Button, Checkbox, Table, Icon, Select, Pagination, Popconfirm } from 'antd';
const [FormItem, Option] = [Form.Item, Select.Option];

let Search = (props) => {
  const {getFieldProps, validateFields, getFieldsValue} = props.form;
  function handleSubmit(e) {
    e.preventDefault();
    validateFields((errors) => {
      if (!!errors) {
        return;
      }
      props.onSearch(getFieldsValue());
    });
  };
  return (
    <Form inline onSubmit={handleSubmit}>
      <FormItem label="商圈">
        <Select style={{ width: 120 }} {...getFieldProps('area',{initialValue: props.searchs.area || ''})}>
          <Option value="1">圈1</Option>
          <Option value="2">圈2</Option>
          <Option value="3">圈3</Option>
        </Select>
      </FormItem>
      <Button type="primary" htmlType="submit">查询</Button>
      {props.children}
    </Form>
  );
};

Search = Form.create()(Search) //这会给Search添加一个form属性

export default Search;
