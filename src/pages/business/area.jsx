import React, {Component, PropTypes} from 'react';
import { Form, Input, Button, Checkbox, Table, Icon, Select, Pagination, Popconfirm } from 'antd';
import {connect} from 'dva';

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
    columns: [
      {
        "title": "城市",
        "dataIndex": "age",
        "key": "age0"
      }, {
        "title": "商圈",
        "dataIndex": "age",
        "key": "age1",
        render: (text, record) => (
          <a onClick={() => onShowItem(record)}>{text}</a>
        )
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
      },  {
        title: '操作',
        key: 'operation',
        render: (text, record) => (
          <p>
            <a onClick={() => onEditItem(record)}>编辑</a>
            &nbsp;
            <Popconfirm title="确定要删除吗？" onConfirm={() => onDeleteItem(record.id)}>
              <a>删除</a>
            </Popconfirm>
          </p>
        )
      }
    ],
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
