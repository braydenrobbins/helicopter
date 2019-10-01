import React, { useState, useEffect } from 'react';
import { Input, Layout, Menu } from 'antd';
import { isEmpty } from 'lodash'

import HelicopterList from './helicopter-list';

const { Content, Sider } = Layout;

function Helicopter(props) {
  const { Search } = Input;
  const [filtHeli, setFiltHeli] = useState([]);
  const [typeSelected, setTypeSelected] = useState('');

  const allTypes = props.helicopters.map(h => h.type);
  const uniqueTypes = allTypes.filter((r, index) => allTypes.indexOf(r) === index);
  const makeItems = uniqueTypes.map(t => <Menu.Item key={t} onClick={() => handleSelected(t)}>{t}</Menu.Item>);

  function handleSelected(type) {
    setTypeSelected(type);
  };

  useEffect(() => console.log(typeSelected))

  function handleSearch(value) {
    const regex = new RegExp(value, 'i');
    const searchResults = (props.helicopters.filter(h => h.model.search(regex) === 0));
    const filteredResults = isEmpty(typeSelected) ? searchResults : searchResults.filter((r) => r.type === typeSelected);
    setFiltHeli(filteredResults);
  }

  return (
    <>
      <Layout>
        <Sider>
          <Menu
            mode="inline"
            className='sider'
          >
            {makeItems}
          </Menu>
        </Sider>
        <Layout>
          <Content>
            <h1 className='big-title'>Helicopters</h1>
            <Search
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

