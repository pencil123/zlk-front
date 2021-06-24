import React, { Component } from 'react'
import {Row, Col, Menu  } from "antd";
import "./nav.less";

export class nav extends Component {
    render() {
        return (
        <Row style={{ justifyContent: "center", alignItems: "center",width:"100%",backgroundColor:"white"}} >
          <Col xxl={15} xl={19} className="nav">
              <Menu theme="light" mode="horizontal" >
                  <Menu.Item>信息技术</Menu.Item>
                  <Menu.Item>经济学</Menu.Item>
                  <Menu.Item>有声小说</Menu.Item>
              </Menu>
          </Col>
        </Row>
        )
    }
}

export default nav
