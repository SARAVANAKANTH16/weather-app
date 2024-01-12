import React from 'react';
import './Result.css';
import {Button} from '@mui/material';


const Result = ({temp,desc,icon,setTemp}) => {
    console.log(icon);
  return (
    <div className='result'>
      <div className='result__box'>
        <h1>Temp: {temp}</h1>
        <p>{desc}</p>
        <img src={icon} alt="logo"/>
        <br/>
        <Button variant="contained" color="primary" onClick={()=>{
            setTemp("");
        }}>
            Back
         </Button>
      </div>
    </div>
  )
}

export default Result