

function Button(props) {

  return(
    <a href={props.goToId}>
      <button className= "button">
        {props.name}
      </button>
    </a>
  )
}

export default Button;