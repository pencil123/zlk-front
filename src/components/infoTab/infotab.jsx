import React, { Component } from "react";
import { Row, Col, Descriptions, Button, Image } from "antd";
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
        <Col span={24}>
          <Row className="infotab">
            <Col xxl={8} xl={8} lg={8} md={8} sm={8}>
              <div className="info_left">
                <img
                  src="https://ziliaok.cn/uploads/dockerrongqiyurongqiyun/main.jpg"
                  alt="123"
                />
              </div>
            </Col>
            <Col xxl={16} xl={16} lg={16} md={16} sm={16}>
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
                    下载地址
                  </Button>
                </div>
                <div className="customer_wechat">
                  <span>
                    所有资源需使用<b>下载码</b>
                    下载；如没有【下载码】，请添加站长微信有偿索取。
                  </span>
                  <Image src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
                  <div style={{ clear: "both" }}></div>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
        <Col span={24} style={{ margin: "4px 8px" }}>
          <div
            style={{
              backgroundColor: "wheat",
              height: 40,
              lineHeight: "40px",
              paddingLeft: 8,
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            资源详情
          </div>
        </Col>
        <Col span={24} style={{ margin: "4px 8px" }}>
          <div
            style={{
              paddingLeft: 8,
              padding: 8,
              border: "1px solid wheat",
            }}
          >
            第1章 Jenkins 2简介 1 Jenkins 2是什么 2 Jenkinsfile 3 声明式流水线 5
            Blue Ocean界面 6 Jenkins 2的全新任务类型 7 做出转变的原因 10
            DevOps理念的转变 10 装配流水线 11 可恢复性 11 可配置性 11
            共享工作空间 11 专业知识 12 访问逻辑 12 流水线源管理 12 竞争 12
            迎接挑战 13 兼容性 13 流水线兼容性 13 插件兼容性 15 检查兼容性 20
            总结 21 第2章 基础知识 23 语法：脚本式流水线和声明式流水线 24
            如何选择脚本式语法和声明式语法 25
            系统（system）：主节点（master）、节点（node）、代理节点（agent）和执行器（executor）26
            主节点 27 节点 27 代理节点 27 执行器 28 创建节点 29
            结构：使用Jenkins DSL 31 节点 32 阶段 34 步骤 34
            支持环境：开发一个流水线脚本 36 创建一个流水线项目 36 编辑器 38
            使用代码片段生成器 39 运行一条流水线 43 回放 49 总结 52 第3章
            流水线执行流程 53 触发任务 53 在其他项目构建后构建 54 周期性构建 54
            使用GitHub钩子触发器进行GitSCM轮询 57 SCM轮询 57 静默期 58
            远程触发构建 58 用户输入 58 输入 59 参数 62 多个输入参数的返回值 68
            参数与声明式流水线 69 流程控制选项 74 超时（timeout） 74
            重试（retry） 76 睡眠（sleep） 76 等待直到（waitUntil） 76 处理并发
            78 使用lock步骤对资源加锁 78 使用milestone来控制并发构建 80
            在多分支流水线中限制并发 82 并行地运行任务 82 有条件的执行功能 92
            构建后处理 94 脚本式流水线构建后处理 94 声明式流水线与构建后处理 96
            总结 97 第4章 通知与报告 99 通知 99 电子邮件 100 协作服务 110 报告
            120 发布HTML报告 120 总结 123 第5章 访问与安全 125 安全加固Jenkins
            125 启用安全性 126 其他全局安全配置 129 Jenkins中的凭证 133 凭证范围
            134 凭证域 135 凭证提供者 135 凭证存储 136 管理凭证 136
            选择凭证提供者 136 选择凭证类型 137 通过提供者指定凭证类型 138
            创建和管理凭证 139 上下文链接 141 添加一个新域或者凭证 141
            使用新域和凭证 144 高级凭证：基于角色的访问权限 145 基本用途 146
            管理角色 147 分配角色 152 角色策略宏 155 在流水线中使用凭证 157
            用户名和密码 157 SSH密钥 158 令牌凭证 159 控制脚本安全性 160
            脚本检查 160 脚本批准 161 Groovy沙箱 162 Jenkins凭证与Vault配合使用
            164 方法 164 安装 165 创建一个策略 165 身份验证 166
            在Jenkins中使用Vault 168 总结 171 第6章 扩展你的流水线 173
            可信库和不可信库 173 内部库与外部库 174 内部库 174 外部库 176
            从代码仓库获取库 178 Modern SCM 178 Legacy SCM 178
            在流水线脚本中使用库 179 从源码版本控制中自动下载库 180
            加载库到脚本中 180 Jenkins项目中的库范围 182 库结构 183 样本库例程
            183 共享库代码的结构 184 使用第三方库 195 直接加载代码 196
            从外部SCM加载代码 196 回放外部代码和库 198 深入研究可信与不可信代码
            200 总结 203 第7章 声明式流水线 205 动机 206 不直观 206 掌握Groovy
            206 其他必需的装配 206 结构 207 代码块 208 部分 208 指令 209 步骤
            209 条件 210 构建代码块 210 Pipeline 211 Agent 212 Environment 215
            Tools 216 Options 219 Triggers 222 Parameters 224 Libraries 227
            Stages 228 Post 231 处理非声明式的代码 232 检查你的插件 233
            创建一个共享库 233 在pipeline代码块之外放置代码 233 script语句 234
            在一个阶段中使用 parallel234 脚本检查与错误报告 235
            声明式流水线与Blue Ocean接口 238 总结 238 第8章 理解项目类型 241
            通用项目选项 241 基础设置 241 源码管理 247 构建触发器 249 构建环境
            256 构建 266 构建后操作 266 项目类型 266 自由风格类型项目 267
            Maven项目类型 267 流水线项目类型 270 外部任务项目类型 272
            多配置项目类型 275 Ivy项目 280 文件夹 282 多分支流水线项目 287
            GitHub组织项目 292 Bitbucket团队/项目 296 总结 299 第9章 Blue
            Ocean用户界面 301 第一部分：管理已有的流水线 302 主界面 302
            项目详情页面 305 运行页面 316 第二部分：使用Blue Ocean编辑器 325
            不依赖现有Jenkinsfile创建一个全新的流水线 326 使用编辑器 330
            编辑已有的流水线 340 导入和编辑已有的流水线 344
            使用非GitHub仓库支持流水线 354 总结 356 第10章 转换 357 通用的准备
            358 逻辑和准确性 358 项目类型 358 系统 358 访问 358 全局配置 359
            插件 359 共享库 359 将自由风格类型的流水线转换为脚本式流水线 360
            源码 364 编译 369 单元测试 373 集成测试 377 迁移流水线接下来的部分
            380 从Jenkins流水线项目转换为Jenkinsfile 385 方法 388 最后的步骤 395
            从脚本式流水线转换为声明式流水线 397 样本流水线 397 转换 399
            完成转换 402 可用于转换的通用指南 403 总结 405 第11章
            操作系统环境集成（shell、工作空间、环境和文件） 407 使用shell的步骤
            407 sh步骤 408 bat步骤 413 powershell步骤 414 使用环境变量 415
            withEnv步骤 416 使用工作空间 418 创建自定义工作空间 418 清理工作空间
            420 文件和目录步骤 422 使用文件 422 使用目录 423
            使用文件和目录的更多操作 424 总结 425 第12章 集成分析工具 427
            SonarQube调查 427 使用个人规则 428 质量门和配置文件 432 扫描程序 434
            将SonarQube与Jenkins一起使用 434 全局配置 434
            在自由风格类型项目中使用SonarQube 436 在流水线项目中使用SonarQube
            436 利用SonarQube分析的结果 437 在Jenkins中集成SonarQube的输出 441
            代码覆盖率：与JaCoCo集成 442 关于JaCoCo 442 JaCoCo与流水线集成 443
            在Jenkins中集成JaCoCo的输出 445 总结 446 第13章 集成制品管理 447
            发布和获取制品 447 安装和全局配置 448
            在脚本式流水线中使用Artifactory 449 执行其他任务 454
            下载指定文件到指定目录 454 上传指定文件到指定路径 454
            设置构建保留策略 455 构建提升 455 声明式流水线集成 455
            Artifactory与Jenkins输出集成 456 制品归档和指纹 457 总结 462 第14章
            集成容器 465 配置成一个云 465 全局配置 466
            使用Docker镜像作为代理节点 469 在流水线中使用云镜像 473
            在声明式流水线中动态创建的代理节点 477 Docker流水线全局变量 480
            全局变量 480 Docker应用全局变量方法 481 Docker镜像全局变量方法 487
            Docker容器全局变量方法 491 通过shell运行Docker 492 总结 493 第15章
            其他接口 495 使用命令行接口 496 直接使用SSH接口 496 使用CLI客户端
            499 使用Jenkins REST API 501 过滤结果 502 启动构建 504
            使用脚本控制台 506 总结 508 第16章 故障处理 509 深入流水线步骤 509
            处理序列化错误 512 连续传递风格 513 序列化流水线 513
            NotSerializableException 513 处理非序列化错误 514
            识别引发错误的脚本行 517 处理流水线异常 518
            在声明式流水线中使用非声明式代码 518 未授权代码（脚本和方法授权）
            522 不支持的操作 523 系统日志 523 时间戳 525 流水线耐用性设置 526
            总结 527 关于作者 529 封面介绍 529 关于译者 530
          </div>
        </Col>
      </>
    );
  }
}

export default infotab;
