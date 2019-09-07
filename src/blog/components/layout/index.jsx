import React from "react";
import { Layout, Menu, Icon } from "antd";

const { Header, Sider, Content } = Layout;

// 左侧一级导航的数据
const leftNav = [
  {
    iconType: "solution",
    text: "React概述",
    id: "ReactBase"
  },
  {
    iconType: "video-camera",
    text: "React初级(组件类型)",
    id: "ComponentType"
  },
  {
    iconType: "upload",
    text: "React高级",
    id: "ReactSenior"
  },
  {
    iconType: "upload",
    text: "第三方辅助应用",
    id:"third-plugins"
  }
];

export default class Mylayout extends React.Component {
  constructor() {
    super();
    this.state = {
      // 控制开展收起
      collapsed: false
    };
  }
  // 切换的方法
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  render() {
    // Layout：容器组件，包裹组件
    // Sider：侧边栏，放导航的
    // Header：头部组件
    // Menu：做折叠导航的
    // Content：内容展示组件
    return (
      <div>
        <Layout className="leftNav overallsituation-l-0">
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
              {
                leftNav.map((item, index) => {
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
              })
              }
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
      </div>
    );
  }
}
