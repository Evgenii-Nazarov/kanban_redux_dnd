import React from "react";
import {Col, Descriptions, Image, Row} from "antd";

const size = 35;

const About = () => {
  const reactLabel = (
    <Image
      className="d-block"
      width={36}
      src="https://img.icons8.com/plasticine/100/000000/react.png"
    />
  );

  const reduxLabel = (
    <Image
      width={size}
      src="https://img.icons8.com/color/48/000000/redux.png"
    />
  );

  const jsLabel = (
    <Image
      width={size}
      src="https://img.icons8.com/ios/50/000000/javascript.png"
    />
  );

  const cssLabel = (
    <Image width={size} src="https://img.icons8.com/dusk/64/000000/css3.png" />
  );

  const nodeLabel = (
    <Image width={40} src="https://img.icons8.com/color/48/000000/nodejs.png" />
  );

  const expressLabel = (
    <Image
      width={70}
      src="https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg"
    />
  );

  const mongoLabel = (
    <Image
      width={36}
      src="https://img.icons8.com/color/48/000000/mongodb.png"
    />
  );

  return (
    <Descriptions bordered>
      <Descriptions.Item label="Front End" span={3}>
        <Row align="middle" justify="space-around">
          <Col xs={4}>
            <Row justify="center" className="">
              {reactLabel}
              <span className="d-block">React</span>
            </Row>
          </Col>

          <Col xs={4}>
            <Row justify="center" className="">
              {reduxLabel}
              <span className="d-block">Redux</span>
            </Row>
          </Col>

          <Col xs={5}>
            <Row justify="center" className="">
              {jsLabel}
              <span className="d-block">JavaScript</span>
            </Row>
          </Col>

          <Col xs={6}>
            <Row justify="center" className="">
              {cssLabel}
              <span className="d-block">Ant Design</span>
            </Row>
          </Col>
        </Row>
      </Descriptions.Item>

      <Descriptions.Item label="Back End" span={3}>
        <Row justify="space-around">
          <Col xs={5}>
            <Row justify="center" className="">
              {nodeLabel}
              <span className="d-block">Node JS</span>
            </Row>
          </Col>

          <Col xs={6}>
            <Row justify="center pt-1" className="">
              {expressLabel}
              <span>Express JS</span>
            </Row>
          </Col>

          <Col xs={6}>
            <Row justify="center pt-1" className="">
              {mongoLabel}
              <span>Mongo BD</span>
            </Row>
          </Col>
        </Row>
      </Descriptions.Item>

      <Descriptions.Item label="Rest Info" span={3}>
        RESTful single page web application
        <br />
        All data is storing at Mongo DB
        <br />
        Redux is used to work with state
        <br />
        And Design grid helped create a responsive app
        <br />
        Drag-n-drop feature implemented with React DnD
      </Descriptions.Item>

      <Descriptions.Item label="Code">
        Here is{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Evgenii-Nazarov/calories_app"
        >
          a link to github
        </a>
      </Descriptions.Item>
    </Descriptions>
  );
};

export default About;
