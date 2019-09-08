import React, { Component } from "react";
// react高级
import { Card } from "antd";
// 引入 card插件
import TopApi from "./top-Api";
import Jsx from "./Jsx";
import Gaojie from "./Gaojie";
import Life from "./Life";
import State from "./State";
import Chacao from "./Chacao";
// 引入每一个标题导航的跳转模块
import { message } from "antd";
// 引入antd的提示
import "./index.scss";

const Gaoji = [
  {
    title: "顶级Api",
    cont: "对顶级Api的详解",
    route: "ReactSenior/Top-Api"
  },
  {
    title: "Jsx",
    cont: "对Jsx的详解",
    route: "ReactSenior/Top-Jsx"
  },
  {
    title: "高阶组件",
    cont: "对高阶组件的详解",
    route: "ReactSenior/High-order-component"
  },
  {
    title: "生命周期",
    cont: "对生命周期的详解",
    route: "ReactSenior/life"
  },
  {
    title: "state状态",
    cont: "对状态state以及修改状态setState的详解",
    route: "ReactSenior/state"
  },
  {
    title: "插槽",
    cont: "对插槽的详解",
    route: "ReactSenior/chacao"
  }
];
// 设置每一项的子路由

export default class ReactSenior extends Component {
  constructor() {
    super();
    this.state = {
      isCom: window.location.hash.slice(1)
      // 设置一个拿到的浏览器hash后缀并赋值
    };

    window.onhashchange = () => {
      // 拿到并监听浏览器的hash
      this.setState({
        // 监听值发生改变就更改state赋的值
        isCom: window.location.hash.slice(1)
      });
    };
  }
  getSonData = idx => {
    // 设置每一项的浏览器hash
    window.location.hash = Gaoji[idx].route;
  };
  componentDidMount() {
    // 加载完弹antd弹窗
    message.success("欢迎来到思博的部分~🤣🤣", 10);
  }
  render() {
    // console.log(this.state.isCom);
    let Dom = "";
    // 声明个空值用来赋组件
    switch (this.state.isCom) {
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
    // 根据条件循环，不同的子路由将Dom渲染为当前条件组件
    return (
      <div className="gaoji-bigbox-bs-004">
        {/* 给个判断，如果是ReactSenior就显示父级模块（六个导航模块） */}
        {this.state.isCom == "ReactSenior" ? (
          Gaoji.map((item, index) => {
            return (
              <Card
                // 父级模块  六个导航模块
                key={index}
                title={item.title}
                onClick={() => {
                  this.getSonData(index);
                }}
                style={{ width: 400, marginTop: 30 }}
              >
                <p>{item.cont}</p>
              </Card>
            );
          })
        ) : (
            // 否则根据当前switch循环条件渲染dom
            <>{Dom}</>
          )}
      </div>
    );
  }
}
