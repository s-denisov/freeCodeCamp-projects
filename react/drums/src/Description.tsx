import React from 'react';
import { connect } from 'react-redux';
import { State } from './store';

const Description: React.FC<State> = (props) => {
  return (
    <div id="display">
      {props.description.replace(/_/g, " ")}
    </div>
  );
};

export default connect((state: State) => state, null)(Description);