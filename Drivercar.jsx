import React from "react"
import { Card, CardContent } from "@mui/material";
import TwoWheelerRoundedIcon from '@mui/icons-material/TwoWheelerRounded';
export const DriverCar=({item})=>{
    return(
        <React.Fragment>
<Card className="driveritem" >
    <CardContent>
        {/* <h3 > <TwoWheelerRoundedIcon color="primary"/>{ `${item.fname} ${item.mname} ${item.lname}`}</h3> */}
        {/* <h3 > <TwoWheelerRoundedIcon color="secondary"/>{ `${item.fname} ${item.mname} ${item.lname}`}</h3> */}
        <h3 > <TwoWheelerRoundedIcon color="success"/>{ ` ${item.fname} ${item.mname} ${item.lname}`}</h3>
    </CardContent>
</Card>
        </React.Fragment>
 )}