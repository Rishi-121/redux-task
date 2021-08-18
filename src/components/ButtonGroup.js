import React from "react";
import { connect } from "react-redux";
import { handleClick } from "../redux";

const ButtonGroup = (props) => {
  return (
    <div>
      {props.technologies.map((tech, i) => (
        <button
          key={`btn-${i}`}
          onClick={() => props.handleClick(props.side, tech)}
        >
          {tech}
        </button>
      ))}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: (type, tech) => dispatch(handleClick(type, tech)),
  };
};

export default connect(null, mapDispatchToProps)(ButtonGroup);
