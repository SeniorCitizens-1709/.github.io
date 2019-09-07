import React, { Component } from "react";
// react高级
import { Card } from "antd";
import TopApi from "./top-Api";
import Jsx from "./Jsx";
import Gaojie from "./Gaojie";
import Life from "./Life";
import State from "./State";
import Chacao from "./Chacao";
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
export default class ReactSenior extends Component {
  constructor() {
    super();
    this.state = {
      isCom: window.location.hash.slice(1)
    };

    window.onhashchange = () => {
      this.setState({
        isCom: window.location.hash.slice(1)
      });
    };
  }
  getSonData = idx => {
    window.location.hash = Gaoji[idx].route;
  };
  render() {
    console.log(this.state.isCom);
    let Dom = "";
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
    return (
      <div className="gaoji-bigbox-bs-004">
        {this.state.isCom == "ReactSenior" ? (
          Gaoji.map((item, index) => {
            return (
              <Card
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
          <>{Dom}</>
        )}
      </div>
    );
  }
}
