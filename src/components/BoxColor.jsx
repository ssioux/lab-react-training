

function BoxColor(props) {
    const {r, g, b} = props
 
  return (
    <div style={{backgroundColor: `rgb(${r}, ${g}, ${b})`}}>
            <p>rgb({r},{g},{b})</p>
            <p>Hexadecimal</p>

    </div>
  )
}

export default BoxColor