import { Carousel } from "bootstrap";
import React from "react";
import CarouselComp from "./CarouselComp";
import NavBar from "./NavBar";

class Home extends React.Component {
    render(){
        return(
            <div>
                <NavBar/>
                <CarouselComp/>
            </div>
        )
    }
}

export default Home;