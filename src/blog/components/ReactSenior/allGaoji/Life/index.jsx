import React from "react";
import { Divider } from "antd";

import life from "./life.json";
export default props => {
  return (
    <div style={{ width: "100%" }}>
      <li>
        某个事件（事务）成立时候触发的函数
        一个组件完整的生命周期包含实例化阶段、更新活动阶段、销毁阶段三个阶段
      </li>
      {life.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <Divider />

            <mark key="1" style={{ marginTop: "20px" }}>
              {item.life}
            </mark>
            <main key="2">{item.cont}</main>
          </React.Fragment>
        );
      })}
    </div>
  );
};
