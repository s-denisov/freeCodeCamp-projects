import React from "react";
import SettingContainer from "./Settings/SettingContainer";
import {
  IncSession,
  DecSession,
  IncBreak,
  DecBreak
} from "./Settings/SettingButton";
import {
  BreakDescription,
  SessionDescription
} from "./Settings/SettingDescription";
import TimeDisplay from "./Output/TimeDisplay";
import StartButton from "./Operations/StartButton";
import TimerLabel from "./Output/TimerLabel";
import ResetButton from "./Operations/ResetButton";
import TimerBeep from "./Output/TimerBeep";

const GlobalContainer = () => {
  return (
    <div id="global-container">
      <SettingContainer
        increaseButton={<IncSession />}
        decreaseButton={<DecSession />}
        settingValue={<SessionDescription />}
        description="Session"
      />
      <SettingContainer
        increaseButton={<IncBreak />}
        decreaseButton={<DecBreak />}
        settingValue={<BreakDescription />}
        description="Break"
      />
      <TimeDisplay />
      <TimerLabel />
      <StartButton />
      <ResetButton />
      <TimerBeep />
    </div>
  );
};

export default GlobalContainer;
