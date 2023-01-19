import React from "react";
import NavBar from "./NavBar";

import '../../assets/css/contactUs.css'
import {FaWhatsapp,FaInstagramSquare,FaFacebookSquare,FaLinkedin} from "react-icons/fa";
import ReactWhatsapp from 'react-whatsapp'; 

let ContactComp = () => {
    return(
        <>
            <NavBar/>
            <h1 className="header">Let's Get In Touch</h1>
            <div className="contactContainer">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.2138819994657!2d79.94082841504995!3d23.198874784864113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981afbe311a0b97%3A0xf9eaa8997e8ff97a!2sBites%20Chocolate%20Delights!5e0!3m2!1sen!2sin!4v1674123135383!5m2!1sen!2sin" 
                width="600" 
                height="450" 
                style={{border: "0"}} 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
                className="map">
                </iframe>
                <div className="btnConatiner"> 
                    <div className="info">
                        <FaWhatsapp style={{color: 'green', fontSize: '37px'}}/>
                        <h3 >+91-9212104999</h3>
                    </div>
                    <div className="info">
                        <FaFacebookSquare style={{color: 'blue', fontSize: '37px'}}/>
                        <h3 >Bites Chocolate Delights</h3>
                    </div>
                    <div className="info">
                        <FaInstagramSquare style={{color: 'purple', fontSize: '37px'}}/>
                        <h3 >bites_chocolate_delights</h3>
                    </div>
                    <div className="info">
                        <FaLinkedin style={{color: 'blue', fontSize: '37px'}}/>
                        <h3 >Bites Chocolate Delights</h3>
                    </div>
                </div>
                
            </div>
        </>
    )
}
export default ContactComp;