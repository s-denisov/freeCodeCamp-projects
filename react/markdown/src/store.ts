import { createStore } from "redux";
import { updateExpression } from "@babel/types";

export type State = {
  readonly markdown: string;
};

export type Updater = {
  readonly setMarkdown: (markdown: string) => void;
} & State;

const initialState: State = {
  markdown: 
`# Header
## Sub header
[link](https://www.google.com)
\`code\`
\`\`\`
function CodeBlock() {
  return this;
}
\`\`\`
+ List item

**Bold text**
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")
> Block quote
`,
};

const SET_MARKDOWN = "SET_MARKDOWN"; 
type ActionType = typeof SET_MARKDOWN;
type Action = {
  type: typeof SET_MARKDOWN;
  markdown: string;
};

export const setMarkdown = (x: string) => ({
  type: SET_MARKDOWN,
  markdown: x
});

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {
    case SET_MARKDOWN:
      return {
        markdown: action.markdown
      };
    default:
      return state;
  }
}

export const store = createStore(reducer);