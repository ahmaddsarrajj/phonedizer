import React, { useRef } from "react";
import { FaTruck  } from "react-icons/fa";
import Fade from 'react-reveal/Fade';

const ContactInfo = () => {
  let iconColor = {
    color: "#077495",
    fontSize : "40px"
  }
  let subt ={
    fontSize : "25px",
    textAlign : "center",
    marginBottom : "30px",
    color: "#077495"
  }
  let font ={
    color: "#077495"
  }

  

  return (
    <div className="contactInfo container bg-with-black">
      <div className="row rowStart reveal"  >
       <Fade bottom> <div style={subt}>
          Our services
        </div>
        </Fade>
        <Fade right>
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-phone-alt" style={iconColor}></i>
            </div>
            <h5 style={font}>whatsapp</h5>
             <p style={{textAlign : 'center'}}>contact us and order via whatsapp</p> 
          </div>
        </div>
        </Fade>
        <Fade left>
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <a href="#">
                <FaTruck  style={iconColor}/>
              </a>
            </div>
            <h5 style={font}>Delivery available</h5>
            <p style={{textAlign : 'center'}}>Your order is delivered to your door</p>
          </div>
        </div>
        </Fade>
      </div>
    </div>
  );
};

export default ContactInfo;
