import React,{useState} from "react"
export const BookList=()=>{
    const[data,setData]=useState([]);

    return(
        <React.Fragment>
{data.map((item)=> (< BookList item={item}/>))}
        </React.Fragment>
    )}