import React, {Component, PropTypes} from 'react';
import {Breadcrumb} from 'antd';

const _Breadcrumb = React.createClass({
  render() {
    console.log('bread',this.props.data)
    const _data = this.props.data.map(
      (item,index) => <Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>
     );

    return (
      <div className="con-breadcrumb">
        <Breadcrumb>
           {_data}
        </Breadcrumb>
      </div>
    );
  }
});
_Breadcrumb.PropTypes = {};

export default _Breadcrumb;
