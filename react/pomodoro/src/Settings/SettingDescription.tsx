import React from "react";
import { State } from "../store/State";
import { connect } from "react-redux";

type CounterProps = {
  count: number;
  id: string;
};

const SettingDescription = (props: CounterProps) => {
  return <div id={props.id}>{props.count}</div>;
};

export const SessionDescription = connect(({ sessionLength }: State) => ({
  id: "session-length",
  count: sessionLength
}))(SettingDescription);

export const BreakDescription = connect(({ breakLength }: State) => ({
  id: "break-length",
  count: breakLength
}))(SettingDescription);
