import { call, put } from 'dva/effects';
import { query } from '../../services/area';
export default {
  
  namespace: 'area',
  state: {
    searchs: {
      area: 'lucy',
    },
    lists: {
      list: [],
      loading: false,
      total: null,
      current: 1,
    }
  },

  subscriptions: [
    function(dispatch) {
    },
  ],

  effects: {
    *['list/query']({ payload }) {
      const { data } = yield call(query, '/api/area', payload);
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
      let list = {lists: {...state.list, ...action.payload }};
      return { ...state, ...list,loading: false };
    },
  },
}
