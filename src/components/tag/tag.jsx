import React, { Component } from "react";
import { Card } from "antd";
import './tag.less';
export class Tag extends Component {
  render() {
    return (
      <Card
        id="tag"
        title="标签云"
        bordered={false}
      >
          <p><span>操作系统</span><i>9</i></p>
          <p><span>操作系统</span><i>9</i></p>
          <p><span>操作系统</span><i>9</i></p>
          <p><span>操作系统</span><i>9</i></p>
          <p><span>操作系统</span><i>9</i></p>
          <p><span>操作系统</span><i>9</i></p>
          <p><span>操作系统</span><i>9</i></p>
          <p><span>操作系统</span><i>9</i></p>
          <p><span>操作系统</span><i>9</i></p>
          <p><span>操作系统</span><i>9</i></p>
          <p><span>操作系统</span><i>9</i></p>
          <p><span>操作系统</span><i>9</i></p>
      </Card>
    );
  }
}

export default Tag;
