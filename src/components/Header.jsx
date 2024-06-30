import Button from './Button'

function Header(){
  return(
    <>
      <div className="header">
        <h1>React Playground of André Usui</h1>
        <div>
          <Button
            name="Home"
            goToId="#landscape"        
            />
          <Button
            name="Playground"
            goToId="#playground"        
          />
          <Button
            name="Contact me"
            goToId="#contactMe"        
          />
          <Button
            name="More about me"
            goToId="#moreAbout"        
          />
          <Button
            name="GitHub"
            goToId="https://github.com/Andre-Usui"
          />
        </div>
      </div>
    </>
  )
}

export default Header;