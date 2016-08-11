import React, {Component, PropTypes} from 'react';
import { Form, Input, Button, Checkbox, Table, Icon, Select, Pagination } from 'antd';
import dva, {connect} from 'dva';

const [FormItem,
  Option] = [Form.Item, Select.Option];

const columns = [
  {
    "title": "城市",
    "dataIndex": "age",
    "key": "age0"
  }, {
    "title": "商圈",
    "dataIndex": "age",
    "key": "age1"
  }, {
    "title": "调度模式",
    "dataIndex": "age",
    "key": "age2"
  }, {
    "title": "在职人员数",
    "dataIndex": "age",
    "key": "age3"
  }, {
    "title": "负责人",
    "dataIndex": "age",
    "key": "age4"
  }, {
    "title": "联系电话",
    "dataIndex": "age",
    "key": "age5"
  }, {
    "title": "状态",
    "dataIndex": "age",
    "key": "age6"
  }, {
    "title": "操作",
    "dataIndex": "age",
    "key": "age7"
  }
];

let Search = ({form, area, onSearch}) => {
  const {getFieldProps, validateFields, getFieldsValue} = form;
  function handleSubmit(e) {
    e.preventDefault();
    validateFields((errors) => {
      if (!!errors) {
        return;
      }
      onSearch(getFieldsValue());
    });
  };
  return (
    <Form inline onSubmit={handleSubmit}>
      <FormItem label="商圈">
        <Select style={{
          width: 120
        }} {...getFieldProps('area',{initialValue: area || ''})}>
          <Option value="1">圈1</Option>
          <Option value="2">圈2</Option>
          <Option value="3">圈3</Option>
        </Select>
      </FormItem>
      <Button type="primary" htmlType="submit">查询</Button>
    </Form>
  );
};
Search = Form.create()(Search) //这会给Search添加一个form属性

const List = ({ total, current, loading, dataSource, onPageChange, onDeleteItem, onEditItem }) => {
  return (
    <div>
      <Table columns={columns} dataSource={dataSource} loading={loading} pagination={false}/>
      <Pagination className="ant-table-pagination" total={total} current={current} pageSize={10} onChange={onPageChange}/>
    </div>
  );
};

const View = ({area, dispatch}) => {
  const {searchs, lists} = area;
  const {list, loading, total, current} = lists;
  const searchProps = {
    searchs,
    onSearch(fieldsValue) {
      dispatch({type: 'list/query', payload: fieldsValue});
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
    pagination: false,
    onPageChange(page) {
      dispatch({
        type: 'users/query',
        payload: {page}
      });
    }
  };
  return (
    <div className="con-body main-list">
      <div className="bd-header">
        <Search {...searchProps}/>
      </div>
      <div className="bd-content">
        <List {...listProps}/>
      </div>
    </div>
  );
};

function mapStateToProps({area}) {
  return {area};
};

export default connect(mapStateToProps)(View);
