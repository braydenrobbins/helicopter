import React, { useState } from 'react';
import { Input, Button, Form, notification } from 'antd';
import Config from '../config/app.local.config';
import ActionButton from 'antd/lib/modal/ActionButton';

function EditHeli(props) {
  const [heliName, setHeliName] = useState(props.heli.name);
  const [heliDate, setHeliDate] = useState(props.heli.date);
  const [_id] = useState(props.heli._id);

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };

  function deleteHeli() {
    props.close();
    fetch(`${Config.websiteServiceUrl}helicopter/${props.heli._id}`, { method: `DELETE` })
      .then(res => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
      })
      .catch(err => {
        notification['error']({
          message: 'Oh No! Something went wrong!',
          description: `Sorry about that! Your Helicopter was not deleted`
        });
      });
  }

  function updateHelicopter() {
    const heli = {
      _id: _id,
      heliName: heliName,
      heliDate: heliDate
    }

    fetch(`${Config.websiteServiceUrl}helicopter`, {
      method: `PUT`,
      body: JSON.stringify(heli)
    })
      .then(res => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
      })
      .catch(err => {
        handleError(err)
      });
  }

  function handleError(err) {
    notification['error']({
      message: 'Oh No! Something went wrong!',
      description: `Sorry about that! It will be back up and running in a jiffy! We were unable to add your class to the list.`
    });
  }

  return (
    <>
      <Form {...formItemLayout} onSubmit={(event) => {
        event.preventDefault();
        updateHelicopter();
        props.close();
      }}>
        <Form.Item label="Name"><Input type="text" placeholder='Name' name="heliName" value={heliName} onChange={(e) => setHeliName(e.target.value)} /></Form.Item>
        <Form.Item label="Date"><Input type="text" placeholder='Year' name="heliDate" value={heliDate} onChange={e => setHeliDate(e.target.value)} /></Form.Item>
        <span>
          <Button onClick={props.close} className='action-button'>Cancel</Button>
          <Button type="primary" htmlType="submit" className='action-button'>Submit</Button>
          <Button type="danger" onClick={deleteHeli} className='action-button'>Delete</Button>
        </span>

      </Form>

    </>
  );
}

export default EditHeli;