import { createStore } from "redux";

export type State = {
  readonly description: string;
};

export type PadInfoProps = {
  readonly name: string,
} & State;

export type PadProps = {
  readonly setDescription: (description: string) => void
} & PadInfoProps;

const SET_DESCRIPTION = "SET_DESCRIPTION";

type Action = {
  readonly type: typeof SET_DESCRIPTION,
} & State;

const initialState: State = {
  description: "Description"
};

export const setDescription = (description: string) => ({
  type: SET_DESCRIPTION,
  description
});

function reducer(state = initialState, action: Action) : State {
  switch (action.type) {
    case SET_DESCRIPTION:
      return { description: action.description };
    default:
      return state;
  }
}

export const store = createStore(reducer);
