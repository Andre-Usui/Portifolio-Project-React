import Button from './Button'

function Header(){
  return(
    <>
      <div className="header">
        <h1>André<strong>Usui</strong></h1>
        <div>
          <Button
            class="headerButton"
            name="Home"
            link="#landscape"        
            />
          <Button
            class="headerButton"  
            name="Playground"
            link="#playground"        
          />
          <Button
            class="headerButton"  
            name="Contact me"
            link="#contactMe"        
          />
          <Button
            class="headerButton"  
            name="More about me"
            link="#moreAbout"        
          />
          <Button
            class="headerButton"  
            name="GitHub"
            link="https://github.com/Andre-Usui"
          />
        </div>
      </div>
    </>
  )
}

export default Header;