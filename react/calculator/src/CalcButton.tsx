import React from "react";
import { connect } from "react-redux";
import { addDigit, setOperator, ButtonEvent, evaluate, clear } from "./store";

type OnClick = (event: ButtonEvent) => void;
type ButtonProps = {
  text: string;
  areaName: string;
  onClick: OnClick;
};

const CalcButton = (props: ButtonProps) => {
  return (
    <input
      id={props.areaName}
      type="button"
      onClick={props.onClick}
      style={{ gridArea: props.areaName }}
      value={props.text}
    />
  );
};

const createButton = (fn: OnClick) =>
  connect(
    null,
    { onClick: fn }
  )(CalcButton);
export const NumButton = createButton(addDigit);
export const OpButton = createButton(setOperator);
export const EvalButton = createButton(evaluate);
export const ClearButton = createButton(clear);
