import React, { Component } from "react";
import { Card, Input } from "antd";
const { Search } = Input;
const onSearch = (value) => console.log(value);

export class MySearch extends Component {
  render() {
    return (
      <div>
        <Card
          title="搜索"
          bordered={false}
          style={{ border: "1px solid red" }}
        >
          <Search
            placeholder="资源名称"
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

export default MySearch;
