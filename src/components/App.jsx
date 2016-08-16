import React, { Component, PropTypes } from 'react';
import { Link } from 'dva/router';
import MainLayout from './MainLayout'
function App({children}) {
  return (
    <MainLayout >
      {children}
    </MainLayout>
  );
};

export default App;
