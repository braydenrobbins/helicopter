import React, { useState } from 'react';
import { Input, Button, Form } from 'antd';
//import Config from '../config/app.local.conf.js';

function AddHeli() {
  const [heliName, setHeliName] = useState();
  const [heliDate, setHeliDate] = useState();

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

  function clearFields() {
    setHeliName('');
    setHeliDate('');
  }

  function addNewHelicopter() {
    const newHeli = {
      heliName: heliName,
      heliDate: heliDate
    }

    //   fetch(`${Config.websiteServiceUrl}helicopter`, buildConfig({
    //     method: `POST`,
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(newHeli)
    // }))
    //     .then(res => {
    //         if (!res.ok) {
    //             throw Error(res.statusText);
    //         }
    //         clearFields();
    //     })
    //     .catch(err => {
    //         props.onError(err)
    //     });
    // }
  }



  return (
    <>
      <h1>Add a Helicopter</h1>
      <Form {...formItemLayout} onSubmit={(event) => {
        event.preventDefault();
        addNewHelicopter();
      }}>
        <Form.Item label="Helicopter Name"><Input type="text" placeholder='Name' name="heliName" value={heliName} onChange={(e) => setHeliName(e.target.value)} /></Form.Item>
        <Form.Item label="Helicopter Date"><Input type="text" placeholder='Year' name="heliDate" value={heliDate} onChange={e => setHeliDate(e.target.value)} /></Form.Item>
        <Button type="primary" htmlType="submit">Submit</Button>
      </Form>

    </>
  );
}

export default AddHeli;