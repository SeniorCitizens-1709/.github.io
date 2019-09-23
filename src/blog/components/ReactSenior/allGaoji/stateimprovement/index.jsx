import React from "react";
import jsx from "./jsx.json";
// 引入jsx的json文件
import { Divider } from "antd";
// 分割线

export default props => {
  return (
    <div>
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
      {/* 循环数据 */}
      {jsx.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <Divider />
            <mark key="1" style={{ color: "red" }}>
              {item.title}
              {/* 循环标题 */}
            </mark>
            <main key="2">
              {/* 循环json里的小数组也就是内容 */}
              {item.cont.map((item, index) => {
                return <p key={index}>{item.p1}</p>;
              })}
            </main>
          </React.Fragment>
        );
      })}
    </div>
  );
};
