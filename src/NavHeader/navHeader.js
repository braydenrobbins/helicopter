import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';

const NavHeader = () => {


  const handleClick = () => {
    console.log('here');
  }


  return (
    <Menu mode="horizontal" theme='dark'>
      <Menu.Item onClick={handleClick} className='home'>
        <Link to="/">
          <Icon type="home" />
          Home
        </Link>
      </Menu.Item>
      <Menu.Item onClick={handleClick} className='addHeli'>
        <Link to="/addHeli">
          <Icon type="plus-circle" />
          Add Helicopter
          </Link>
      </Menu.Item>
    </Menu>
  )
}

export default NavHeader; 