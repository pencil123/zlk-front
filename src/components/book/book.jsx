import React, { Component } from "react";
import { Col } from "antd";
import "./book.less";

export class Book extends Component {
  render() {
    return (
      <>
        <Col xxl={4} xl={4} className="book">
          <img src={this.props.src} alt={this.props.alt}></img>
          <span>Jenkins2 权威指南</span>
          <i>【美】布伦特·莱斯特（Brent Laster）,郝树伟等</i>
        </Col>
      </>
    );
  }
}

export default Book;
