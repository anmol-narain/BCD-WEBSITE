import { Carousel } from "bootstrap";
import React from "react";
import CarouselComp from "./CarouselComp";

import '../../assets/css/home.css'
import NavBar from "./NavBar";

class Home extends React.Component {
    render(){
        return(
            <div>
                <NavBar/>
                <div id="home">
                    <div className="homeContainer">
                        <div className="headerText">
                            <p>Chocolatier Amit Narain</p>
                            <h1>Welcome To <br/>Bites Chocolate Delights</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;