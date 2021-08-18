import React from "react";
import LeftTopComponent from "./components/LeftTopComponent";
import LeftDownComponent from "./components/LeftDownComponent";
import RightTopComponent from "./components/RightTopComponent";
import RightDownComponent from "./components/RightDownComponent";
import { connect } from "react-redux";
import { handleClick } from "./redux";

const App = (props) => {
  return (
    <>
      <div
        style={{
          background: "#435368",
          width: "100vw",
          height: "100vh",
        }}
      >
        <div
          style={{
            display: "flex",
          }}
        >
          <div style={{ width: "50%" }}>
            <LeftTopComponent tech={props.lt} />
            <LeftDownComponent tech={props.ld} />
          </div>
          <div style={{ width: "50%" }}>
            <RightTopComponent tech={props.rt} />
            <RightDownComponent tech={props.rd} />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button onClick={() => props.handleClick("reset", null)}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    lt: state.leftTopTech,
    ld: state.leftDownTech,
    rt: state.rightTopTech,
    rd: state.rightDownTech,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: (type, tech) => dispatch(handleClick(type, tech)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
