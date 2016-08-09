import ReactDOM from 'react-dom';
import React from 'react';

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
          <div className="con-body">
            <div className="bd-header">
              111
            </div>
            <div className="bd-content">
              222
            </div>
          </div>
        </div>
        <div className="layout-footer">
        </div>
      </div>
    );
  }
});

export default MainLayout;
