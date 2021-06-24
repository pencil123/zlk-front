import React, { Component } from "react";
import { Layout, Row, Col } from "antd";
import MyNav from "../nav/nav";

import "./header.less";
const { Header } = Layout;
export class MyHeader extends Component {
  render() {
    return (
        <>
      <Header>
        <Row style={{ justifyContent: "center", alignItems: "center" }}>
          <Col className="header">
            <span>资料库</span>
            <i>信息技术电子资料分享下载</i>
          </Col>
        </Row>
      </Header>
      <MyNav />
      </>
    );
  }
}

export default MyHeader;
