import React, {Component, PropTypes} from 'react';
import { Form, Input, Button, Checkbox, Table, Icon, Select, Pagination, Popconfirm } from 'antd';

let List = (props) => {
  const { total, current, columns, loading, dataSource, onPageChange, onDeleteItem, onEditItem } = props;
  return (
    <div>
      <Table columns={columns} dataSource={dataSource} loading={loading} pagination={false} onDeleteItem={onDeleteItem} onEditItem={onEditItem}/>
      <Pagination className="ant-table-pagination" total={total} current={current} pageSize={10} onChange={onPageChange}/>
    </div>
  );
};

export default List;
