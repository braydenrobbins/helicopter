import React, { useState } from 'react';
import { Card, Popover } from 'antd';

import HeliActions from '../EditHeli/heliActions';

const { Meta } = Card;

const HelicopterCard = (props) => {
  const [visible, setVisible] = useState(false);

  function hide() {
    setVisible(false);
  }

  function showPopover() {
    setVisible(true);
  }

  const popoverButtons = (
    <HeliActions heli={props.helicopter} close={hide} />
  );

  return (
    <Popover
      content={popoverButtons}
      title="Edit Helicopter"
      trigger="click"
      visible={visible}
    >
      <Card
        hoverable
        className='helicopter-card'
        cover={<img alt="example" src={props.helicopter.src} className='helicopter-Img' />}
        onClick={showPopover}
      >
        <Meta title={props.helicopter.model} description={props.helicopter.date} />
      </Card>
    </Popover>
  )
}

export default HelicopterCard;