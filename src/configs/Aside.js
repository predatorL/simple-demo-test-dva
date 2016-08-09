/*
{
  "title": "用户管理",
  "icon": "user",
  "path": "user",
  "subItems": [{
    "title": "用户列表",
    "path": "user_list"
}
*/
const _menu = [{
  "title": "用户管理",
  "icon": "user",
  "subItems": [{
    "title": "用户列表",
    "a_path": "/#/user/user_list"
  },{
    "title": "用户添加",
    "a_path": "/#/user/user_add"
  }]
}, {
  "title": "订单管理",
  "icon": "inbox",
  "subItems": [{
    "title": "订单列表",
    "a_path": "/#/order/order_list"
  }, {
    "title": "提交订单",
    "a_path": "/#/order/order_add"
  }]
}];

/*
{
  'target': [0,0], // itemIndex,subItemIndex
  'props': [
    {'a_path': '/user22/user_list22'}
  ]
}

const _special = [];

const _data = _menu.map( item => {
  item.subItems.forEach( (no_use,i,arr) => {
    arr[i].a_path = ['', item.path, arr[i].path ].join('/');
  });
  return item;
});
_special.length && _special.forEach( item = )
*/
export default _menu;
