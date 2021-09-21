import React, {useState, useEffect} from 'react';

const CalcDate = ({DateC}) =>{

const [Day,setDay]= React.useState('');
const [Year,setYear]= React.useState('');
const [Month,setMonth]= React.useState('');


let today = new Date();

  
const date1 = DateC;
const date2 = new Date("07/30/2019");

const calculateDays =(past)=>{

    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();
    
    today = mm + '/' + dd + '/' + yyyy;
    
    
    const diffInMs   = new Date(today) - new Date(past)
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

    genarateDateNew(diffInDays)

}

const genarateDateNew =(Days)=>{

    const years  = Math.floor(Days/365)
    setYear(years)
    const months = Math.floor(Days%365/30)
    setMonth(months)
    const days   = Math.floor(Days%365%30)
    setDay(days)

}




useEffect(() => {
    calculateDays(date1)
    console.log(date1)
    console.log(today)
}, []);


return(
    <div className="DateAgo">
      {Year > 0 ? <div className="DateAgoBody"> {Year} years </div>:''}
      {Month > 0 ? <div className="DateAgoBody"> {Month} months </div>:''}
      {Day > 0 ? <div className="DateAgoBody"> {Day} Days Ago </div>:<div className="DateAgoBody">Today</div>}
      
     
    </div>

)





}
export default CalcDate;