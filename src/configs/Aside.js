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
  "title": "业务管理",
  "icon": "user",
  "subItems": [{
    "title": "产品服务设置",
    "a_path": "/#/business/product_setup"
  }, {
    "title": "商圈管理",
    "a_path": "/#/business/area"
  }, {
    "title": "人员管理",
    "a_path": "/#/business/staff"
  }, {
    "title": "商家管理",
    "a_path": "/#/business/partner"
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
