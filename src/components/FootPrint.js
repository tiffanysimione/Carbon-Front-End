const CarbonFootPrint = (props) => {
    return (
       
           <div className='card'>
                <h6>YOUR CARBON FOOTPRINT IS:</h6>
                <h3>{props.footPrint.carbonTotal}</h3>
                <button onClick={()=>{props.handleDelete(props.footPrint)}}>x</button>
            </div>
    )
}

export default CarbonFootPrint