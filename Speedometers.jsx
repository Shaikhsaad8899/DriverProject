import React, { useState, useEffect } from "react";
import { Grid, Button, TextField } from "@mui/system";
export const SpeedoMeters = () => {
  const [speed, SetSpeed] = useState(0);
  const [status, SetStatus] = useState("Lightgray");
  useEffect(() => {
    if (speed >= 0 && 5 >= speed) SetStatus("LightGray");
    if (speed >= 5 && 20 >= speed) SetStatus("Yellow");
    if (speed >= 20 && 50 >= speed) SetStatus("Green");
    if (speed >= 50 && 150) SetStatus("Red");
  }, [speed]);
  const handleAdd = () => {
    SetSpeed = speed + 1;
  };
  const handleRemove = () => {
    SetSpeed = speed + 1;
  };
  return (
    <React.Fragment>
      <div>
        <Grid container>
          <Grid item xs={3}>
            <Button variant="contained" onClick={() => SetSpeed(speed - 1)}>
              -
            </Button>
          </Grid>
          <Grid item xs={6}>
            {" "}
            <TextField
              onChange
              variant="outline"
              style={{ backgroundColor: status }}
            ></TextField>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" onClick={SetSpeed(speed + 1)}>
              +
            </Button>{" "}
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};
