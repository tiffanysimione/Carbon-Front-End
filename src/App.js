import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Add from './components/Add';
import CarbonFootPrint from './components/FootPrint';



const App = () => {

    const [footPrint, setFootPrint] = useState([])
    const [add, setAdd] = useState(false)

    // ADD FOOTPRINT
    const addFootPrint = () => {
      setAdd(!add)
    }

     // GET FOOTPRINT (READ)
    const getFootPrint = () => {
      axios.get('http://localhost:3000/carbon').then((response) => {
        setFootPrint(response.data)
   })
  }
 
    // DELETE FOOTPRINT

    const handleDelete = (carbonData) => {
      axios.delete(`http://localhost:3000/carbon/${carbonData._id}`).then(() => {
        axios.get('http://localhost:3000/carbon').then((response) => {
          setFootPrint(response.data).catch((error) => console.log(error))
        })
      }
      )
    }

    useEffect(() => {
      getFootPrint()
    }, [])


  return (
    <main>
      <div>
        <h1>Carbon Footprint</h1>
        {/* IF ADD IS FALSE IT WILL RENDER THE CREATE NEW FOOTPRINT INPUT FORM / ELSE IT HIDE THE CREATE AND JUST DISPLAY THE ALREADY CREATED FOOTPRINTS */}
       {add === false ? <button onClick={addFootPrint}>Add New Footprint</button> : <button onClick={addFootPrint}>Close</button>
       
       }
       {add ?
       <>
       {/* IF ADD IS TRUE JUST SHOW THE CREATE MENU (ADD.JS FILE) / ELSE SHOW THE LIST OF CREATED FOOTPRINTS */}
          <Add setAdd={setAdd} getFootPrint={getFootPrint}/>
       </> :
             <div>
             {footPrint.map((footPrint) => {
               return (
                <CarbonFootPrint key={footPrint._id} footPrint={footPrint} handleDelete={handleDelete}/>
               )
             })}
            </div>
       }
    
     </div>
    </main>
    

  )
}


export default App;
