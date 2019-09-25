import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Layout } from 'antd';
import './App.css';
import "antd/dist/antd.css";

import Helicopter from './Helicopter/helicopters';
import NavHeader from './NavHeader/navHeader';
import AddHeli from './AddHeli/addHeli';

function App() {
  const { Content, Header } = Layout;

  const [helicopters] = useState([
    {
      'name': 'Focke-Wulf Fw 61',
      'date': 1936,
      'src': 'https://hips.hearstapps.com/pop.h-cdn.co/assets/17/09/980x553/gallery-1488384411-screen-shot-2017-03-01-at-110225-am.png?resize=980:*'
    },
    {
      'name': 'Sikorsky R-4',
      'date': 1942,
      'src': 'https://hips.hearstapps.com/pop.h-cdn.co/assets/17/09/1280x753/gallery-1488385872-screen-shot-2017-03-01-at-113048-am.png?resize=980:*'
    },
    {
      'name': 'Bell 47',
      'date': 1945,
      'src': 'https://hips.hearstapps.com/pop.h-cdn.co/assets/17/09/980x522/gallery-1488388001-bell-47-credit-keystonegetty.png?resize=980:*'
    },
    {
      'name': 'Focke-Wulf Fw 61',
      'date': 1936,
      'src': 'https://hips.hearstapps.com/pop.h-cdn.co/assets/17/09/980x553/gallery-1488384411-screen-shot-2017-03-01-at-110225-am.png?resize=980:*'
    },
    {
      'name': 'Sikorsky R-4',
      'date': 1942,
      'src': 'https://hips.hearstapps.com/pop.h-cdn.co/assets/17/09/1280x753/gallery-1488385872-screen-shot-2017-03-01-at-113048-am.png?resize=980:*'
    },
    {
      'name': 'Bell 47',
      'date': 1945,
      'src': 'https://hips.hearstapps.com/pop.h-cdn.co/assets/17/09/980x522/gallery-1488388001-bell-47-credit-keystonegetty.png?resize=980:*'
    },
    {
      'name': 'Focke-Wulf Fw 61',
      'date': 1936,
      'src': 'https://hips.hearstapps.com/pop.h-cdn.co/assets/17/09/980x553/gallery-1488384411-screen-shot-2017-03-01-at-110225-am.png?resize=980:*'
    },
    {
      'name': 'Sikorsky R-4',
      'date': 1942,
      'src': 'https://hips.hearstapps.com/pop.h-cdn.co/assets/17/09/1280x753/gallery-1488385872-screen-shot-2017-03-01-at-113048-am.png?resize=980:*'
    },
    {
      'name': 'Bell 47',
      'date': 1945,
      'src': 'https://hips.hearstapps.com/pop.h-cdn.co/assets/17/09/980x522/gallery-1488388001-bell-47-credit-keystonegetty.png?resize=980:*'
    },
  ])
  return (
    <Router>
      <Layout className='App'>
        <Header className='header'>
          <NavHeader />
        </Header>
        <Content className='content'>
          <Route path='/' exact render={() => <Helicopter helicopters={helicopters} />} />
          <Route path='/addHeli' exact component={AddHeli} />
        </Content>
      </Layout>
    </Router>
  );
}

export default App;
