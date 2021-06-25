import React, { Component } from "react";
import { Card, Avatar } from "antd";
const { Meta } = Card;

export class FirendLink extends Component {
  render() {
    return (
      <Card
        id="firendLink"
        title="友情链接"
        bordered={false}
        style={{ border: "1px solid red" }}
      >
        <Meta
          avatar={
            <Avatar src="https://ziliaok.cn/uploads/jenkins2quanweizhinan/main.jpg" />
          }
          title="Card title"
          description="This is the description"
        />
        <Meta
          avatar={
            <Avatar src="https://ziliaok.cn/uploads/jenkins2quanweizhinan/main.jpg" />
          }
          title="Card title"
          description="This is the description"
        />
        <Meta
          avatar={
            <Avatar src="https://ziliaok.cn/uploads/jenkins2quanweizhinan/main.jpg" />
          }
          title="Card title"
          description="This is the description"
        />
        <Meta
          avatar={
            <Avatar src="https://ziliaok.cn/uploads/jenkins2quanweizhinan/main.jpg" />
          }
          title="Card title"
          description="This is the description"
        />
        <Meta
          avatar={
            <Avatar src="https://ziliaok.cn/uploads/jenkins2quanweizhinan/main.jpg" />
          }
          title="Card title"
          description="This is the description"
        />
      </Card>
    );
  }
}

export default FirendLink;
