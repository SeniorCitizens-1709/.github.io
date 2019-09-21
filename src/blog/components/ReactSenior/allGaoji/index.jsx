import React, { Component } from "react";
// react高级
import { Card } from "antd";
// 引入 card插件

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
  },
  {
    title: "事件",
    cont: "对事、防抖与节流的详解",
    route: "ReactSenior/events"
  },
  {
    title: "条件渲染 ",
    cont: "对事件、边界错误、添加默认属性的详解",
    route: "ReactSenior/condition"
  },
  {
    title: "key",
    cont: "对key的详解",
    route: "ReactSenior/key"
  },
  {
    title: "表单",
    cont: "对表单、受控组件和非受控组件的详解",
    route: "ReactSenior/form"
  },
  {
    title: "状态提升与protals使用",
    cont: "状态提升同步数据展示,protals详细使用",
    route: "ReactSenior/stateimprovement"
  },
  {
    title: "懒加载与组合模式",
    cont: "对性能优化：懒加载详细描述",
    route: "ReactSenior/lazyCombination"
  },
  {
    title: "上下文数据传递",
    cont: "对上下文详细描述使用",
    route: "ReactSenior/context"
  },
  {
    title: "Refs",
    cont: "对Refs详细描述与使用",
    route: "ReactSenior/refs"
  }
];
// 设置每一项的子路由

export default class ReactSenior extends Component {
  componentDidMount() {
    // 加载完弹antd弹窗
    message.success("欢迎来到思博的部分~🤣🤣", 1);
  }
  render() {
    // 根据条件循环，不同的子路由将Dom渲染为当前条件组件
    return (
      <div className="gaoji-bigbox-bs-004">
        {Gaoji.map((item, index) => {
          return (
            <Card
              // 父级模块  六个导航模块
              key={index}
              title={item.title}
              onClick={() => {
                this.props.a(item.route);
              }}
              style={{ width: 400, marginTop: 30 }}
            >
              <p>{item.cont}</p>
            </Card>
          );
        })}
      </div>
    );
  }
}
// 思博测试
// 思博测试
// 思博测试
// 思博测试
// 思博测试
