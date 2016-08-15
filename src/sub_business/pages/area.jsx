import React, {Component, PropTypes} from 'react';
import { Form, Input, Button, Checkbox, Table, Icon, Select, Pagination, Popconfirm } from 'antd';
import {connect} from 'dva';
import {business_area} from '../configs.jsx';

const [pageCfgs,FormItem,Option] = [business_area,Form.Item,Select.Option];
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
          <Option value="1">1</Option>
          <Option value="2">2</Option>
          <Option value="3">3</Option>
        </Select>
      </FormItem>
      <Button type="primary" htmlType="submit">查询</Button>
    </Form>
  );
};
Search = Form.create()(Search)//这会给Search添加一个form属性

const View = ({business_area, dispatch}) => {
  const {searchs, lists, configs} = business_area;
  const {list, loading, total, current} = lists;

  const searchProps = {
    searchs,
    onSearch(fieldsValue) {
      dispatch({type: 'list/query', payload: fieldsValue, api: configs.api});
    },
    onAdd() {
      dispatch({
        type: 'list/showModal',
        payload: {
          modalType: 'create'
        }
      });
    }
  };
  const listProps = {
    dataSource: list,
    loading,
    total,
    current,
    columns: pageCfgs.list.lists.columns,
    pagination: false,
    onPageChange(page) {
      dispatch({
        type: 'users/query',
        payload: {page}
      });
    },
    onDeleteItem(id) {
      dispatch({
        type: 'users/delete',
        payload: id
      });
    },
    onEditItem(item) {
      dispatch({
        type: 'users/showModal',
        payload: {
          modalType: 'update',
          currentItem: item,
        }
      });
    }
  };
  return (
    <div className="con-body main-list">
      <div className="bd-header">
        <Search {...searchProps} />
      </div>
      <div className="bd-content">
        <Table {...listProps} />
      </div>
    </div>
  );
};

function mapStateToProps({business_area}) {
  return {business_area};
};

export default connect(mapStateToProps)(View);
