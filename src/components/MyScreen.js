import React from "react";

const MyScreen = (props) => {
  return (
    <div
      style={{
        fontSize: "30px",
        color: "#ffffff",
        fontWeight: "900",
      }}
    >
      {props.tech}
    </div>
  );
};

export default MyScreen;
