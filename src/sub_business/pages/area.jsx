import React, {Component, PropTypes} from 'react';
import { Form, Input, Button, Checkbox, Table, Icon, Select, Pagination, Popconfirm } from 'antd';
import {connect} from 'dva';
import {business_area} from '../../configs.js';

let [ Search, List] = [
    require('../../components/Search.jsx'),
    require('../../components/List.jsx')
  ];

const View = ({area, dispatch}) => {
  const {searchs, lists, configs} = area;
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
    columns: business_area.list.columns,
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
        <Search {...searchProps}>
          <a>123132</a>
        </Search>
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
