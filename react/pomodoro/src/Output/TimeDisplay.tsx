import React, { useEffect } from "react";
import { TimeLeft, State } from "../store/State";
import { connect } from "react-redux";
import { secondPassed } from "../store/Action";

type TimeDisplayProps = {
  secondPassed: () => void;
  started: boolean;
} & TimeLeft;

const TimeDisplay = (props: TimeDisplayProps) => {
  useEffect(() => {
    const interval = setTimeout(props.secondPassed, 1000);
    return () => clearTimeout(interval);
  });
  const precedeZero = (t: number) => (t.toString().length === 1 ? "0" : "") + t;
  const minutes = Math.floor(props.secondsLeft / 60);
  return (
    <div id="time-left">
      {precedeZero(minutes) +
        ":" +
        precedeZero(props.secondsLeft - minutes * 60)}
    </div>
  );
};

export default connect(
  ({ secondsLeft, started }: State) => ({ secondsLeft, started }),
  { secondPassed }
)(TimeDisplay);
