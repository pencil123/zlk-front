import React, { Component } from "react";
import { Row, Col } from "antd";
import MySider from "@/components/sider/sider";
import Book from "@/components/book/book";
import MyPagination from "@/components/pagination/pagination";
import "./home.less";

export class Home extends Component {
  render() {
    return (
      <Row justify="center">
        <Col xxl={15} xl={19} className="contentContainer">
          <Row>
            <Col xl={18}>
              <Row>
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
              </Row>
            </Col>
            <Col xl={6}>
                <MySider />
            </Col>
          </Row>
          <Row justify="center">
            <Col className="mypagination">
              <MyPagination />
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default Home;
