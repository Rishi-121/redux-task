import React from "react";
import MyScreen from "./MyScreen";
import ButtonGroup from "./ButtonGroup";

const LeftDownComponent = (props) => {
  return (
    <div className="container">
      <div
        className="col"
        style={{
          background: "#fc7500",
          borderRadius: "5px",
          margin: "5% 0",
        }}
      >
        <div className="row" style={{ padding: "5% 0 0 40%" }}>
          <MyScreen key={1} tech={props.tech} />
        </div>
        <div className="row" style={{ padding: "5% 0 10% 30%" }}>
          <ButtonGroup
            key={2}
            side="leftDown"
            technologies={["Button A", "Button B", "Button C"]}
          />
        </div>
      </div>
    </div>
  );
};

export default LeftDownComponent;
