

function Greetings(props) {
console.log(props)

  if (props.lang ==="de"){
    return <p>Hallo {props.children}</p>
  }
  if (props.lang ==="en"){
    return <p>Hi {props.children}</p>
  }
  if (props.lang ==="es"){
    return <p>Hola {props.children}</p>
  }
  if (props.lang ==="fr"){
    return <p>Bonjour {props.children}</p>
  }
}

export default Greetings