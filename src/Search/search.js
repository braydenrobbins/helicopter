import React, { useState } from 'react';
import { Input } from 'antd';

import Helicopter from '../Helicopter/helicopters';

function SearhBar(props) {
  const { Search } = Input;
  const [filtHeli, setFiltHeli] = useState({});

  function handleChange(value) {
    const regex = new RegExp(value, 'i');
    const searchResults = (props.helicopters.filter(h => h.name.search(regex) === 0))
    setFiltHeli(searchResults);
    console.log(filtHeli);
  }

  return (
    <>
      <h1 className='big-title'>Helicopters</h1>
      <Search
        placeholder="Search for helicopters"
        onChange={value => handleChange(value)}
        className='search'
        enterButton
      />
      <Helicopter {...props} />
    </>
  )
}

export default SearhBar;

