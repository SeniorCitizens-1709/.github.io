import React from "react";
import topapi from "./top-api.json";
import { Divider } from "antd";
export default props => {
  console.log(topapi);
  return (
    <div style={{ width: "100%" }}>
      {topapi.map((item, index) => {
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
              {item.cont}
            </main>
            <Divider />
          </React.Fragment>
        );
      })}
    </div>
  );
};
