import React from "react";
import { State } from "./store";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import marked from "marked";

const Preview: React.FC<State> = (props) => {
  return (
    <div  
      id="preview"
      className="col-md-6 border h-100"
      dangerouslySetInnerHTML={{__html: marked(props.markdown)}}
    />
  );
};

marked.setOptions({breaks: true});

export default connect(x => x, null)(Preview);