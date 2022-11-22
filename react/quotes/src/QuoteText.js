import React from 'react';
import {connect} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';

function QuoteText(props) {
  return (
    <div>
      <p id="text" className="card-text">
        {props.quote}
      </p>
      <p id="author" className="card-text">
        <em>{props.author}</em>
      </p>
    </div>
  );
}

export default connect(x => x, null)(QuoteText);