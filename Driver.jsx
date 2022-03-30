import React, { useState, useEffect } from "react";
import { Grid, Button, TextField } from "@mui/material";
export const Driver = () => {
  // const [data, setData] = useState([]);
  const [fname, setFname] = useState("");
  const [mname, setMname] = useState("");
  const [lname, setLname] = useState("");
  const [hno, setHno] = useState("");
  const [area, setArea] = useState("");
  const [city, setCity] = useState("");
  const [pin, setPin] = useState("");
  const [license, setLicense] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [pancard, setPancard] = useState("");
  const [address, setAddress] = useState("");
  const [idproof, setIdproof] = useState("");
  const [fullname, setFullname] = useState("");
  const handleRemove = () => {
    setFname("")
    setMname("")
    setLname("")
    setHno("")
    setArea("")
    setCity("")
    setPin("")
    setLicense("")
    setAadhar("")
    setPancard("")
     };
  // const handleAdd = () => {
  //   if (fullname !== "") {
  //     setData([...data, fullname]);
  //     setFullname("");
  //   }
  useEffect(() => {
    setFullname("");
  }, []);
  useEffect(() => {
    setFullname(`${fname} ${mname} ${lname}`);
    setAddress(`${hno} ${area} ${city} ${pin} `);
    setIdproof(`${license} : ${aadhar} : ${pancard} `);
  }, [fullname, address, idproof]);
  return (
    <React.Fragment>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <TextField
            label="First Name"
            required
            variant="standard"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
          ></TextField>
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Middle Name"
            variant="standard"
            required

            value={mname}
            onChange={(e) => setMname(e.target.value)}
          ></TextField>
        </Grid>

        <Grid item xs={4}>
          <TextField
            label="Last Name"
            value={lname}
            required

            variant="standard"
            onChange={(e) => setLname(e.target.value)}
          ></TextField>
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Home-No."
            value={hno}
            variant="standard"
            onChange={(e) => setHno(e.target.value)}
          ></TextField>
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Area"
            value={area}
            variant="standard"
            onChange={(e) => setArea(e.target.value)}
          ></TextField>
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="City"
            value={city}
            variant="standard"
            onChange={(e) => setCity(e.target.value)}
          ></TextField>
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Pin-Code"
            value={pin}
            required

            variant="standard"
            onChange={(e) => setPin(e.target.value)}
          ></TextField>
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="License"
            value={license}
            required

            variant="standard"
            onChange={(e) => setLicense(e.target.value)}
          ></TextField>
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Aadhar"
            required

            value={aadhar}
            variant="standard"
            onChange={(e) => setAadhar(e.target.value)}
          ></TextField>
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Pan-Card"
            value={pancard}

            variant="standard"
            onChange={(e) => setPancard(e.target.value)}
          ></TextField>
        </Grid>
        <Grid item xs={12}>
          <p>{fullname}</p>
          <p>{address}</p>
        {license!=="" && aadhar!=="" && pancard!=="" &&<p>{idproof}</p>}
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" sx={{ m: 0.5 }}>
            Save
          </Button>
          <Button variant="contained" onClick={handleRemove}>
            Cancel
          </Button>
        </Grid>
        <Grid xs={6}>
          {" "}
          <br /> <br />
          {/* <Button
            variant="contained"
            Label="To do"
            onClick={handleAdd}
            sx={{ ml: 5 }}
          >
            {" "}
            Add
          </Button>
          {data.map((item) => (
            <Card className="item">
              <CardContent>{item}</CardContent>
            </Card>
          ))} */}
      </Grid>
      </Grid>
    </React.Fragment>
  );
}
;
