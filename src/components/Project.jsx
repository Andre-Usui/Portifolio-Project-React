import Button from './Button';

function Project(props){

  return(

    <div className="project">
      <a className="projectImg" href={props.url}>
        <img src={props.img} alt={("A image of the project entitled " + props.title)} />
      </a>
      <div className="projectDetails">
        <p className="projectIcons">{props.techs}</p>
        <h2>{props.title}</h2>
        <small>{props.resume}</small>
        <p>{props.description}</p>
        <Button 
          class = "projectButton"
          name = "View Source"
          link = {props.url}
        />
      </div>
      
    </div>
  )
}


export default Project;