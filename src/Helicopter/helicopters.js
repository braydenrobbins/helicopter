import React from 'react';
import { Layout, List, Input } from 'antd';

import HelicopterCard from './helicopter-card';

const { Content, } = Layout;
const { Search } = Input;

const Helicopter = (props) => {
  return (
    <Layout>
      <Content className='content'>
        <h1 className='big-title'>Helicopters</h1>
        <Search placeholder="Search for helicopters" onSearch={value => console.log(value)} className='search' enterButton />
        <List
          grid={{
            gutter: 5,
            xs: 1,
            sm: 2,
            md: 3,
            lg: 4,
            xl: 4,
          }}
          dataSource={props.helicopters}
          renderItem={h => (
            <List.Item>
              <HelicopterCard helicopter={h} />
            </List.Item>
          )}
        />
      </Content>
    </Layout>

  )
}

export default Helicopter; 