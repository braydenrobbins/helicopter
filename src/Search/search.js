import React, { useState, useEffect } from 'react';
import { Input } from 'antd';
import { isEmpty } from 'lodash'

import Helicopter from '../Helicopter/helicopters';

function SearhBar(props) {
  const { Search } = Input;
  const [filtHeli, setFiltHeli] = useState([]);

  function handleSearch(value) {
    const regex = new RegExp(value, 'i');
    const searchResults = (props.helicopters.filter(h => h.model.search(regex) === 0));
    setFiltHeli(searchResults);
  }

  return (
    <>
      <h1 className='big-title'>Helicopters</h1>
      <Search
        placeholder="Search for helicopters"
        onChange={(e) => handleSearch(e.target.value)}
        className='search'
        enterButton
      />
      <Helicopter filtHeli={isEmpty(filtHeli) ? props.helicopters : filtHeli} />
    </>
  )
}

export default SearhBar;

