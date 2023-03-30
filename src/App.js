import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';



const App = () => {

    const [footPrint, setFootPrint] = useState([])

    // ADD FOOTPRINT


     // GET FOOTPRINT (READ)

    axios.get('http://localhost:3000/carbon').then((response) => {
        setFootPrint(response.data)
    })

    // DELETE FOOTPRINT

    const handleDelete = (carbonData) => {
      axios.delete(`http://localhost:/carbon/${carbonData._id}`).then(() => {
        axios.get('http://localhost:3000/carbon').then((response) => {
          setFootPrint(response.data).catch((error) => console.log(error))
        })
      }
      )
    }

    useEffect(() => {}, [])


  return (
    <main>
      <div>
        <h1>Carbon footPrint</h1>
     </div>
    </main>
    

  )
}


export default App;
