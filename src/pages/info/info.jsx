import React, { Component } from 'react'
import { Row, Col } from "antd";
import MySider from "@/components/sider/sider";
import InfoTab from "@/components/infoTab/infotab";

export class Info extends Component {
    render() {
        return (
      <Row justify="center">
        <Col xxl={15} xl={19} className="contentContainer">
          <Row>
            <Col xl={18}>
              <Row>
                  <InfoTab />
              </Row>
            </Col>
            <Col xl={6}>
              <MySider />
            </Col>
          </Row>
        </Col>
      </Row>
        )
    }
}

export default Info