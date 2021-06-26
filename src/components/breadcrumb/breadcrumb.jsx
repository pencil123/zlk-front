import React, { Component } from "react";
import { Breadcrumb } from "antd";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import "./breadcrumb.less";

export class MyBreadcrumb extends Component {
  render() {
    return (
      <div className="breadCrumb">
        <Breadcrumb>
          <Breadcrumb.Item href="/">
            <HomeOutlined />
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/info">
            <UserOutlined />
            <span>有声小说</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item>东北诡仙录</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    );
  }
}

export default MyBreadcrumb;
