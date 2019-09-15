import React from "react";
import { Divider } from "antd";
// 引入分割线
import life from "./life.json";
// 引入生命周期json文件
export default props => {
  return (
    <div style={{ width: "100%" }}>
      <div style={{ marginBottom: "20px" }}>
        <a
          onClick={() => {
            window.history.back();
          }}
        >
          返回
        </a>
      </div>
      {/* 返回按钮 */}
      <li>
        {/* 做了一个生命周期的简述 */}
        某个事件（事务）成立时候触发的函数
        一个组件完整的生命周期包含实例化阶段、更新活动阶段、销毁阶段三个阶段
      </li>
      {life.map((item, index) => {
        // 循环每一项
        return (
          <React.Fragment key={index}>
            <Divider />

            <mark key="1" style={{ marginTop: "20px" }}>
              {item.life}
              {/* 标题 */}
            </mark>
            {/* 内容 */}
            <main key="2">{item.cont}</main>
          </React.Fragment>
        );
      })}
    </div>
  );
};
