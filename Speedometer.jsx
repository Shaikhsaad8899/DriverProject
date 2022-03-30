import React, { useState,useEffect } from "react";
import { Grid, Button, TextField, Card,CardContent} from "@mui/material";
export const SpeedoMeter = () => {

  const [speed, SetSpeed] = useState(0);
  const [status, SetStatus] = useState("Lightgray");
  useEffect(()=>{
if(speed>=0 && speed<=5)
SetStatus("LightGray");
if(speed>=5 && speed<=20)
SetStatus("yellow");
if(speed>=20 && speed<=50)
SetStatus("Green");
if(speed>=50 && speed<=10000)
SetStatus("Red")
  } ,[speed])
  const handleAdd = () => {
    SetSpeed(speed + 1);
  };
  const handleDec = () => {
    SetSpeed(speed - 1);
  };
  return (
    <Card>
      <CardContent>
      <React.Fragment>
      <div>
        <Grid container>
          <Grid item xs={3}>
            {" "}
            <Button variant="contained" onClick={() => SetSpeed(speed - 5)}>
              -
            </Button>
          </Grid>
          <Grid item xs={6}>
            {" "}
            <TextField value={speed} variant="outlined"></TextField>{" "}
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" onClick={() => SetSpeed(speed + 5)}>
              +
            </Button>
          </Grid>
        </Grid>
      </div>
      <br /><br />
      <div>
      <Grid container>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}> <div className="divi" style={{backgroundColor: status}}></div> </Grid>
        <Grid item xs={3}></Grid>
      </Grid></div>
    </React.Fragment>
      </CardContent>
    </Card>
  );
};

 
