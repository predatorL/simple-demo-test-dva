import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {Menu, Icon} from 'antd';
import _Aside from '../configs/Aside';
const SubMenu = Menu.SubMenu;

const renderMenu = () => {
  return _Aside.map((_item, _index) => {
    const _subItems = _item.subItems.map((_subItem, subIndex) => {
      return (
        <Menu.Item key={_index + "_" + subIndex}>
          <a href={_subItem.a_path}>{_subItem.title}</a>
        </Menu.Item>
      );
    });
    console.log(_subItems);
    return (
      <SubMenu key={_item.icon} title={
        <span >
        <Icon type={_item.icon}/>
        <b className = "title-text" > {_item.title} </b> </span>
      }>
        {_subItems}
      </SubMenu>
    );
  });
};

const Prat_aside = React.createClass({
  getInitialState() {
    return {
      collapse: false,
      mode: 'inline',
    };
  },
  onCollapseChange() {
    this.setState({
      collapse: !this.state.collapse,
      mode: !this.state.collapse ? 'vertical' : 'inline',
    })
  },
  render() {
    const [collapse, mode, onCollapseChange] = [
      this.state.collapse,
      this.state.mode,
      this.onCollapseChange
    ];

    return (
      <aside className={collapse ? "layout-aside layout-aside-collapse" : "layout-aside"}>
        <div className="layout-logo"></div>
        <Menu mode={mode} theme="dark" defaultSelectedKeys={['user']}>
          {renderMenu()}
        </Menu>

        <div className="ant-aside-action" onClick={onCollapseChange}>
          {collapse
            ? <Icon type="right"/>
            : <Icon type="left"/>}
        </div>
      </aside>
    );
  }
});
Prat_aside.PropTypes = {};

export default Prat_aside;
