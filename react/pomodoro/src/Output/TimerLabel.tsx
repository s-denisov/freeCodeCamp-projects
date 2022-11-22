import React from "react";
import { connect } from "react-redux";
import { State } from "../store/State";

const TimerLabel = (props: { isBreak: boolean }) => (
  <div id="timer-label">{props.isBreak ? "Break" : "Session"}</div>
);

export default connect(({ isBreak }: State) => ({ isBreak }))(TimerLabel);
