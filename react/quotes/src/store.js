import { createStore } from 'redux';

const NEW_QUOTE = "NEW_QUOTE";

export const newQuote = ({quote, author}) => ({
  type: NEW_QUOTE,
  quote,
  author
});

function setQuote(state = "", action) {
  switch (action.type) {
    case NEW_QUOTE:
      return {
        quote: action.quote,
        author: action.author
      };
    default:
      return state;
  }
}

export const store = createStore(setQuote);