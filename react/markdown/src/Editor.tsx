import React from "react";
import { setMarkdown, Updater } from "./store";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";

const Editor: React.FC<Updater> = (props) => {
  return (
    <textarea 
      id="editor"
      className="col-md-6"
      onChange={e => props.setMarkdown(e.target.value)}
      value={props.markdown}
    />
  );
};

export default connect(x => x, {setMarkdown})(Editor);