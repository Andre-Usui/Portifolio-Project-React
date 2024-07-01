

function Button(props) {

  return(
    <a href={props.link}>
      <button className= {props.class}>
        {props.name}
      </button>
    </a>
  )
}

export default Button;