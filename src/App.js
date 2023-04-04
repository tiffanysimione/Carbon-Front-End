import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Add from './components/Add';
import Edit from './components/Edit.js';
import CarbonFootPrint from './components/FootPrint';
import NewPage from './components/NewPage';
import Header from './components/Header';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import BarChart from './components/BarChart';





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
      setShowEditPage(! showEditPage);
    };
    
    // const handleEditPageClose = () => {
    //   setShowEditPage(false);
    // };
    

  
//new page
// const handleNewPageClick = () => {
//   setShowNewPage(true);
// };

const handleNewPageClose = () => {
  setShowNewPage(false);
};



    useEffect(() => {
      getFootPrint()
    }, [])

    AOS.init();


    return (
      
      <div class="page-container">
         <div class="body-container">

        <div class="left-container">
          <div class="left-header">
             <Header addFootPrint={addFootPrint} />
          </div>
          <div class="left-picture">
          <span><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</i></span>
            <div class="image">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
          <div class="left-footer">
            <Footer/>
          </div>
        </div>
       
        {/* <button onClick={handleNewPageClick}>
                  How To Fix Your Carbon FootPrint
                </button> */}
        <div class="right-container">
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
                          footPrint.carbonValue < 16000 ? "Average: Want to learn how to reduce your FootPrint? Click the link below!" : "Excessive: You've got a big FootPrint! :/ Click on the link below to learn how to lower your carbon emissions!"
                        }
                        handleDelete={handleDelete}
                      />
                    <button onClick={handleEditPageClick}>
                  Show Edit
                </button> {showEditPage ? <Edit handleEditPageClick={handleEditPageClick} footPrint={footPrint} handleEdit={handleEdit} />: null}
                
                  
    
          
                      {/* <Edit footPrint={footPrint} handleEdit={handleEdit} /> */}
                      <button
                        onClick={() =>
                          alert(
                            `Your carbon footprint is ${
                              footPrint.carbonValue < 16000 ? "Average: Want to learn how to reduce your FootPrint? Click the link below!" : "Excessive: You've got a big FootPrint! :/ Click on the link below to learn how to lower your carbon emission!"
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
        </div>

        </div>
      
      </div>
    );
  };
  
  export default App;