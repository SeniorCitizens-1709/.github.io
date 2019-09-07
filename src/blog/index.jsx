import React, { Component } from "react";
import Mylayout from "./components/layout";
// 引入React基础概述
import ReactBase from "./components/ReactBase";
import "antd/dist/antd.css";
// react组件分类
import ComponentType from "./components/componentType";
import ReactSenior from "./components/ReactSenior/allGaoji";
import Third from './components/ThirdPlugins'
export default class index extends Component {
  constructor() {
    super();
    this.state = {
      isCom: window.location.hash.slice(1) || "ReactBase"
    };

    window.onhashchange = () => {
      this.setState({
        isCom: window.location.hash.slice(1)
      });
    };
  }
  // 收听子组件传递数据
  getSonData = id => {
    window.location.hash = id;
  };
  // 渲染函数
  render() {
    let Dom = "";
    switch (this.state.isCom) {
      case "ReactBase":
        Dom = <ReactBase />;
        break;
      case "ComponentType":
        Dom = <ComponentType />;
        break;
      case "ReactSenior":
        Dom = <ReactSenior />;
        break;
        case "third-plugins":
        Dom = <Third />;
        break;
    }
    return <Mylayout getsondata={this.getSonData}>{Dom}</Mylayout>;
  }
}
