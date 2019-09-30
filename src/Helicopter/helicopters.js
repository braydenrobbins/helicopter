import React from 'react';
import { Layout, List } from 'antd';

import HelicopterCard from './helicopter-card';

const { Content, } = Layout;

const Helicopter = (props) => {
  return (
    <Layout>
      <Content className='content'>
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