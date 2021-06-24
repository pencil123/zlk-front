import React, { Component } from "react";
import { Layout, Row, Col, Menu  } from "antd";

import "./header.less";
const { Header } = Layout;
export class MyHeader extends Component {
  render() {
    return (
      <Header>
        <Row style={{ justifyContent: "center", alignItems: "center" }}>
          <Col className="header">
            <span>资料库</span>
            <i>信息技术电子资料分享下载</i>
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", alignItems: "center" }}>
          <Col xxl={15} xl={19} className="header_nav">
              <Menu theme="light" mode="horizontal" >
                  <Menu.Item>信息技术</Menu.Item>
                  <Menu.Item>经济学</Menu.Item>
                  <Menu.Item>有声小说</Menu.Item>
              </Menu>
          </Col>
        </Row>
      </Header>
    );
  }
}

export default MyHeader;
