function IdCard(props) {
  console.log(props)
  console.log(props.lastName)

  return (
    <div>
        <img src={props.picture} alt="pic" />
      <p>LastName: {props.lastName}</p>
      <p>FirstName: {props.firstName}</p>
      <p>Gender: {props.gender}</p>
      <p>Height: {props.height}</p>
      <p>Birth: {props.birth.toDateString()}</p>
      

    </div>
  );
}

export default IdCard;
