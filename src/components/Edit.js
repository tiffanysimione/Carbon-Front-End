import React, { useState, useEffect } from "react";
import axios from 'axios';

const Edit = (props) => {
  const [newMonthlyBill, setNewMonthlyBill] = useState(props.footPrint.monthlyBill)
  const [newMonthlyGas, setNewMonthlyGas] = useState(props.footPrint.monthlyGas)
  const [newMonthlyOil, setNewMonthlyOil] = useState(props.footPrint.monthlyOil)
  const [newYearlyMileage, setNewYearlyMileage] = useState(props.footPrint.yearlyMileage)
  const [newShortFlights, setShortFlights] = useState(props.footPrint.shortFlights)
  const [newLongFlights, setLongFlights] = useState(props.footPrint.longFlights)
  const [newCarbonTotal, setNewCarbonTotal] = useState(props.footPrint.carbonTotal)


  useEffect(() => {
    const carbonTotal = () => {
      let carbonTotal = (newMonthlyBill + newMonthlyGas + newMonthlyOil + newYearlyMileage +newShortFlights+newLongFlights);
      setNewCarbonTotal(carbonTotal);
    };
  
    carbonTotal();
  }, [newMonthlyBill, newMonthlyGas, newMonthlyOil, newYearlyMileage,newShortFlights,newLongFlights]);


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
    setShortFlights(event.target.value * 1100)
  }

  const handleLongFlights = (event) => {
    setLongFlights(event.target.value * 4400)
  }

  const handleEdit = (event) => {
    event.preventDefault();
    axios.put(`http://localhost:3000/carbon/${props.footPrint._id}`,
    {
        monthlyBill: newMonthlyBill,
        monthlyGas: newMonthlyGas,
        monthlyOil: newMonthlyOil,
        shortFlights: newShortFlights,
        longFlights: newLongFlights,
        yearlyMileage: newYearlyMileage,
        carbonTotal: newCarbonTotal,
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
          <label htmlFor='shortFlights'> Short Flights</label>
          <input type='number' name='shortFlights' onChange={handleShortFlights}/>
          <br/>
          <br/>
          <label htmlFor='longFlights'>Yearly Mileage:</label>
          <input type='number' name='longFlights' onChange={handleLongFlights}/>
          <br/>
        `<br/>
        <button type="submit">Submit</button>
      </form>
    </details>
  </>
);
}

export default Edit;