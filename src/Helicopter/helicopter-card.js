import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';

const { Meta } = Card;

const HelicopterCard = (props) => {
  return (
    <Link to='/heliDetailPage/_id'>
      <Card
        hoverable
        className='helicopter-card'
        cover={<img alt="example" src={props.helicopter.src} className='helicopter-Img' />}
      >
        <Meta title={props.helicopter.model} description={props.helicopter.date} />
      </Card>
    </Link>
  )
}

export default HelicopterCard;