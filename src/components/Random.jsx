
function Random(props) {
    
    const randomNumber = Math.floor(Math.random() * (props.max) + props.min)
 


  return (
    <div>

        <p>{randomNumber}</p>
        
    </div>
  )
}

export default Random