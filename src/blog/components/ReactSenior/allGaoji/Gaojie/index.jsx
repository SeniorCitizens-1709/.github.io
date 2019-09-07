import React from "react";
import gaojie from "./gaojie.json";
import { Divider } from "antd";

export default props => {
  return (
    <div>
      {gaojie.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <Divider />
            <mark key="1">{item.title}</mark>
            <main key="2">
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
