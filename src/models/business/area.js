import { call, put } from 'dva/effects';

export default {

  namespace: 'area',
  state: {
    search: {
      area: 'lucy',
    },
    list: []
  },

  subscriptions: [
    function(dispatch) {
    },
  ],

  effects: {
    *['examples/query']({ payload }) {
    },
  },

  reducers: {
    ['examples/save'](state, action) {
      return { ...state, ...action.payload };
    },
  },
}
