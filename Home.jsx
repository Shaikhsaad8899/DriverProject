import React, { useState } from "react";
import { Grid, Card, CardContent,Tabs,Tab } from "@mui/material";
import { Driver } from "./Driver";
import { DriverCar } from "./Drivercar";
import { DriverManager } from "./DriverManager";
// import{Book} from "./Book"

// import { SpeedoMeter } from "./Speedometer";
// import { SpeedoMeters } from "./Speedometers";
// import {styled} from "@mui/material/styles"
export const Home = ({ item }) => {
  const [data, setData] = useState([
    {
      fname: "Saad",
      mname: "Mohammad",
      lname: "Shaikh",
      local: 3,
      long: 4,
    },
    {
      fname: "Ahad",
      mname: "Abdul",
      lname: "Shaikh",
      local: 5,
      long: 2,
    },
  ]);
  return (
    <div className="sub">
      <Grid container spacing={1}>
      <Grid item xs={12}>
          <Card>
            <DriverManager driverdata={data}/>
            </Card>
        </Grid>
        </Grid>
    </div>
  );
};
