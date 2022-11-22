export type TimeLeft = {
  secondsLeft: number;
};

export type State = {
  readonly sessionLength: number;
  readonly breakLength: number;
  readonly started: boolean;
  readonly isBreak: boolean;
  readonly switching: boolean;
  readonly reset: number; // workaround freeCodeCamp tests, where audio is played, then reset is played from initial position, so no changes are detected
} & TimeLeft;

export const initialState: State = {
  secondsLeft: 1500,
  started: false,
  isBreak: false,
  sessionLength: 25,
  breakLength: 5,
  switching: false,
  reset: 0
};
