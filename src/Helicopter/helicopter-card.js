import React, { useState } from 'react';
import { Card } from 'antd';
import { Redirect } from 'react-router-dom';

import HeliDetailPage from './heliDetailPage';

const { Meta } = Card;

const HelicopterCard = (props) => {
  const [redirect, setRedirect] = useState(false);

  function setStateRedirect() {
    setRedirect(true);
  }

  function renderRedirect() {
    if (redirect) {
      console.log(props.helicopter.model)
      return <Redirect to={{
        pathname: `/heliDetailPage/${props.helicopter._id}`,
        state: { ...props }
      }}
      />

    }
  }

  return (
    <>
      {renderRedirect()}
      < Card
        hoverable
        className='helicopter-card'
        cover={< img alt="example" src={props.helicopter.src} className='helicopter-Img' />}
        onClick={setStateRedirect}
      >
        <Meta title={props.helicopter.model} description={props.helicopter.date} />
      </Card >
    </>
  )
}

export default HelicopterCard;