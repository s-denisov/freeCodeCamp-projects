import React from "react";
import { State } from "./store";
import { connect } from "react-redux";

const Display = (props: State) => {
  const toDisplay =
    props.first.join("") +
    (props.operator || "") +
    (props.second === undefined ? "" : props.second.join(""));
  return <div id="display">{toDisplay}</div>;
};

export default connect(
  (x: State) => x,
  null
)(Display);
