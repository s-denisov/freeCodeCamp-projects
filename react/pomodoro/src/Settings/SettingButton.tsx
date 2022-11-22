import React from "react";
import { connect } from "react-redux";
import {
  incrementSession,
  decrementSession,
  decrementBreak,
  incrementBreak
} from "../store";

export type ButtonProps = {
  value: string;
  id: string;
  action: () => void;
};

const SettingButton: React.FC<ButtonProps> = props => {
  return (
    <input
      id={props.id}
      className="setting-button"
      type="button"
      value={props.value}
      onClick={props.action}
    />
  );
};

const createButton = (value: string, id: string, action: () => void) =>
  connect(
    _ => ({
      value,
      id
    }),
    { action }
  )(SettingButton);

export const IncSession = createButton(
  "+",
  "session-increment",
  incrementSession
);
export const DecSession = createButton(
  "-",
  "session-decrement",
  decrementSession
);
export const IncBreak = createButton("+", "break-increment", incrementBreak);
export const DecBreak = createButton("-", "break-decrement", decrementBreak);
