
const _menu = [{
  "title": "业务管理",
  "icon": "user",
      "subItems": [
        {
        "title": "产品服务设置",
        "a_path": "/#/sub_business/product_setup"
        },
        {
        "title": "商圈管理",
        "a_path": "/#/sub_business/area"
        },
        {
        "title": "人员管理",
        "a_path": "/#/sub_business/staff"
        },
        {
        "title": "商家管理",
        "a_path": "/#/sub_business/partner"
        }
    ]
  },

  {
    "title": "账号管理",
    "icon": "user",
    "subItems": [
      {
      "title": "商户资料",
      "a_path": "/#/sub_account/merchants_info"
     },
     {
      "title": "商圈管理",
      "a_path": "/#/sub_account/merchants_info_submission"
      },
      {
      "title": "我的账号",
      "a_path": "/#/sub_account/my_Account"
      }
    ]
  }
];



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
