import React, { Component } from "react";
import { Card, Input, Space } from "antd";
const { Search } = Input;
const onSearch = (value) => console.log(value);
export class Subscribe extends Component {
  render() {
    return (
      <div style={{border:"1px solid red"}}>
        <Card title="邮件订阅" bordered={false}>
          <Search
            placeholder="input search text"
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
