import React from "react";
import state from "./state.json";
// 引入state的json文件
import { Divider } from "antd";
// 分割线
export default props => {
  return (
    <div>
      {/* 循环拿到的数据 */}
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
      {state.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <Divider />
            <mark key="1">{item.title}</mark>
            {/* 标题 */}
            <main key="2">
              {/* 循环json小数组拿每一项的内容 */}
              {item.cont.map((item, index) => {
                return <p key={index}>{item.p}</p>;
              })}
            </main>
          </React.Fragment>
        );
      })}
    </div>
  );
};
