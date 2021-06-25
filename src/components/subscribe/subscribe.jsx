import React, { Component } from "react";
import { Card, Input } from "antd";
const { Search } = Input;
const onSearch = (value) => console.log(value);
export class Subscribe extends Component {
  render() {
    return (
      <div>
        <Card
          title="邮件订阅"
          bordered={false}
          style={{ border: "1px solid red" }}
        >
          <Search
            placeholder="your@email.com"
            allowClear
            enterButton="Search"
            size="middle"
            onSearch={onSearch}
          />
        </Card>
      </div>
    );
  }
}

export default Subscribe;
