import { createStore } from "redux";

export type ButtonEvent = React.MouseEvent<HTMLInputElement, MouseEvent>;

type Operator = "+" | "-" | "*" | "/";
const operatorToFunction = {
  "+": (x: number, y: number) => x + y,
  "-": (x: number, y: number) => x - y,
  "*": (x: number, y: number) => x * y,
  "/": (x: number, y: number) => x / y
};

type CalcDigit = Digit | "-";
const toCalcs = (n: number) => n.toString().split("") as CalcDigit[];
const fromCalcs = (arr: CalcDigit[]) => parseFloat(arr.join(""));

export type State = {
  readonly first: CalcDigit[];
  readonly operator?: Operator;
  readonly second?: CalcDigit[];
};

const CLEAR = "CLEAR";
type CLEAR = typeof CLEAR;
type Clear = { type: CLEAR };
export const clear = () => ({
  type: CLEAR
});

const SET_OPERATOR = "SET_OPERATOR";
type SET_OPERATOR = typeof SET_OPERATOR;
type SetOperator = {
  type: SET_OPERATOR;
  newOperator: Operator;
};
export const setOperator = (e: ButtonEvent) => ({
  type: SET_OPERATOR,
  newOperator: (e.target as HTMLInputElement).value
});

type Digit = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | ".";
const ADD_DIGIT = "ADD_DIGIT";
type ADD_DIGIT = typeof ADD_DIGIT;
type AddDigit = {
  type: ADD_DIGIT;
  nextDigit: Digit;
};
export const addDigit = (e: ButtonEvent) => ({
  type: ADD_DIGIT,
  nextDigit: (e.target as HTMLInputElement).value
});

const EVALUATE = "EVALUATE";
type EVALUATE = typeof EVALUATE;
type Evaluate = { type: Evaluate };
export const evaluate = () => ({
  type: EVALUATE
});

const initialState: State = {
  first: ["0"]
};

type Action = Clear | SetOperator | AddDigit | Evaluate;

const reducer = (state = initialState, action: Action): State => {
  const evalAll = () =>
    toCalcs(
      operatorToFunction[state.operator!](
        fromCalcs(state.first),
        fromCalcs(state.second!)
      )
    );
  switch (action.type) {
    case CLEAR:
      return initialState;
    case SET_OPERATOR:
      const cond = action.newOperator === "-" && state.operator !== undefined;
      return state.second === undefined || Number.isNaN(fromCalcs(state.second))
        ? {
            first: state.first,
            operator: cond ? state.operator : action.newOperator,
            second: cond ? ["-"] : undefined
          }
        : {
            first: evalAll(),
            operator: action.newOperator
          };
    case EVALUATE:
      return state.operator === undefined ? state : { first: evalAll() };
    case ADD_DIGIT:
      const add = (x: CalcDigit[] | undefined) =>
        (x === undefined || x[0] === "0" ? [] : x).concat(
          x !== undefined && x.includes(".") && action.nextDigit === "."
            ? []
            : action.nextDigit
        );
      const hasOperator = state.operator !== undefined;
      return {
        first: hasOperator ? state.first : add(state.first),
        operator: state.operator,
        second: hasOperator ? add(state.second!) : undefined
      };
    default:
      return state;
  }
};

export default createStore(reducer);
