import React,{useState} from "react"
import {DriverCar} from "./Drivercar"
export const DriverList=({driverdata})=>{
const[data,setData]=useState([...driverdata])
return(
    <React.Fragment>
{data.map((item)=><DriverCar  item={item}/>)}
    </React.Fragment>
)}