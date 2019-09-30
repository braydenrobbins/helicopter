import React, { useState } from 'react';
import { Menu } from 'antd';

function SideMenu(props) {
  const [selected, setSelected] = useState('');
  function handleSelected(type) {
    setSelected(type);
  };

  const mapTypes = props.helicopters.map(h => <Menu.Item key={h.type} onClick={() => handleSelected(h.type)}>{h.type}</Menu.Item>)

  return (
    <Menu
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      className='sider'
    >
      {mapTypes}
    </Menu>
  );
}

export default SideMenu;