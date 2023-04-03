import React, { useState } from 'react';

const CarbonFootPrint = (props) => {
    const [showModal, setShowModal] = useState(false);

    const handleDelete = () => {
        setShowModal(false);
        props.handleDelete(props.footPrint);
    }

    return (
        <div>
            <button className='show-modal-button' onClick={() => setShowModal(true)}>
                Show Carbon Footprint
            </button>
            {showModal &&
                <div className='modal'>
                    <div className='modal-content'>
                        <h2>YOUR CARBON FOOTPRINT IS:</h2>
                        <h1>{props.footPrint.carbonTotal}</h1>
                        <button onClick={() => setShowModal(false)}>Close</button>
                        <button onClick={handleDelete}>Delete</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default CarbonFootPrint;