import React from "react";
import jsx from "./jsx.json";
import { Divider } from "antd";

export default props => {
  return (
    <div>
      {jsx.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <Divider />
            <mark key="1" style={{ color: "red" }}>
              {item.title}
            </mark>
            <main key="2">
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
