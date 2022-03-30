import React from "react";
import "./Common.css";
import { Home } from "./Components/Home";
// import {Parent} from "./props/Parent"
import {SpeedoMeter} from "./Components/Speedometer"
// import {SpeedoMeters} from "./Components/Speedometers"
// import {Driver} from "./Components/Driver"
// import {Book} from "./Components/Book"

function App() {
  return (
    <div className="main">
      <Home />
      {/* <Parent/> */}
      
      {/* <Driver/> */}
      <SpeedoMeter/>
      {/* <div className="main"> */}
        {/* <Book /> */}
      </div>
  );
}

export default App;
