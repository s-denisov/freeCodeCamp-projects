import React from "react";
import { connect } from "react-redux";
import { reset } from "../store/Action";

const ResetButton = (props: { reset: () => void }) => {
  return <input id="reset" type="button" onClick={props.reset} value="Reset" />;
};

export default connect(
  null,
  { reset }
)(ResetButton);
