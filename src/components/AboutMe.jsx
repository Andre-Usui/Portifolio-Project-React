import AboutCard from './AboutCard'

function AboutMe(){
  return(
    <div id="aboutMe">
      <div className="aboutTitle">
        <div className="aboutTop"></div>
          <h1>ABOUT ME</h1>
      </div>
      <div className="aboutContainer">
        <div className="aboutContainerTop">
          <img className="aboutImg" src="./user-img-small.png" alt="An image of the creator of this Portfolio: André Usui" />
          <AboutCard 
            class="aboutCard"
            title="Who is André Usui?"
            text="description large description large description large description large description large description large description large 
            description large description large vdescription large description large 
            description large description large description large description larg"
            />
        </div>
        <AboutCard 
          class="aboutCard"
          title="I'm a Programmer"
          text="description large description large description large description large description large description large description large 
          description large description large vdescription large description large 
          description large description large description large description larg"
        />
        <AboutCard 
          class="aboutCard"
          title="I'm an artist"
          text="description large description large description large description large description large description large description large 
          description large description large vdescription large description large 
          description large description large description large description larg"
        />
        <AboutCard 
          class="aboutCard"
          title="I'm a worker"
          text="description large description large description large description large description large description large description large 
          description large description large vdescription large description large 
          description large description large description large description larg"
        />
      </div>
    </div>
  )
}

export default AboutMe;