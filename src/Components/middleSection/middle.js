import React from 'react'
import './middle.css'
import illustration1 from'../../Images/Version control-pana (1).png'
function Middle() {
    return (
       
        <section class="mid-sec" >
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
           
            <div className="text">
            
                <h5>Hii, Amigos!</h5>
                <h3><span className="heading-third">I'M </span> SHEFALI KANOJIA</h3>
                <div className="wrapper">
                    <ul className="dynamicText">
                        
                        <li>WEB DEVELOPER</li>
                        <li> DEVOPS & BLOCKCHAIN ENTHUSIAST</li>
                        <li>COMPETITIVE PROGRAMMER</li>
                        <li>OPEN SOURCE CONTRIBUTOR</li>
                        
                    </ul>
                    
                </div>
                <h6>Connect with me on</h6>
                <a href="https://github.com/shefali12-ab"><i class="fa fa-github footericon"></i> </a>
            <a href="https://www.linkedin.com/in/shefalik16/"><i class="fab fa-linkedin footericon"></i></a>
            <a href="https://twitter.com/shefali_kanojia"><i class="fab fa-twitter footericon"></i></a>
            
            
              
                
                
            </div>
            <img src={illustration1} ></img>
            
        </section>
    )
}
export default Middle;