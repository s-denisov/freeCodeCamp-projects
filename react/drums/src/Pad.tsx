import React from 'react';
import Mousetrap from 'mousetrap';
import { PadProps, setDescription } from './store';
import { connect } from 'react-redux';

class Pad extends React.Component<PadProps> {
  constructor(props: PadProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    Mousetrap.bind(this.props.name.toLowerCase(), this.handleClick);
  }
  handleClick() {
    this.props.setDescription(this.props.description);
    const sound = document.getElementById(this.props.name) as HTMLMediaElement;
    sound.play();
  }
  render() {
    return (
      <button 
        id={this.props.description}
        className="drum-pad"
        onClick={this.handleClick}
      >
        {this.props.name}
        <audio 
          id={this.props.name}
          className="clip"
          src={`../sounds/${this.props.description}.mp3`}
        />
      </button>
    );
  }
}

export default connect(null, {setDescription})(Pad);