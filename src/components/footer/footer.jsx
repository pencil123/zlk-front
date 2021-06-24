import React, { Component } from "react";
import { Layout, Row, Col } from "antd";
import "./footer.less";
const { Footer } = Layout;

export class MyFooter extends Component {
  render() {
    return (
      <Footer style={{backgroundColor:"wheat",marginTop:30}}>
        <Row style={{ justifyContent: "center", alignItems: "center"}}>
          <Col className="footer">
            <span>本站所有资源均来自互联网，如有侵权，请联系站长删除！</span>
            <i>网站备案/许可证号：<a href="https://beian.miit.gov.cn/">鲁ICP备18001334号-4</a></i>
          </Col>
        </Row>
      </Footer>
    );
  }
}

export default MyFooter;
