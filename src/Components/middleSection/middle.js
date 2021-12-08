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
                <h3><span className="heading-third">I'm </span> SHEFALI KANOJIA</h3>
                <h3>FRONTEND ENTUASTIC</h3>
                <i class="fa fa-github icons"></i>
                <i class="fab fa-linkedin icons"></i>
                <i class="fab fa-twitter icons"></i>
              
                
                
            </div>
            <img src={illustration1} ></img>
            
        </section>
    )
}
export default Middle;