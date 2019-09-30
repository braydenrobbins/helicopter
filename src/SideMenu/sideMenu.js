import React from 'react';
import { Menu, Icon } from 'antd';

function SideMenu(props) {
  function handleClick() {
    console.log('here');
  }
  return (
    <Menu
      onClick={handleClick}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      className='sider'
    >
      {props.helicopters.map(h => <Menu.Item key={h.type}>{h.type}</Menu.Item>)}
    </Menu>

  );
}

export default SideMenu;