import dva, { connect } from 'dva';
import { call, put } from 'dva/effects';
import { Router, Route } from 'dva/router';
import React from 'react';
import styles from './index.less';
import key from 'keymaster';

const app = dva();

app.model({
  namespace: 'count',
  state: {
    record: 0,
    current: 0,
  },
  reducers: {
    ['count/add'](state) {
      const newCurrent = state.current + 1;
      return { ...state,
        record: newCurrent > state.record ? newCurrent : state.record,
        current: newCurrent,
      };
    },
    ['count/minus'](state) {
      return { ...state, current: state.current - 1};
    },
  },
  effects: {
    *['count/add']() {
      yield call(delay, 1000);
      yield put({ type: 'count/minus' });
    },
  },
  subscriptions: [
    function(dispatch) {
      key('⌘+up, ctrl+up', () => { dispatch({type:'count/add'}) });
    },
  ]
});

const CountApp = ({count, dispatch}) => {
  return (
    <div className={styles.normal}>
      <div className={styles.record}>Highest Record: {count.record}</div>
      <div className={styles.current}>{count.current}</div>
      <div className={styles.button}>
        <button onClick={() => { dispatch({type: 'count/add'}); }}>+</button>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return { count: state.count };
}
const HomePage = connect(mapStateToProps)(CountApp);

app.router(({history}) =>
  <Router history={history}>
    <Route path="/" component={HomePage} />
  </Router>
);

app.start(document.getElementById('root'));


// ---------
// Helpers

function delay(timeout){
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}
