import React from "react";
import state from "./state.json";
import { Divider } from "antd";

export default props => {
  return (
    <div>
      {state.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <Divider />
            <mark key="1">{item.title}</mark>
            <main key="2">
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
