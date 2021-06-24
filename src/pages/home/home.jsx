import React, { Component } from "react";
import { Row, Col } from "antd";
import Book from "@/components/book/book";
import MyPagination from "@/components/pagination/pagination";
import "./home.less";

export class Home extends Component {
  render() {
    return (
      <Row justify="center">
        <Col xxl={15} xl={19} className="contentContainer">
          <Row>
            <Book
              src="https://ziliaok.cn/uploads/jenkins2quanweizhinan/main.jpg"
              alt="123"
            />
            <Book
              src="https://ziliaok.cn/uploads/jenkins2quanweizhinan/main.jpg"
              alt="123"
            />
            <Book
              src="https://ziliaok.cn/uploads/jenkins2quanweizhinan/main.jpg"
              alt="123"
            />
            <Book
              src="https://ziliaok.cn/uploads/jenkins2quanweizhinan/main.jpg"
              alt="123"
            />
            <Book
              src="https://ziliaok.cn/uploads/jenkins2quanweizhinan/main.jpg"
              alt="123"
            />
            <Book
              src="https://ziliaok.cn/uploads/jenkins2quanweizhinan/main.jpg"
              alt="123"
            />
            <Book
              src="https://ziliaok.cn/uploads/jenkins2quanweizhinan/main.jpg"
              alt="123"
            />
            <Book
              src="https://ziliaok.cn/uploads/jenkins2quanweizhinan/main.jpg"
              alt="123"
            />
            <Book
              src="https://ziliaok.cn/uploads/jenkins2quanweizhinan/main.jpg"
              alt="123"
            />
            <Book
              src="https://ziliaok.cn/uploads/jenkins2quanweizhinan/main.jpg"
              alt="123"
            />
            <Book
              src="https://ziliaok.cn/uploads/jenkins2quanweizhinan/main.jpg"
              alt="123"
            />
            <Book
              src="https://ziliaok.cn/uploads/jenkins2quanweizhinan/main.jpg"
              alt="123"
            />
            <Book
              src="https://ziliaok.cn/uploads/jenkins2quanweizhinan/main.jpg"
              alt="123"
            />
            <Book
              src="https://ziliaok.cn/uploads/jenkins2quanweizhinan/main.jpg"
              alt="123"
            />
            <Book
              src="https://ziliaok.cn/uploads/jenkins2quanweizhinan/main.jpg"
              alt="123"
            />
            <Book
              src="https://ziliaok.cn/uploads/jenkins2quanweizhinan/main.jpg"
              alt="123"
            />
            <Book
              src="https://ziliaok.cn/uploads/jenkins2quanweizhinan/main.jpg"
              alt="123"
            />
            <Book
              src="https://ziliaok.cn/uploads/jenkins2quanweizhinan/main.jpg"
              alt="123"
            />
            <Book
              src="https://ziliaok.cn/uploads/jenkins2quanweizhinan/main.jpg"
              alt="123"
            />
            <Book
              src="https://ziliaok.cn/uploads/jenkins2quanweizhinan/main.jpg"
              alt="123"
            />
            <Book
              src="https://ziliaok.cn/uploads/jenkins2quanweizhinan/main.jpg"
              alt="123"
            />
            <Book
              src="https://ziliaok.cn/uploads/jenkins2quanweizhinan/main.jpg"
              alt="123"
            />
            <Book
              src="https://ziliaok.cn/uploads/jenkins2quanweizhinan/main.jpg"
              alt="123"
            />
            <Book
              src="https://ziliaok.cn/uploads/jenkins2quanweizhinan/main.jpg"
              alt="123"
            />
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
