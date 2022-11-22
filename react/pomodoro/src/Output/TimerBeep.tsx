import React, { useEffect } from "react";
import { connect } from "react-redux";
import { State } from "../store/State";

const TimerBeep = (props: { switching: boolean }) => {
  useEffect(() => {
    const beep = document.getElementById("beep") as HTMLAudioElement;
    if (props.switching) {
      beep.play();
    } else {
      beep.pause();
      beep.currentTime = 0;
    }
  })
  return (
    <audio id="beep">
      <source src="../beep.mp3" type="audio/mp3" />
    </audio>
  );
};

export default connect(
  ({ switching, reset }: State) => ({ switching, reset }),
  null
)(TimerBeep);
