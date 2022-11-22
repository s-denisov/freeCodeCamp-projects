import React from "react";
import { connect } from "react-redux";
import { startStop } from "../store/Action";
import { State } from "../store/State";

type StartProps = {
  startStop: () => void;
  started: boolean;
};

const StartButton = (props: StartProps) => {
  return (
    <input
      id="start_stop"
      type="button"
      onClick={props.startStop}
      value={props.started ? "Stop" : "Start"}
    />
  );
};

export default connect(
  ({ started }: State) => ({ started }),
  { startStop }
)(StartButton);
