import { useState } from 'react';

const Edit = (props) => {
  const [footPrint, setFootPrint] = useState({ ...props.footPrint });

  const handleChange = (event) => {
    setFootPrint({ ...footPrint, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleEdit(footPrint);
  };


  
  return (
    <>
      <details>
        <summary>Edit Carbon FootPrint</summary>
        <form onSubmit={handleSubmit}>
          <label htmlFor='monthlyBill'>Monthly Bill:</label>
          <input type='number' name='monthlyBill' onChange={handleChange} value={footPrint.monthlyBill}/>
          <br/>
          <br/>
          <label htmlFor='monthlyGas'>Monthly Gas:</label>
          <input type='number' name='monthlyGas' onChange={handleChange} value={footPrint.monthlyGas}/>
          <br/>
          <br/>
          <label htmlFor='monthlyOil'>Monthly Oil:</label>
          <input type='number' name='monthlyOil' onChange={handleChange} value={footPrint.monthlyOil}/>
          <br/>
          <br/>
          <label htmlFor='yearlyMileage'>Yearly Mileage:</label>
          <input type='number' name='yearlyMileage' onChange={handleChange} value={footPrint.yearlyMileage}/>
          <br/>
          <br/>
          <label htmlFor='carbonTotal'>carbonTotal:</label>
          <input type='number' name='carbonTotal' onChange={handleChange} value={footPrint.carbonTotal}/>
          <br/>
          <br/>
          <input type="submit"/>
        </form>
      </details>
    </>
  )
}

export default Edit;