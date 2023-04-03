import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Add from './components/Add';
import Edit from './components/Edit.js';
import CarbonFootPrint from './components/FootPrint';
import NewPage from './components/NewPage';
import Header from './components/Header';
import Footer from './components/Footer';




const App = () => {

  const [footPrint, setFootPrint] = useState([])
  const [add, setAdd] = useState(false)
  const [showNewPage, setShowNewPage] = useState(false);
  const [showEditPage, setShowEditPage] = useState(false);
  




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

//Edit FootPrint
    const handleEdit = (data) => {
      axios.put(`http://localhost:3000/carbon/${data._id}`, data).then((response) => {
        console.log(response);
        let newFootPrint = footPrint.map((footPrintItem) => {
          if (footPrintItem._id === data._id) {
            return data;
          } else {
            return footPrintItem;
          }
        });
        setFootPrint(newFootPrint);
      }).catch((error) => console.log(error))
    };
  

    const handleEditPageClick = () => {
      setShowEditPage(true);
    };


  
//new page
const handleNewPageClick = () => {
  setShowNewPage(true);
};

const handleNewPageClose = () => {
  setShowNewPage(false);
};



    useEffect(() => {
      getFootPrint()
    }, [])



    return (
      <div>
        <Header addFootPrint={addFootPrint} />
        <button onClick={handleNewPageClick}>
                  How To Fix Your Carbon FootPrint
                </button>
        <main>
          <div>
            {add ? (
              <Add setAdd={setAdd} getFootPrint={getFootPrint} />
            ) : (
              <div>
                {footPrint.map((footPrint) => {
                  return (
                    <div key={footPrint._id}>
                      <CarbonFootPrint
                        footPrint={footPrint}
                        result={
                          footPrint.carbonValue < 5000 ? 'good job' : 'you hate the earth'
                        }
                        handleDelete={handleDelete}
                      />
                    <button onClick={handleEditPageClick}>
                  Show Edit
                </button> {showEditPage ? <Edit footPrint={footPrint} handleEdit={handleEdit} />: null}
                
                  
    
          
                      {/* <Edit footPrint={footPrint} handleEdit={handleEdit} /> */}
                      <button
                        onClick={() =>
                          alert(
                            `Your carbon footprint is ${
                              footPrint.carbonValue < 5000 ? 'good' : 'you hate the earth'
                            }`
                          )
                        }
                      >
                        Check Footprint Status
                      </button>
                    </div>
                  );
                })}
              
              </div>
            )}
          </div>
          {showNewPage && <NewPage onClose={handleNewPageClose} />}
        </main>
        <Footer />
      </div>
    );
  };
  
  export default App;