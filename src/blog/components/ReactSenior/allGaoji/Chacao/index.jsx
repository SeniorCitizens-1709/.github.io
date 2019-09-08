import React from "react";
// antd的分割线
import { Divider } from "antd";
// react高级之插槽页
export default props => {
  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        <a href="http://localhost:3000/#ReactSenior">返回</a>
      </div>
      {/* 返回按钮 */}

      <mark>
        插槽：父组件引入子组件的地方采用双标签，在里面写一些结构，在对应子组件里直接用props.children接收即可渲染到页面，这叫隐式渲染也就是react的插槽
        <main style={{ color: "red" }}>举例说明：</main>
        {/* 举例的父组件图片 */}
        <img
          style={{ width: "100%", height: "200px" }}
          src={require("./img/bs-004-fu.png")}
          alt=""
        />
        <Divider />
        <Divider />
        <Divider />
        {/* 三个分割线 */}
        <img
          // 举例的子组件图片
          style={{ width: "100%", height: "200px" }}
          src={require("./img/bs-004-zi.png")}
          alt=""
        />
      </mark>
    </div>
  );
};
