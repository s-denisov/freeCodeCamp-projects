import Pad from './Pad';
import React from 'react';
import { PadInfoProps } from './store';
import Description from './Description';

const letters: PadInfoProps[] = [
  { name: "Q", description: "Heater_1"},
  { name: "W", description: "Heater_2"},
  { name: "E", description: "Heater_3"},
  { name: "A", description: "Heater_4"},
  { name: "S", description: "Clap"},
  { name: "D", description: "Open_HH"},
  { name: "Z", description: "Kick_n_Hat"},
  { name: "X", description: "Kick"},
  { name: "C", description: "Closed_HH"}
];

const Machine: React.FC = () => {
  const pads = letters.map(x => {
    return (
      <Pad key={x.name} name={x.name} description={x.description} />
    );
  });
  const gridStyle = {
    display: "grid", 
    gridTemplateColumns: "repeat(3, 150px)",
    gridTemplateRows: "repeat(3, 150px)"
  };
  return (
    <div style={gridStyle} id="drum-machine">
      {pads}
      <Description />
    </div>
  );
};

export default Machine;