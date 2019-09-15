import React from "react";
import { Layout, Menu, Icon } from "antd";
import "antd/dist/antd.css";
import { message } from "antd";
const { Header, Sider, Content } = Layout;

// 左侧一级导航的数据
const leftNav = [
  {
    iconType: "solution",
    text: "React概述",
    id: "ReactBase",
    key: "0"
  },
  {
    iconType: "video-camera",
    text: "React初级",
    id: "ComponentType",
    key: "1"
  },
  {
    iconType: "upload",
    text: "React高级",
    id: "ReactSenior",
    key: "2"
  },
  {
    iconType: "pie-chart",
    text: "React插件",
    id: "third-plugins",
    key: "3"
  },
  {
    iconType: "upload",
    text: "问卷调差",
    id: "Questionnaire",
    key: "4"
  }
];

export default class Mylayout extends React.Component {
  constructor() {
    super();
    this.state = {
      // 控制开展收起
      collapsed: false,
      isCom: window.location.hash.slice(1),
      user: JSON.parse(sessionStorage.getItem("user")).user || ""
    };
  }
  // 切换的方法
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  componentDidMount() {
    if (!this.state.user) {
      message.error("您还未登录，请前往登录");
      this.props.getsondata("Login");
    }
  }
  render() {
    // Layout：容器组件，包裹组件
    // Sider：侧边栏，放导航的
    // Header：头部组件
    // Menu：做折叠导航的
    // Content：内容展示组件

    // 获取当前页面在leftNav数据中的下标
    let index = leftNav.indexOf(
      leftNav.find(item => item.id === this.state.isCom)
    );

    return (
      <Layout className="leftNav overallsituation-l-0">
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <div style={{ height: "50px", color: "#fff", lineHeight: "50px" }}>
            欢迎您：<span style={{ color: "red" }}>{this.state.user}</span>
          </div>

          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[index + "" || "0"]}
          >
            {leftNav.map((item, index) => {
              return (
                <Menu.Item
                  key={index}
                  onClick={() => {
                    this.props.getsondata(item.id);
                  }}
                >
                  <Icon type={item.iconType} />
                  <span>{item.text}</span>
                </Menu.Item>
              );
            })}
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.toggle}
            />
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              background: "#fff"
            }}
            className="content-gao"
          >
            {/* 隐式渲染进来的组件 */}
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}
