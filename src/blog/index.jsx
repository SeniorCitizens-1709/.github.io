import React, { Component } from "react";
import Mylayout from "./components/layout";
// 引入React基础概述
import "antd/dist/antd.css";
// react组件分类
import ReactBase from "./components/ReactBase";
import ComponentType from "./components/componentType";
import ReactSenior from "./components/ReactSenior/allGaoji";
import Third from "./components/ThirdPlugins";

// ······························································
// 这里是思博页面的子路由组件
import TopApi from "./components/ReactSenior/allGaoji/top-Api";
import Jsx from "./components/ReactSenior/allGaoji/Jsx";
import Gaojie from "./components/ReactSenior/allGaoji/Gaojie";
import Life from "./components/ReactSenior/allGaoji/Life";
import State from "./components/ReactSenior/allGaoji/State";
import Chacao from "./components/ReactSenior/allGaoji/Chacao";
// ···································································

export default class index extends Component {
  constructor() {
    super();
    this.state = {
      // 将获取到的hash值赋值给isCom
      isCom: window.location.hash.slice(1) || "ReactBase"
    };

    window.onhashchange = () => {
      // 获取并更改为当前hash值
      this.setState({
        isCom: window.location.hash.slice(1)
      });
    };
  }
  // 收听子组件传递数据
  getSonData = id => {
    window.location.hash = id;
    // 设置hash值
    console.log(id);
  };
  // 渲染函数
  // 带/的是思博配的子路由
  render() {
    let Dom = "";
    // 声明一个dom作为接下来条件渲染的值
    switch (this.state.isCom) {
      // 根据hash做条件渲染
      case "ReactBase":
        Dom = <ReactBase />;
        break;
      case "ComponentType":
        Dom = <ComponentType />;
        break;
      case "ReactSenior":
<<<<<<< HEAD
        Dom = <ReactSenior a={this.getSonData} />;
=======
        Dom = <ReactSenior ishash={1} />;
>>>>>>> decc17c5c4dfa8e304f63b10f9074d05eeb13c04
        break;
      case "third-plugins":
        Dom = <Third />;
        break;
      case "ReactSenior/Top-Api":
        Dom = <TopApi />;
        break;
      case "ReactSenior/Top-Jsx":
        Dom = <Jsx />;
        break;
      case "ReactSenior/High-order-component":
        Dom = <Gaojie />;
        break;
      case "ReactSenior/life":
        Dom = <Life />;
        break;
      case "ReactSenior/state":
        Dom = <State />;
        break;
      case "ReactSenior/chacao":
        Dom = <Chacao />;
        break;
    }
    return <Mylayout getsondata={this.getSonData}>{Dom}</Mylayout>;
  }
}
