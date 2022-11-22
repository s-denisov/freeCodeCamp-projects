import React from 'react';
import QuoteText from './QuoteText';
import QuoteButton from './QuoteButton'
import 'bootstrap/dist/css/bootstrap.css';

class QuoteBox extends React.Component {
  render() {
    return (
      <div id="quote-box" className="card col-lg-5 col-sm-9 col-xs-12">
        <div className="card-body">
          <QuoteText />
        </div>
        <div className="row card-footer justify-content-between">
          <QuoteButton />
          <button className="btn btn-secondary">
            <a id="tweet-quote"
               href="https://www.twitter.com/intent/tweet"
               style={{color: "white"}}>Tweet</a>
          </button>
        </div>
      </div>
    );
  }
}

export default QuoteBox;