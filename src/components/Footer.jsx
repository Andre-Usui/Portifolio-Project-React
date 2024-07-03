function Footer(){
  var year = new Date().getFullYear();
  return(

    <div id="footer">
      <p>©Copyright {year}. All rights reserved.</p>
    </div>
  )
}

export default Footer;