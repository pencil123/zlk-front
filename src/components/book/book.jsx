import React, { Component } from "react";
import { Col } from "antd";
import "./book.less";

export class Book extends Component {
  render() {
    return (
      <>
        <Col xxl={6} xl={6}  md={6} sm={12} xs={12} className="book">
          <img src="https://ziliaok.cn/uploads/jenkins2quanweizhinan/main.jpg" alt="123"></img>
          <span>Jenkins2 权威指南</span>
          <i>【美】布伦特·莱斯特（Brent Laster）,郝树伟等</i>
        </Col>
      </>
    );
  }
}

export default Book;
