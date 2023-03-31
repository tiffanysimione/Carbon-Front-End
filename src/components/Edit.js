import React, { useState } from "react";
import axios from 'axios';

const Edit = (props) => {
  const [newMonthlyBill, setNewMonthlyBill] = useState(props.footPrint.monthlyBill)
  const [newMonthlyGas, setNewMonthlyGas] = useState(props.footPrint.monthlyGas)
  const [newMonthlyOil, setNewMonthlyOil] = useState(props.footPrint.monthlyOil)
  const [newYearlyMileage, setNewYearlyMileage] = useState(props.footPrint.yearlyMileage)
  const [newShortFlights, setNewShortFlights] = useState(props.footPrint.shortFlights)
  const [newLongFlights, setNewLongFlights] = useState(props.footPrint.longFlights)
  const [recycleNewspaper, setRecycleNewspaper] = useState(props.tagert.recycleNewspaper)
  const [recycleAluminum, setRecycleAluminum] = useState(props.footPrint.recycleAluminum)

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

  const handleShortFlights = (event) => {
    setNewShortFlights(event.target.value * 1100)
  }

  const handleLongFlights = (event) => {
    setNewLongFlights(event.target.value * 4400)
  }

    // CHECKBOXES
    const newspaperUpdate = (event) => {
      setRecycleNewspaper(event.target.checked)
  }

  const aluminumUpdate = (event) => {
      setRecycleAluminum(event.target.checked)
  }


     // TOTAL
     const newTotal = () => {
      let newCarbonTotal = (newMonthlyBill + newMonthlyGas + newMonthlyOil + newYearlyMileage + newShortFlights + newLongFlights)

      if (recycleAluminum === false){
        newCarbonTotal += 166 } 
      if (recycleNewspaper === false){
        newCarbonTotal += 184 } 
      return newCarbonTotal
    }; 
    

  const handleEdit = (event) => {
    event.preventDefault();
    axios.put(`http://localhost:3000/carbon/${props.footPrint._id}`,
    {
        monthlyBill: newMonthlyBill,
        monthlyGas: newMonthlyGas,
        monthlyOil: newMonthlyOil,
        yearlyMileage: newYearlyMileage,
        shortFlights: newShortFlights,
        longFlights: newLongFlights,
        carbonTotal: newTotal(),
        recycleAluminum,
        recycleNewspaper,
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
          <input type='number' name='monthlyBill' placeholder={props.footPrint.monthlyBill} onChange={handleBillUpdate}/>
          <br/>
          <br/>
          <label htmlFor='monthlyGas'>Monthly Gas:</label>
          <input type='number' name='monthlyGas' placeholder={props.footPrint.monthlyGas} onChange={handleGasUpdate} />
          <br/>
          <br/>
          <label htmlFor='monthlyOil'>Monthly Oil:</label>
          <input type='number' name='monthlyOil' placeholder={props.footPrint.monthlyOil} onChange={handleOilUpdate} />
          <br/>
          <br/>
          <label htmlFor='yearlyMileage'>Yearly Mileage:</label>
          <input type='number' name='yearlyMileage' placeholder={props.footPrint.yearlyMileage}  onChange={handleMileageUpdate}/>
          <br/>
          <br/>
          <label htmlFor='shortFlights'>Short Flights:</label>
          <input type='number' name='shortFlights' placeholder={props.footPrint.shortFlights} onChange={handleShortFlights}/>
          <br/>
          <br/>
          <label htmlFor='longFlights'>Long Flights:</label>
          <input type='number' name='longFlights' placeholder={props.footPrint.longFlights}  onChange={handleLongFlights}/>
          <label htmlFor="newspaper">Do you recycle newspaper?</label>
                <input id='newspaper' type='checkbox' name='recycleNewspaper' onChange={newspaperUpdate}/>
                <label htmlFor="aluminum">Do you recycle aluminum?</label>
                <input id='aluminum' type='checkbox' name='recycleAluminum' onChange={aluminumUpdate}/>

          <input type="submit"/>
        </form>
      </details>
    </>
  )
}

export default Edit;