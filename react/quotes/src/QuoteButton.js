import React from 'react';
import {connect} from 'react-redux';
import {newQuote} from './store';
import Mousetrap from 'mousetrap';
import getQuote from './quotes';

class QuoteButton extends React.Component {

  constructor(props) {
    super(props);
    this.setNewQuote = this.setNewQuote.bind(this);
  }

  componentDidMount() {
    this.setNewQuote();
    Mousetrap.bind(["return", "n"], () => this.setNewQuote());
  }

  setNewQuote() {
    this.props.newQuote(getQuote());
  }

  render() { 
    return ( 
      <button id="new-quote" onClick={this.setNewQuote} className="btn btn-primary">New</button>
     );
  }
}
 
export default connect(null, {newQuote})(QuoteButton);