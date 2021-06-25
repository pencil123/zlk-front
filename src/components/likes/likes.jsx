import React, { Component } from "react";
import { Card,Avatar  } from "antd";
import "./likes.less";
const { Meta } = Card;
export class Likes extends Component {
  render() {
    return (
      <Card id="likes"
        title="猜你喜欢"
        bordered={false}
        style={{ border: "1px solid red" }}
      >
        <Meta avatar={
              <Avatar src="https://ziliaok.cn/uploads/jenkins2quanweizhinan/main.jpg" />
            } title="Card title" description="This is the description" />
        <Meta avatar={
              <Avatar src="https://ziliaok.cn/uploads/jenkins2quanweizhinan/main.jpg" />
            } title="Card title" description="This is the description" />
        <Meta avatar={
              <Avatar src="https://ziliaok.cn/uploads/jenkins2quanweizhinan/main.jpg" />
            } title="Card title" description="This is the description" />
        <Meta avatar={
              <Avatar src="https://ziliaok.cn/uploads/jenkins2quanweizhinan/main.jpg" />
            } title="Card title" description="This is the description" />
        <Meta avatar={
              <Avatar src="https://ziliaok.cn/uploads/jenkins2quanweizhinan/main.jpg" />
            } title="Card title" description="This is the description" />
        
      </Card>
    );
  }
}

export default Likes;
