export const INCREMENT_SESSION = "INCREMENT_SESSION";
export const DECREMENT_SESSION = "DECREMENT_SESSION";
export const INCREMENT_BREAK = "INCREMENT_BREAK";
export const DECREMENT_BREAK = "DECREMENT_BREAK";
export const START_STOP = "START_STOP";
export const SECOND_PASSED = "SECOND_PASSED";
export const RESET = "RESET";

export type Action = {
  type:
    | typeof INCREMENT_SESSION
    | typeof DECREMENT_SESSION
    | typeof INCREMENT_BREAK
    | typeof DECREMENT_BREAK
    | typeof START_STOP
    | typeof SECOND_PASSED
    | typeof RESET;
};

export const incrementSession = () => ({ type: INCREMENT_SESSION });
export const decrementSession = () => ({ type: DECREMENT_SESSION });
export const decrementBreak = () => ({ type: DECREMENT_BREAK });
export const incrementBreak = () => ({ type: INCREMENT_BREAK });
export const startStop = () => ({ type: START_STOP });
export const secondPassed = () => ({ type: SECOND_PASSED });
export const reset = () => ({ type: RESET });