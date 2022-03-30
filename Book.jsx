import { CardContent } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Grid, Button, Rating, Avatar, Card, CardContent } from "@mui/material";
export const Book = ({ item }) => {
  const [local, setLocal] = useState(1);
  const [long, setLong] = useState(1);
  const [name, setName] = useState("");

  useEffect(() => {
    setName(`${item.fname} ${item.mname} ${item.lname}`);
    setLocal(item.local);
    // setLocal(props.item.local);//
    setLong(item.long);
  }, []);
  return (
    <React.Fragment>
      <h1>Driver Performance Card</h1>
      <Grid container>
        <Grid item>
          <div>
            <Grid container>
              <Grid item xs={10}>
                <h3>Bajey Bahadur</h3>
              </Grid>
              <Grid item xs={2}>
                <Avatar alt="Bajey Bahadur" src="images/download.jfif" />{" "}
              </Grid>
              <Grid item>
                Long Driving
                <Rating
                  value={local}
                  onChange={(e, value) => setLocal(value)}
                />{" "}
                <br />
                Short Driving
                <Rating value={long} onChange={(e, value) => setLong(value)} />
              </Grid>{" "}
              <br />
              <div>
                <Grid item></Grid>
              </div>
            </Grid>
          </div>
          <br />
        </Grid>
        <Grid container>
          <br />
          <Grid item xs={1}>
            <Button variant="contained"> Book</Button>
          </Grid>
          <Grid item xs={1}>
            <Button variant="contained"> Report</Button>
          </Grid>
          <Grid item xs={5}>
            {" "}
          </Grid>
          <Grid item xs={5}></Grid>
        </Grid>
      </Grid>{" "}
    </React.Fragment>
  );
};
