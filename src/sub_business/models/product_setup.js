import { call, put } from 'dva/effects';
import { query } from '../../services/query';

export default  {
    namespace: 'business_product_setup',
    subscriptions: [
      function(dispatch) {},
    ],
    effects: {
      *['list/query'](params) {
        const { data } = yield call(query, params);
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
        };
      },
    },
  }
