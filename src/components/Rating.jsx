

function Rating(props) {

    const fillStars = "★".repeat(Math.round(props.children)) + "☆".repeat(Math.round(5-props.children))

  return (
    <div>

        <p>{fillStars}</p>


    </div>
  )
}

export default Rating