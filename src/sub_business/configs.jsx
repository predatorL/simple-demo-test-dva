export default {
  'business_product_setup': {

  },
  'business_area':{
    list:{
      searchs:{
      },
      lists: {
        columns:[
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
        ]
      }
    }
  }
}
