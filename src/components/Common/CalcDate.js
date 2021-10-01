import React, { useState, useEffect } from "react";

const CalcDate = ({ DateC }) => {
  const [Day, setDay] = React.useState("");
  const [Year, setYear] = React.useState("");
  const [Month, setMonth] = React.useState("");

  let today = new Date();
  let past;

  const mmm = parseInt(DateC[1]);
  const ddd = parseInt(DateC[2]);
  const yyy = parseInt(DateC[0]);

  const calculateDays = () => {
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); 
    const yyyy = today.getFullYear();

    today = mm + "/" + dd + "/" + yyyy;
    past = mmm + "/" + ddd + "/" + yyy;

 
    if (yyy >= yyyy) {
      setYear(yyy - yyyy);
    } else {
      setYear(yyyy - yyy);
    }

    if (mmm >= mm) {
      setMonth(mmm - mm);
    } else {
      setMonth(mm - mmm);
    }

    if (ddd >= dd) {
      setDay(ddd - dd);
    } else {
      setDay(dd - ddd);
    }
  };

  useEffect(() => {
    calculateDays();
    console.log(past, today);
  }, []);

  return (
    <div className="DateAgo">
      {Year > 0 ? (
        <div className="DateAgoBody">
          Reserved Date : {ddd}/{mmm}/{yyy}{" "}
        </div>
      ) : (
        ""
      )}
      {Month > 1 && Year == 0 ? (
        <div className="DateAgoBody"> {Month} months & </div>
      ) : (
        ""
      )}
      {Month == 1 && Year == 0 ? (
        <div className="DateAgoBody"> {Month} month & </div>
      ) : (
        ""
      )}
      {Day > 1 && Year == 0 ? (
        <div className="DateAgoBody"> {Day} days Ago </div>
      ) : (
        ""
      )}
      {Day == 1 && Year == 0 ? (
        <div className="DateAgoBody"> {Day} day Ago </div>
      ) : (
        ""
      )}

      {Day == 0 && Year == 0 ? <div className="DateAgoBody"> Today </div> : ""}
    </div>
  );
};
export default CalcDate;
