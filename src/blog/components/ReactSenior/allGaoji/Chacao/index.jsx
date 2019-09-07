import React from "react";
import { Divider } from "antd";

export default props => {
  return (
    <div>
      <mark>
        插槽：父组件引入子组件的地方采用双标签，在里面写一些结构，在对应子组件里直接用props.children接收即可渲染到页面，这叫隐式渲染也就是react的插槽
        <main style={{ color: "red" }}>举例说明：</main>
        <img
          style={{ width: "100%", height: "200px" }}
          src={require("./img/bs-004-fu.png")}
          alt=""
        />
        <Divider />
        <Divider />
        <Divider />
        <img
          style={{ width: "100%", height: "200px" }}
          src={require("./img/bs-004-zi.png")}
          alt=""
        />
      </mark>
    </div>
  );
};
