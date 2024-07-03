function AboutCard(props){
  return(
    <div className={props.class}>
      <h1>{props.title}</h1>
      <p>{props.text}</p>
    </div>
  )
}

export default AboutCard;