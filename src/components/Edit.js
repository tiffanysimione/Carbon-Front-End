import React, { useState } from "react";
import axios from 'axios';

const Edit = (props) => {
  const [newMonthlyBill, setNewMonthlyBill] = useState(props.footPrint.monthlyBill)
  const [newMonthlyGas, setNewMonthlyGas] = useState(props.footPrint.monthlyGas)
  const [newMonthlyOil, setNewMonthlyOil] = useState(props.footPrint.monthlyOil)
  const [newYearlyMileage, setNewYearlyMileage] = useState(props.footPrint.yearlyMileage)
  const [newCarbonTotal, setNewCarbonTotal] = useState(props.footPrint.carbonTotal)

   // TOTAL
   const carbonTotal = () => {
    let carbonTotal = (newMonthlyBill + newMonthlyGas + newMonthlyOil + newYearlyMileage );
    setNewCarbonTotal(carbonTotal);
  };

  const handleBillUpdate = (event) => {
    setNewMonthlyBill(event.target.value * 105)
  }

  const handleGasUpdate = (event) => {
    setNewMonthlyGas(event.target.value * 105)
  }

  const handleOilUpdate = (event) => {
    setNewMonthlyOil(event.target.value * 113)
  }

  const handleMileageUpdate = (event) => {
    setNewYearlyMileage(event.target.value * 0.79)
  }

  // const handleShortFlights = (event) => {
  //   setNewCarbonTotal(event.target.value * 1100)
  // }

  // const handleLongFlight = (event) => {
  //   setNewCarbonTotal(event.target.value * 4400)
  // }

  const handleEdit = (event) => {
    event.preventDefault();
    axios.put(`http://localhost:3000/carbon/${props.footPrint._id}`,
    {
        monthlyBill: newMonthlyBill,
        monthlyGas: newMonthlyGas,
        monthlyOil: newMonthlyOil,
        yearlyMileage: newYearlyMileage,
        carbonTotal: newCarbonTotal
      }
      ).then(() => {
        props.setEdit(false)
        props.getfootPrint()
    })
}

  return (
    <>
      <details>
        <summary>Edit Carbon FootPrint</summary>
        <form onSubmit={handleEdit}>
          <label htmlFor='monthlyBill'>Monthly Bill:</label>
          <input type='number' name='monthlyBill' onChange={handleBillUpdate}/>
          <br/>
          <br/>
          <label htmlFor='monthlyGas'>Monthly Gas:</label>
          <input type='number' name='monthlyGas' onChange={handleGasUpdate} />
          <br/>
          <br/>
          <label htmlFor='monthlyOil'>Monthly Oil:</label>
          <input type='number' name='monthlyOil' onChange={handleOilUpdate} />
          <br/>
          <br/>
          <label htmlFor='yearlyMileage'>Yearly Mileage:</label>
          <input type='number' name='yearlyMileage' onChange={handleMileageUpdate}/>
          <br/>
          <br/>


          <input type="submit"/>
        </form>
      </details>
    </>
  )
}

export default Edit;