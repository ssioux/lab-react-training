
function DriverCard(props) {

   let rating = "★".repeat(Math.round(props.rating)) + "☆".repeat(Math.round(5-props.rating))

  return (
    <div style={{backgroundColor: "blue", width: "400px", height: "200px", marginLeft: "650px", color: "white"}}>
        
        <p> name: {props.name} </p> 
        <p> rating: {rating} </p> 
        <img src={props.img} alt="imager" width={100} style={{borderRadius: "100px", display: "flex"}}/>
        <p> {props.car.model} - {props.car.licensePlate}</p> 

    </div>
  )
}

export default DriverCard

