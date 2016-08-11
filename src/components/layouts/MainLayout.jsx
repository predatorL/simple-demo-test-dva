import ReactDOM from 'react-dom';
import React from 'react';
//Part
import Part_aside from './Aside';
import Breadcrumb from './Breadcrumb';

const MainLayout = React.createClass({
  render() {
    const data = ['shouye', 'yongyong', 'mou']
    return (
      <div className="layout-wrapper">
        <Part_aside />
        <div className="layout-header">
        </div>
        <div className="layout-container">
          <Breadcrumb data={data}/>
          {this.props.children}
        </div>
        <div className="layout-footer">
        </div>
      </div>
    );
  }
});

export default MainLayout;
