import React from "react";

type SettingProps = {
  increaseButton: JSX.Element;
  decreaseButton: JSX.Element;
  settingValue: JSX.Element;
  description: string;
};

const SettingContainer: React.FC<SettingProps> = props => {
  return (
    <div className="setting-container">
      {props.increaseButton}
      {props.settingValue}
      <p id={props.description.toLowerCase() + "-label"}>{props.description}</p>
      {props.decreaseButton}
    </div>
  );
};

export default SettingContainer;
