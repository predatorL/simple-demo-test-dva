/* form/list/form+/list+ */
export default {
  'area': {
    type: 'list',
    state: {
      searchs: {
        area: 'lucy',
      },
      lists: {
        list: [],
        loading: false,
        total: null,
        current: 1,
        currentItem: {},
        modalVisible: false,
        modalType: 'create'
      },
      configs: {
        api: '/api/area'
      }
    },
  },
  'product_setup': {
    state: {
      searchs: {
        area: 'lucy',
      },
      lists: {
        list: [],
        loading: false,
        total: null,
        current: 1,
        currentItem: {},
        modalVisible: false,
        modalType: 'create'
      }
    },
    type: 'special',
  }
}
