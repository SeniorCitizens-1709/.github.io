import React, { Component } from "react";
import Mylayout from "./components/layout";
// 引入React基础概述
import "antd/dist/antd.css";
// react组件分类
import ReactBase from "./components/ReactBase";
import ComponentType from "./components/componentType";
import ReactSenior from "./components/ReactSenior/allGaoji";
import Third from "./components/ThirdPlugins";
import Questionnaire from "./components/Questionnaire";

// ······························································
// 这里是思博页面的子路由组件
import TopApi from "./components/ReactSenior/allGaoji/top-Api";
import Jsx from "./components/ReactSenior/allGaoji/Jsx";
import Gaojie from "./components/ReactSenior/allGaoji/Gaojie";
import Life from "./components/ReactSenior/allGaoji/Life";
import State from "./components/ReactSenior/allGaoji/State";
import Chacao from "./components/ReactSenior/allGaoji/Chacao";
import Events from "./components/ReactSenior/allGaoji/events";
import Condition from "./components/ReactSenior/allGaoji/condition";
import Key from "./components/ReactSenior/allGaoji/key";
import Form from "./components/ReactSenior/allGaoji/form";

// ···································································
// 思博登/注册录页
import Login from "./components/login/login";
import Register from "./components/register/register";
// ···································································
export default class index extends Component {
  constructor() {
    super();
    this.state = {
      // 将获取到的hash值赋值给isCom
      isCom: window.location.hash.slice(1) || "Register"
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
  };
  // 渲染函数
  // 带/的是思博配的子路由

  render() {
    let Dom = "";
    // 声明一个dom作为接下来条件渲染的值
    switch (this.state.isCom) {
      case "Register":
        Dom = <Register getSonData={this.getSonData} />;
        break;
      case "Login":
        Dom = <Login getSonData={this.getSonData} />;
        break;
      case "ReactBase":
        Dom = <ReactBase />;
        break;
      case "ComponentType":
        Dom = <ComponentType />;
        break;
      case "Questionnaire":
        Dom = <Questionnaire />;
        break;
      // 根据hash做条件渲染
      case "ReactSenior":
        Dom = <ReactSenior a={this.getSonData} />;
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
      case "ReactSenior/events":
        Dom = <Events />;
        break;
      case "ReactSenior/condition":
        Dom = <Condition />;
        break;
      case "ReactSenior/key":
        Dom = <Key />;
        break;
      case "ReactSenior/form":
        Dom = <Form />;
        break;
      default:
    }
    return (
      <>
        {this.state.isCom === "Register" ? (
          <Register getSonData={this.getSonData} />
        ) : this.state.isCom === "Login" ? (
          <Login getSonData={this.getSonData} />
        ) : (
              <Mylayout getsondata={this.getSonData}>{Dom}</Mylayout>
            )}
      </>
    );
  }
}
