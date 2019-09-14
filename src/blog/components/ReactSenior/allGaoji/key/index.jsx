import React from "react";
import key from "./key.json";
// 引入jsx的json文件
import { Divider } from "antd";
// 分割线
export default props => {
  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        <a href="https://seniorcitizens-1709.github.io/.github.io/build/#ReactSenior">
          返回
        </a>
      </div>
      {/* 返回按钮 */}
      {/* 循环数据 */}
      {key.map((item, index) => {
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
