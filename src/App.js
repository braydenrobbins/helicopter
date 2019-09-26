import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Layout, notification } from 'antd';

import "antd/dist/antd.css";
import './App.css';

import Helicopter from './Helicopter/helicopters';
import NavHeader from './NavHeader/navHeader';
import AddHeli from './AddHeli/addHeli';

function App() {
  const { Content, Header } = Layout;

  const helicopterHash1 = '7b3a88b8bd33c2405ed870f489d93def';
  const helicopterHash2 = '1cc3e1cc8283f7b9d43b75452a7d08aa';
  const helicopterHash3 = 'b48828b0a86e137da4017bcaedccfc0b';
  const helicopterHash4 = 'f16ac1a368db92dc087fe0e69aad6b22';
  const helicopterHash5 = '996ad4fbc1ad96c8bb165caf4d0517f3';
  const helicopterHash6 = '5517702f111f3ff25f02eb94046dcdfe';
  const helicopterHash7 = '42d6b5142f80684d0bcfd671fed4ddeb';
  const helicopterHash8 = 'dfc0ef0aa91c6d85fb875fd24896ecbf';
  const helicopterHash9 = '7453585fe9980b8f1ba54d1a9c7a8e78';

  const [helicopters] = useState([
    {
      '_id': helicopterHash1,
      'name': 'Focke-Wulf Fw 61',
      'date': 1936,
      'src': 'https://hips.hearstapps.com/pop.h-cdn.co/assets/17/09/980x553/gallery-1488384411-screen-shot-2017-03-01-at-110225-am.png?resize=980:*'
    },
    {
      '_id': helicopterHash2,
      'name': 'Sikorsky R-4',
      'date': 1942,
      'src': 'https://hips.hearstapps.com/pop.h-cdn.co/assets/17/09/1280x753/gallery-1488385872-screen-shot-2017-03-01-at-113048-am.png?resize=980:*'
    },
    {
      '_id': helicopterHash3,
      'name': 'Bell 47',
      'date': 1945,
      'src': 'https://hips.hearstapps.com/pop.h-cdn.co/assets/17/09/980x522/gallery-1488388001-bell-47-credit-keystonegetty.png?resize=980:*'
    },
    {
      '_id': helicopterHash4,
      'name': 'Focke-Wulf Fw 618',
      'date': 1936,
      'src': 'https://hips.hearstapps.com/pop.h-cdn.co/assets/17/09/980x553/gallery-1488384411-screen-shot-2017-03-01-at-110225-am.png?resize=980:*'
    },
    {
      '_id': helicopterHash5,
      'name': 'Sikorsky R-48',
      'date': 1942,
      'src': 'https://hips.hearstapps.com/pop.h-cdn.co/assets/17/09/1280x753/gallery-1488385872-screen-shot-2017-03-01-at-113048-am.png?resize=980:*'
    },
    {
      '_id': helicopterHash6,
      'name': 'Bell 478',
      'date': 1945,
      'src': 'https://hips.hearstapps.com/pop.h-cdn.co/assets/17/09/980x522/gallery-1488388001-bell-47-credit-keystonegetty.png?resize=980:*'
    },
    {
      '_id': helicopterHash7,
      'name': 'Focke-Wulf Fw 619',
      'date': 1936,
      'src': 'https://hips.hearstapps.com/pop.h-cdn.co/assets/17/09/980x553/gallery-1488384411-screen-shot-2017-03-01-at-110225-am.png?resize=980:*'
    },
    {
      '_id': helicopterHash8,
      'name': 'Sikorsky R-49',
      'date': 1942,
      'src': 'https://hips.hearstapps.com/pop.h-cdn.co/assets/17/09/1280x753/gallery-1488385872-screen-shot-2017-03-01-at-113048-am.png?resize=980:*'
    },
    {
      '_id': helicopterHash9,
      'name': 'Bell 479',
      'date': 1945,
      'src': 'https://hips.hearstapps.com/pop.h-cdn.co/assets/17/09/980x522/gallery-1488388001-bell-47-credit-keystonegetty.png?resize=980:*'
    },
  ])

  function handleError(err) {
    notification['error']({
      message: 'Oh No! Something went wrong!',
      description: `Sorry about that! It will be back up and running in a jiffy! We were unable to add your class to the list.`
    });
  }

  return (
    <Router>
      <Layout className='layout'>
        <Header className='header'>
          <NavHeader />
        </Header>
        <Content className='content'>
          <Route path='/' exact render={() => <Helicopter helicopters={helicopters} handleError={handleError} />} />
          <Route path='/addHeli' exact render={() => <AddHeli handleError={handleError} />} />
        </Content>
      </Layout>
    </Router>
  );
}

export default App;
