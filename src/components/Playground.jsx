import Project from './Project';

function Playground() {
  // - put a simple and responsive game on component start
  // - list of projects 
  //    - Made the list with map() and an array of projects
  return (

    <div id="playground">
      <div className="playgroundDetailsTop1">
        <div className="playgroundDetailsTop2"></div>
      </div>
      <div className="playgroundDetails">
        <h1>PROJECTS</h1>
        <h3>On this journey i had made some deeds, <br />let`s see some of them!</h3>
      </div>

      <Project
        url="some url"
        img="./user-img-small.png"
        title="some title"
        techs="some techs"
        resume="some resume"
        description="some description some description some description some description some description some description some description"
      />

      <Project
        url="some url"
        img="./user-img-small.png"
        title="some title"
        techs="some techs"
        resume="some resume"
        description="some description some description some description some description some description some description some description"
      />

      <Project
        url="some url"
        img="./user-img-small.png"
        title="some title"
        techs="some techs"
        resume="some resume"
        description="some description some description some description some description some description some description some description"
      />

      <Project
        url="some url"
        img="./user-img-small.png"
        title="some title some title some title some title"
        techs="some techs"
        resume="some resume"
        description="some description some description some description some description some description some description some description"
      />
      <div className="projectEnd"></div>
    </div>
  )
}

export default Playground;