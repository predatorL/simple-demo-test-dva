import { call, put } from 'dva/effects';
import { query } from '../../services/query';

export default  {
  namespace: 'merchants_info',
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

  subscriptions: [
    function(dispatch) {},
  ],

  effects: {
    *['list/query'](params) {
      const {data} = yield call(query, '/api/area', params.payload);
      if (data) {
        yield put({
          type: 'list/query/success',
          payload: {
            list: data.data,
            total: data.page.total,
            current: data.page.current
          }
        });
      }
    },
  },

  reducers: {
    ['list/query/success'](state, action) {
      let list = {
        lists: {...state.list,
          ...action.payload
        }
      };
      return {...state,
        ...list,
        loading: false
      };
    },
  },
}
