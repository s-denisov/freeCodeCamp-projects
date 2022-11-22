import { createStore } from "redux";
import { State, initialState } from "./State";
import {
  Action,
  INCREMENT_SESSION,
  DECREMENT_SESSION,
  INCREMENT_BREAK,
  DECREMENT_BREAK,
  START_STOP,
  RESET,
  SECOND_PASSED
} from "./Action";

const reducer = (state = initialState, action: Action): State => {
  const change = (
    p: "sessionLength" | "breakLength",
    x: 0 | 1,
    y: 0 | 1,
    f: (a: number, b: number) => number
  ) =>
    (state[p] >= 60 && f(1, 1) === 2) || (state[p] <= 1 && f(1, 1) === 0)
      ? state
      : {
          ...state,
          [p]: f(state[p], 1),
          secondsLeft: f(state.secondsLeft, 60)
        };
  switch (action.type) {
    case INCREMENT_SESSION:
      return change("sessionLength", 0, 1, (x, y) => x + y);
    case DECREMENT_SESSION:
      return change("sessionLength", 0, 1, (x, y) => x - y);
    case INCREMENT_BREAK:
      return change("breakLength", 1, 0, (x, y) => x + y);
    case DECREMENT_BREAK:
      return change("breakLength", 1, 0, (x, y) => x - y);
    case START_STOP:
      return { ...state, started: !state.started };
    case SECOND_PASSED:
      const applySwitch = {
        ...state,
        isBreak: !state.isBreak,
        firstTime: false,
        secondsLeft: state[state.isBreak ? "sessionLength" : "breakLength"] * 60
      };
      const secondsLeft = state.secondsLeft - (state.started ? 1 : 0);
      return secondsLeft < 0
        ? applySwitch
        : {
            ...state,
            switching: secondsLeft === 0,
            secondsLeft
          };
    case RESET:
      return { ...initialState, reset: state.reset + 1 };
    default:
      return state;
  }
};

export default createStore(
  reducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
