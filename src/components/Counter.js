import React from "react";

let date1 = new Date("08/12/2020");
let date2 = new Date;
 
// Calculating the time difference
// of two dates
let Difference_In_Time =
    date2.getTime() - date1.getTime();
 
// Calculating the no. of days between
// two dates
let Difference_In_Days =
    Math.round
        (Difference_In_Time / (1000 * 3600 * 24));
 
// To display the final no. of days (result)
console.log
    ("Total number of days between dates:\n" +
        date1.toDateString() + " and " +
        date2.toDateString() +
        " is: " + Difference_In_Days + " days");

function Counter() {
    return (
      <div className="App">
          <h1>I've loved you for</h1>
        <h1>{Difference_In_Days}</h1>
        <h1>days</h1>
      </div>
    );
    
  }

  export default Counter
  
