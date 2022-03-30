import React,{useState} from "react";
import { Tabs, Tab,TabPanel } from "@mui/material";
import { BookList } from "./Booklist";
import { DriverList } from "./DriverList";
import { Driver } from "./Driver";
import { Speedometer } from "./Speedometer";
export const DriverManager = ({driverdata}) => {
    const[value,setValue]=useState("book");
  return (
    <React.Fragment>
      <Tabs value={value} onChange={(e,val)=>setValue(val)}>
        <Tab value="book" label="Book"></Tab>
        <Tab value="dc" label="Riders Name"></Tab>
        <Tab value="DE" label="DriverEnroll"></Tab>
        <Tab value="SM" label="SpeedoMeter"></Tab>
        {/* <TabPanel index={0}>
            Driver Performance
        </TabPanel>
        <TabPanel index={1}>
            Driver List
        </TabPanel> */}
      </Tabs>
      {value=="book" && <BookList driverdata={driverdata}/>}
      {value=="dc" && <DriverList driverdata={driverdata}/>}
      {value=="DE" && <Driver driverdata={driverdata}/>}
    </React.Fragment>
  );
};
