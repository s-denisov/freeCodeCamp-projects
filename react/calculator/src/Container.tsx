import React from "react";
import { NumButton, OpButton, EvalButton, ClearButton } from "./CalcButton";
import Display from "./Display";
import { toWords } from "number-to-words";

const Container = () => {
  const gridTemplateAreas = `
    "display display display display"
    "clear   clear   divide  multiply" 
    "seven   eight   nine    subtract"
    "four    five    six     add"
    "one     two     three   equals"
    "zero    zero    decimal equals"`;
  const style = {
    display: "grid",
    gridTemplateAreas,
    gridTemplateColumns: "repeat(4, 100px)",
    gridTemplateRows: "repeat(6, 100px)"
  };
  const numbers = [...Array(10).keys()];
  return (
    <div id="container" style={style}>
      <Display />
      {numbers.map(x => (<NumButton key={x} text={x.toString()} areaName={toWords(x)} />))}
      <NumButton text="." areaName="decimal" />
      <OpButton text="+" areaName="add" />
      <OpButton text="-" areaName="subtract" />
      <OpButton text="*" areaName="multiply" />
      <OpButton text="/" areaName="divide" />
      <EvalButton text="=" areaName="equals" />
      <ClearButton text="AC" areaName="clear" />
    </div>
  );
};

export default Container;
