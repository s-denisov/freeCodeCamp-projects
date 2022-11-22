import React from "react";
import Editor from "./Editor";
import Preview from "./Preview";
import 'bootstrap/dist/css/bootstrap.css';

export default () => {
  return (
    <div className="container h-100">
      <div className="row h-100 justify-content-around">
        <Editor />
        <Preview />
      </div>
    </div>
  );
}