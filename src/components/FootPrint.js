

const CarbonFootPrint = (props) => {

    const handleDelete = () => {
        props.handleDelete(props.footPrint);
    }

    return (
        // <div>
        //     <button className='show-modal-button' onClick={() => setShowModal(true)}>
        //         Show Carbon Footprint
        //     </button>
        //     {showModal &&
        //         <div className='modal'>
        //             <div className='modal-content'>
        //                 <h2>YOUR CARBON FOOTPRINT IS:</h2>
        //                 <h1>{props.footPrint.carbonTotal}</h1>
        //                 <button onClick={() => setShowModal(false)}>Close</button>
        //                 <button onClick={handleDelete}>Delete</button>
        //             </div>
        //         </div>
        //     }
        // </div>

    <div>
            <div>
                <div>
                    <p>MONTH:</p>
                    <h2>YOUR CARBON FOOTPRINT IS:</h2>
                    <h1>{props.footPrint.carbonTotal}</h1>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            </div>
    </div>

    )
}

export default CarbonFootPrint;