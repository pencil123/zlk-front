import React, { Component } from "react";
import { Col, Descriptions, Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import MyBreadcrumb from "../breadcrumb/breadcrumb";
import "./infotab.less";

export class infotab extends Component {
  render() {
    return (
      <>
        <Col span={24} style={{ margin: "4px 8px" }}>
          <MyBreadcrumb />
        </Col>
        <Col span={24} className="infotab">
          <div className="info_left">
            <img
              src="https://ziliaok.cn/uploads/dockerrongqiyurongqiyun/main.jpg"
              alt="123"
            />
          </div>
          <div className="info_right">
            <Descriptions
              title="Docker 容器与容器云"
              bordered
              column={1}
              size="small"
            >
              <Descriptions.Item label="标题">
                Docker 容器与容器云
              </Descriptions.Item>
              <Descriptions.Item label="作者">
                浙江大学SEL实验室
              </Descriptions.Item>
              <Descriptions.Item label="出版社">
                人民邮电出版社
              </Descriptions.Item>
              <Descriptions.Item label="关键词">
                Docker,Docker容器,容器云,kubernetes,Docker 容器与容
              </Descriptions.Item>
            </Descriptions>
            <div className="download">
              <Button
                type="primary"
                shape="round"
                icon={<DownloadOutlined />}
                size="large"
              >
                Download
              </Button>
            </div>
          </div>
        </Col>
      </>
    );
  }
}

export default infotab;
