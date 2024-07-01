function Landscape(){
  return(
  <>
    <div id="landscape">
      <div className="landscapeContainer">
        <h1>Hi there!<br></br>I do Web Development<br></br>and some Art around.</h1>
      </div>
        <div className="landscapeBox">
          <div className="landscapeFx"></div>        
          <div className="landscapeFxNull"></div>
          <div className="landscapeFx" style={{transform: "skew(30deg)"}}></div>
          <div className="landscapeFx" style={{transform: "skew(30deg)"}}></div>
          <div className="landscapeFxNull"></div>
          <div className="landscapeFx"></div>
        </div>
    </div>
  </>
  )
}

export default Landscape;