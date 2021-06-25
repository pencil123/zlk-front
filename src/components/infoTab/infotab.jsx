import React, { Component } from "react";
import { Col, Descriptions } from "antd";
import "./infotab.less";

export class infotab extends Component {
  render() {
    return (
      <Col span={24} className="infotab">
        <div>
          <img
            src="https://ziliaok.cn/uploads/dockerrongqiyurongqiyun/main.jpg"
            alt="123"
          />
        </div>
        <div>
          <Descriptions title="User Info" bordered column={1}>
            <Descriptions.Item label="标题" >Docker 容器与容器云</Descriptions.Item>
            <Descriptions.Item label="作者" >浙江大学SEL实验室</Descriptions.Item>
            <Descriptions.Item label="出版社" >人民邮电出版社</Descriptions.Item>
            <Descriptions.Item label="关键词" >Docker,Docker容器,容器云,kubernetes,Docker 容器与容器云</Descriptions.Item>
          </Descriptions>
        </div>
      </Col>
    );
  }
}

export default infotab;
