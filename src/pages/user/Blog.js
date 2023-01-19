import React from "react";
import NavBar from "./NavBar";
import Card from 'react-bootstrap/Card';

import Img1 from '../../assets/img/amitnarainCover.png'
import '../../assets/css/blog.css'
const Blog = () => {

    return(
        <>
            <NavBar/>
            <h3 className="header">CHOCOLATIER AMIT NARAIN</h3>
            <div className="blogContainer">
                <img className="blogImg" src={Img1} alt="" />
                <div className="blogText">
                    <p>Management Graduate from IMT Ghaziabad , Worked with Corporates like Reliance Telecom/ TATA Tele Services for over 20 years & having an work-ex of over 26 years, am now back to my home Town Jabalpur , in 2019 to re-live my innings & be a support to parents during their old age period. I am a Chocolatier by profession, trained and certified at CHOCOLATE ACADEMY, Mumbai. A proud owner of Start-up Bites Chocolate Delights, Jabalpur, deals in Homemade Chocolates customised gift packs & personalised orders with door step delivery solutions for Birthday, Anniversary, parties, Personal, occasions, festivals & more.</p><br/>

                    <p>Struggling for over a period of last 2 years to establish our presence, we now proudly service our regular clientele at Institutions, Schools, Automobile Dealers & Corporate sector across Jabalpur & suburb locations. We also have D2C presence across India & Abroad. We happily & passionately create customized Chocolate Gift Boxes for our clients /customers with branding, Logos, Photos collage. We do have Wedding collection of Chocolate Gift boxes as well with customised designs & variety to choose from.</p><br />

                    <p>We also provide Corporate with customised gifts under the banner “Icreate impressions" a 
                                unit of Bites Chocolate Delights, Jabalpur.
                                Our speciality is to make variety of Homemade Chocolates, Truffles, Bars, Rochers, and 
                                Bark. Pan Chocolate is one of our specialties as after meal assortment. With our learning & experience over the period of 26 years, especially in ecommerce, We 
                                have an expertise to transit melt free safe for all 365 days across all over India during 
                                festivals, birthday, anniversary & other occasions. <br/>
                                Finally, our aim is to establish a cool family place where you can enjoy eating live Chocolate 
                                of multi-variety & of your choice on order along with your family & friends. 
                                We wish you all happy festive & a Chocolate Day all along.</p><br />
                    
                    <p>Thank you,<br/>Chocolatier Amit Narain</p>

                </div>
            </div>
        </>
    )
}

export default Blog;