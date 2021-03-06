import React, { useState } from "react";
import { Input, Button, Form, notification, List, Col, Row } from "antd";
import { useLocation } from "react-router";
import Config from "../config/app.local.config";

const HeliDetailPage = () => {
  let location = useLocation();
  const heli = location.state.helicopter;
  const [heliUrl] = useState(heli.src);
  const [heliModel, setHeliModel] = useState(heli.model);
  const [type, setType] = useState(heli.type);
  const [capWeight, setCapWeight] = useState(heli.capWeight);
  const [crewMax, setCrewMax] = useState(heli.crewMax);
  const [crewMin, setCrewMin] = useState(heli.crewMin);
  const [fuseLength, setFuseLength] = useState(heli.fuseLength);
  const [heliHeight, setHeliHeight] = useState(heli.heliHeight);
  const [rotorDiam, setRotorDiam] = useState(heli.rotorDiam);
  const [engineType, setEngineType] = useState(heli.engineType);
  const [maxSpeed, setMaxSpeed] = useState(heli.maxSpeed);
  const [auth] = useState(localStorage.getItem("token") || "");

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 6 }
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 }
    }
  };

  function deleteHeli() {
    fetch(`${Config.websiteServiceUrl}/helicopters/${heli._id}`, {
      method: `DELETE`
    })
      .then(res => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
      })
      .catch(err => {
        notification["error"]({
          message: "Oh No! Something went wrong!",
          description: `Sorry about that! Your Helicopter was not deleted`
        });
      });
  }

  function updateHelicopter() {
    const heli = {
      type: type,
      heliModel: heliModel,
      capWeight: capWeight,
      crewMax: crewMax,
      crewMin: crewMin,
      fuseLength: fuseLength,
      heliHeight: heliHeight,
      rotorDiam: rotorDiam,
      engineType: engineType,
      maxSpeed: maxSpeed
    };

    fetch(`${Config.websiteServiceUrl}`, {
      method: `PUT`,
      body: JSON.stringify(heli)
    })
      .then(res => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
      })
      .catch(err => {
        handleError(err);
      });
  }

  function handleError(err) {
    notification["error"]({
      message: "Oh No! Something went wrong!",
      description: `Sorry about that! It will be back up and running in a jiffy! We were unable to add your class to the list.`
    });
  }

  return (
    <>
      {auth ? (
        <>
          <h1 className="big-title">Edit Helicopter</h1>
          <Form
            {...formItemLayout}
            onSubmit={event => {
              event.preventDefault();
              updateHelicopter();
            }}
          >
            <Form.Item label="Type">
              <Input
                type="text"
                placeholder="Type"
                name="type"
                value={type}
                onChange={e => setType(e.target.value)}
              />
            </Form.Item>
            <Form.Item label="Model">
              <Input
                type="text"
                placeholder="Model"
                name="heliModel"
                value={heliModel}
                onChange={e => setHeliModel(e.target.value)}
              />
            </Form.Item>
            <Form.Item label="Capacity Weight">
              <Input
                type="text"
                placeholder="Capacity Weight"
                name="capWeight"
                value={capWeight}
                onChange={e => setCapWeight(e.target.value)}
              />
            </Form.Item>
            <Form.Item label="Crew Maximum">
              <Input
                type="text"
                placeholder="Crew Maximum"
                name="crewMax"
                value={crewMax}
                onChange={e => setCrewMax(e.target.value)}
              />
            </Form.Item>
            <Form.Item label="Crew Minimum">
              <Input
                type="text"
                placeholder="Crew Minimum"
                name="crewMin"
                value={crewMin}
                onChange={e => setCrewMin(e.target.value)}
              />
            </Form.Item>
            <Form.Item label="Fuselage Length">
              <Input
                type="text"
                placeholder="Fuselage Length"
                name="fuseLength"
                value={fuseLength}
                onChange={e => setFuseLength(e.target.value)}
              />
            </Form.Item>
            <Form.Item label="Helicopter Height">
              <Input
                type="text"
                placeholder="Helicopter Height"
                name="heliHeight"
                value={heliHeight}
                onChange={e => setHeliHeight(e.target.value)}
              />
            </Form.Item>
            <Form.Item label="Rotor Diameter">
              <Input
                type="text"
                placeholder="Rotor Diameter"
                name="rotorDiam"
                value={rotorDiam}
                onChange={e => setRotorDiam(e.target.value)}
              />
            </Form.Item>
            <Form.Item label="Engine Type">
              <Input
                type="text"
                placeholder="Engine Type"
                name="engineType"
                value={engineType}
                onChange={e => setEngineType(e.target.value)}
              />
            </Form.Item>
            <Form.Item label="Max Speed">
              <Input
                type="text"
                placeholder="Max Speed"
                name=""
                value={maxSpeed}
                onChange={e => setMaxSpeed(e.target.value)}
              />
            </Form.Item>
            <span>
              <Button
                type="primary"
                htmlType="submit"
                className="action-button"
              >
                Submit
              </Button>
              <Button
                type="danger"
                onClick={deleteHeli}
                className="action-button"
              >
                Delete
              </Button>
            </span>
          </Form>
        </>
      ) : (
          <>
            <Row>
              <Col span={24}>
                <h1 className="big-title">
                  {type} {heliModel}
                </h1>
              </Col>
            </Row>
            <Row>
              <Col span={8}>
                <img
                  src={heliUrl}
                  alt={`the current helicopter`}
                  className="detailImg"
                />
              </Col>
              <Col span={12}>
                <List
                  bordered
                  styles={{
                    fontSize: "50px"
                  }}
                  itemLayout="horizontal"
                  grid={{
                    gutter: 40,
                    xs: 1,
                    sm: 2,
                    md: 3,
                    lg: 4,
                    xl: 4
                  }}
                >
                  <List.Item>
                    <p>{`Type: ${type}`}</p>
                  </List.Item>
                  <List.Item>
                    <p>{`Model: ${heliModel}`}</p>
                  </List.Item>
                  <List.Item>
                    <p>{`Capacity Weight: ${capWeight}`}</p>
                  </List.Item>
                  <List.Item>
                    <p>{`Crew Maximum: ${crewMax}`}</p>
                  </List.Item>
                  <List.Item>
                    <p>{`Crew Minimum: ${crewMin}`}</p>
                  </List.Item>
                  <List.Item>
                    <p>{`Fuselage Length: ${fuseLength}`}</p>
                  </List.Item>
                  <List.Item>
                    <p>{`Helicopter Height: ${heliHeight}`}</p>
                  </List.Item>
                  <List.Item>
                    <p>{`Rotor Diameter: ${rotorDiam}`}</p>
                  </List.Item>
                  <List.Item>
                    <p>{`Engine Type: ${engineType}`}</p>
                  </List.Item>
                  <List.Item>
                    <p>{`Max Speed: ${maxSpeed}`}</p>
                  </List.Item>
                </List>
              </Col>
            </Row>
          </>
        )}
    </>
  );
};
export default HeliDetailPage;
