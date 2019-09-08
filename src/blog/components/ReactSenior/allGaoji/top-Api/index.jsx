import React from "react";
import topapi from "./top-api.json";
// 引入topapi的json文件
import { Divider } from "antd";

// 引入分割线
export default props => {
  // console.log(topapi);
  return (
    <div style={{ width: "100%" }}>
      <div style={{ marginBottom: "20px" }}>
        <a href="https://seniorcitizens-1709.github.io/.github.io/build/#ReactSenior">
          返回
        </a>
      </div>
      {/* 返回按钮 */}
      {topapi.map((item, index) => {
        // 循环每一项标题
        return (
          <React.Fragment key={index}>
            <mark key="1">{item.title}</mark>
            <main
              style={{
                marginTop: "10px",
                color: "#999",
                marginBottom: "30px"
              }}
              key="2"
            >
              {/* 循环内容 */}
              {item.cont}
            </main>
            <Divider />
          </React.Fragment>
        );
      })}
    </div>
  );
};
