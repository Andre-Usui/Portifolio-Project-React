import Project from './Project';

function Playground(){
  // - put a simple and responsive game on component start
  // - list of projects 
  //    - Made the list with map() and an array of projects
  return(

    <div id="playground">
      <div className="playgroundDetails">
        <h1>Let`s see some of my projects</h1>
        <p>On this journey i made some deeds, let`s see them!</p>
      </div>

      <Project 
        url = "some url"
        img = "./user-img-small.png"
        title = "some title"
        techs = "some techs"
        resume = "some resume"
        description = "some description some description some description some description some description some description some description"
      />

      <Project 
        url = "some url"
        img = "./user-img-small.png"
        title = "some title"
        techs = "some techs"
        resume = "some resume"
        description = "some description some description some description some description some description some description some description"
      />

      <Project 
        url = "some url"
        img = "./user-img-small.png"
        title = "some title"
        techs = "some techs"
        resume = "some resume"
        description = "some description some description some description some description some description some description some description"
      />

      <Project 
        url = "some url"
        img = "./user-img-small.png"
        title = "some title some title some title some title"
        techs = "some techs"
        resume = "some resume"
        description = "some description some description some description some description some description some description some description"
      />
    </div>
  )
}

export default Playground;