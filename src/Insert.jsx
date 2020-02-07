import React, { useState } from 'react'


let input = prompt("Wann hast Du angefangen? Tag, Monat, Jahr")
const date = { day: new Date().getDate(), month: new Date().getMonth(), year: new Date().getFullYear() }


function Insert() {
  


  const [date, setDate] = useState()



    return (
      <>
        <p>Du hast am { input } angefangen.</p>
        <br />
        <p>Heute ist der { date }</p>
      </>
    );
}

export default Insert