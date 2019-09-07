import React from "react";
import gaojie from "./gaojie.json";
// 引入高阶函数的json文件
import { Divider } from "antd";
// 下划线
export default props => {
  return (
    <div>
      {/* 循环拿到的高阶函数的json */}
      {gaojie.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <Divider />
            {/* 分割线 */}
            <mark key="1">{item.title}</mark>
            {/* 每项的标题 */}
            <main key="2">
              {/* 每项的内容 */}
              <p key="2-1">{item.cont}</p>
              <p key="2-2">{item.cont1}</p>
              <p key="2-3">{item.cont2}</p>
            </main>
          </React.Fragment>
        );
      })}
    </div>
  );
};
