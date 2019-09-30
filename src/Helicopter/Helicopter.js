import React, { useState, useEffect } from 'react';
import { Input, Layout, Menu } from 'antd';
import { isEmpty } from 'lodash'

import HelicopterList from './helicopter-list';

const { Content, Sider } = Layout;

function Helicopter(props) {
  const { Search } = Input;
  const [filtHeli, setFiltHeli] = useState([]);
  const [typeSelected, setTypeSelected] = useState('');
  const [inputValue, setInputValue] = useState('');

  const mapTypes = props.helicopters.map(h => <Menu.Item key={h.type} onClick={() => handleSelected(h.type)}>{h.type}</Menu.Item>);

  function handleSelected(type) {
    setTypeSelected(type);
  };

  function handleSearch(value) {
    const regex = new RegExp(value, 'i');
    const searchResults = (props.helicopters.filter(h => h.model.search(regex) === 0));
    const filteredResults = isEmpty(typeSelected) ? searchResults : searchResults.filter((h) => h.type === typeSelected);
    setFiltHeli(filteredResults);
  }

  useEffect(() => {
    console.log(filtHeli);
  });

  return (
    <>
      <Layout>
        <Sider>
          <Menu
            mode="inline"
            className='sider'
          >
            {mapTypes}
          </Menu>
        </Sider>
        <Layout>
          <Content>
            <h1 className='big-title'>Helicopters</h1>
            <Search
              value={inputValue}
              placeholder="Search for helicopters"
              onChange={(e) => handleSearch(e.target.value)}
              className='search'
              enterButton
            />
            <HelicopterList filtHeli={isEmpty(filtHeli) ? props.helicopters : filtHeli} />
          </Content>
        </Layout>
      </Layout>
    </>
  )
}

export default Helicopter;

