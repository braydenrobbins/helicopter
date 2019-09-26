import React, { useState } from 'react';
import { Card, Popover, Button } from 'antd';

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
    <>
      <Button onClick={editHeli} type='primary'>Edit</Button>
      <Button onClick={deleteHeli} type='danger'>Delete</Button>
    </>
  );

  function editHeli() {
    console.log('edit');
    hide()
  }

  function deleteHeli() {
    console.log('delete');
    hide();
  }
  return (
    <Popover content={popoverButtons} title="Options" trigger="click" visible={visible} >
      <Card
        hoverable
        className='helicopter-card'
        cover={<img alt="example" src={props.helicopter.src} className='helicopter-Img' />}
        onClick={showPopover}
      >
        <Meta title={props.helicopter.name} description={props.helicopter.date} />
      </Card>
    </Popover>
  )
}

export default HelicopterCard;