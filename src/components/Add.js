import React from "react"
import { useState } from 'react';
import axios from 'axios';

const Add = (props) => {

    const [monthlyBill, setMonthlyBill] = useState()
    const [monthlyGas, setMonthlyGas] = useState()
    const [monthlyOil, setMonthlyOil] = useState()
    const [yearlyMileage, setYearlyMileage] = useState()
    const [shortFlights, setShortFlights] = useState()
    const [longFlights, setLongFlights] = useState()
    const [recycleNewspaper, setrecycleNewspaper] = useState(false)
    const [recycleAluminum, setrecycleAluminum] = useState(false)

    // LISTEN FOR BILL AND UPDATE STATE
    const handleBill = (event) => {
        setMonthlyBill(event.target.value * 105)
    }

    // LISTEN FOR GAS AND UPDATE STATE
    const handleGas = (event) => {
        setMonthlyGas(event.target.value * 105)
    }

    // LISTEN FOR OIL AND UPDATE STATE
    const handleOil = (event) => {
        setMonthlyOil(event.target.value * 113)
    }

    // LISTEN FOR MILEAGE AND UPDATE STATE
    const handleMileage = (event) => {
        setYearlyMileage(event.target.value * .79)
    }

    // LISTEN FOR SHORT-FLIGHTS AND UPDATE STATE
    const handleShortFight = (event) => {
        setShortFlights(event.target.value * 1100)
    }
    
    // LISTEN FOR LONG-FLIGHTS AND UPDATE STATE
    const handleLongFlight = (event) => {
        setLongFlights(event.target.value * 4400)
    }

    // CHECKBOXES
    const newspaper = (event) => {
        setrecycleNewspaper(event.target.checked)
    }

    const aluminum = (event) => {
        setrecycleAluminum(event.target.checked)
    }


    // TOTAL
    const total = () => {
        let carbonTotal = (monthlyBill + monthlyGas + monthlyOil + yearlyMileage + shortFlights + longFlights)

        if (recycleAluminum === true){
            carbonTotal += 166 } 
        if (recycleNewspaper === true){
            carbonTotal += 184 } 
        return carbonTotal
    }

     // SEND STATES TO DATABASE WHEN SUBMITTING FORM
    const addFootPrint = (event) => {
        event.preventDefault()
        axios.post(`http://localhost:3000/carbon/`,{
            monthlyBill: monthlyBill,
            monthlyGas: monthlyGas,
            monthlyOil: monthlyOil,
            yearlyMileage: yearlyMileage,
            shortFlights: shortFlights,
            longFlights: longFlights,
            carbonTotal: total(),
            recycleAluminum,
            recycleNewspaper,
        }).then(() => {
            props.setAdd(false)
            props.getFootPrint()
        })
    }
    return (
        <div>
            <h3> Add a new Foot Print</h3>
            <form onSubmit={addFootPrint}>
                <input type='number' name='monthyBill' placeholder='Monthly Bill' required onChange={handleBill}/>
                <input type='number' name='monthlyGas' placeholder='Monthly Gas' required onChange={handleGas}/>
                <input type='number' name='monthlyOil' placeholder='Monthly Oil' required onChange={handleOil}/>
                <input type='number' name='yearlyMileage' placeholder='Yearly Mileage' required onChange={handleMileage}/>
                <input type='number' name='shortFlights' placeholder='Short Flights' required onChange={handleShortFight}/>
                <input type='number' name='longFlights' placeholder='Long Flights' required onChange={handleLongFlight}/>
                <label htmlFor="newspaper">Do you recycle newspaper?</label>
                <input id='newspaper' type='checkbox' name='recycleNewspaper' onChange={newspaper}/>
                <label htmlFor="aluminum">Do you recycle aluminum?</label>
                <input id='aluminum' type='checkbox' name='recycleAluminum' onChange={aluminum}/>
                <input type='submit' value='SUBMIT' />
            </form>
        </div>
    )
}

  
  export default Add