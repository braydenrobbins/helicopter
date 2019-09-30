import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Layout, notification } from 'antd';

import "antd/dist/antd.css";
import './App.css';

import SearchBar from './Search/search';
import NavHeader from './NavHeader/navHeader';
import AddHeli from './AddHeli/addHeli';
import SideMenu from './SideMenu/sideMenu';

function App() {
  const { Content, Header, Sider } = Layout;

  const helicopterHash1 = '7b3a88b8bd33c2405ed870f489d93def';
  const helicopterHash2 = '1cc3e1cc8283f7b9d43b75452a7d08aa';
  const helicopterHash3 = 'b48828b0a86e137da4017bcaedccfc0b';

  const [helicopters] = useState([
    {
      '_id': helicopterHash1,
      'type': 'Focke-Wulf',
      'model': 'Fw 61',
      'capacity-weight': '28000',
      'crew-max': '4',
      'crew-min': '3',
      'fuselage-length': '98ft 10in',
      'height': '18ft 11in',
      'rotor-diameter': '60',
      'engine-type': '',
      'max-speed': '170 knots',
      'src': 'https://hips.hearstapps.com/pop.h-cdn.co/assets/17/09/980x553/gallery-1488384411-screen-shot-2017-03-01-at-110225-am.png?resize=980:*'
    },
    {
      '_id': helicopterHash2,
      'type': 'Sikorsky',
      'model': 'R-4',
      'src': 'https://hips.hearstapps.com/pop.h-cdn.co/assets/17/09/1280x753/gallery-1488385872-screen-shot-2017-03-01-at-113048-am.png?resize=980:*'
    },
    {
      '_id': helicopterHash3,
      'type': 'Bell',
      'model': '47',
      'src': 'https://hips.hearstapps.com/pop.h-cdn.co/assets/17/09/980x522/gallery-1488388001-bell-47-credit-keystonegetty.png?resize=980:*'
    }
  ])

  function handleError(err) {
    notification['error']({
      message: 'Oh No! Something went wrong!',
      description: `Sorry about that! It will be back up and running in a jiffy!`
    });
  }

  return (
    <Router>
      <Layout className='layout'>
        <Header className='header'>
          <NavHeader />
        </Header>
        <Layout>
          <Sider>
            <Route path='/' exact render={() => <SideMenu helicopters={helicopters} handleError={handleError} />} />
          </Sider>
          <Layout>
            <Content className='content'>
              <Route path='/' exact render={() => <SearchBar helicopters={helicopters} handleError={handleError} />} />
              <Route path='/addHeli' exact render={() => <AddHeli handleError={handleError} />} />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
