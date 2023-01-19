import React from "react";

import NavBar from "./NavBar";
import Figure from 'react-bootstrap/Figure';

import Img1 from '../../assets/img/1.png'
import Img2 from '../../assets/img/2.png'
import Img3 from '../../assets/img/3.png'
import Img4 from '../../assets/img/4.png'
import Img5 from '../../assets/img/5.png'
import Img6 from '../../assets/img/6.png'

import '../../assets/css/gallery.css'

const rows = [
    {
      "id":1,
      "name":"Heart Chocolate Red",
      "img":Img1
    },
    {
      "id":2,
      "name":"Heart Chocolate Black",
      "img":Img2
    },
    {
      "id":3,
      "name":"Choco Bar Heart Pack",
      "img":Img3
    },
    {
      "id":4,
      "name":"Assorted Chocolate Pack",
      "img":Img4
    },
    {
        "id":5,
        "name":"Dark Chocolate BAR",
        "img":Img5
    },
    {
        "id":6,
        "name":"Mini Chocolate Hamper",
        "img":Img6
    }
];

let Gallery = () =>{
    return (
        <>
        <NavBar/>
        <div className="galleryContainer">
            <h3 className="header">CORPORATE CHOCOLATE BOXES</h3>
            <div className="grid">
                {
                    rows.map((row)=>(
                        <Figure>
                            <Figure.Image
                                width={350}
                                height={350}
                                alt="171x180"
                                src={row.img}
                            />
                        </Figure>
                    ))
                }
            </div>
            <h3 className="header">DIWALI CHOCOLATE BOXES</h3>
            <div className="grid">
                {
                    rows.map((row)=>(
                        <Figure>
                            <Figure.Image
                                width={350}
                                height={350}
                                alt="171x180"
                                src={row.img}
                            />
                        </Figure>
                    ))
                }
            </div>
            <h3 className="header">RAKSHABANDHAN CHOCOLATE BOXES</h3>
            <div className="grid">
                {
                    rows.map((row)=>(
                        <Figure>
                            <Figure.Image
                                width={350}
                                height={350}
                                alt="171x180"
                                src={row.img}
                            />
                        </Figure>
                    ))
                }
            </div>
            <h3 className="header">CHRISTMAS CHOCOLATE BOXES</h3>
            <div className="grid">
                {
                    rows.map((row)=>(
                        <Figure>
                            <Figure.Image
                                width={350}
                                height={350}
                                alt="171x180"
                                src={row.img}
                            />
                        </Figure>
                    ))
                }
            </div>
            <h3 className="header">VALENTINES DAY CHOCOLATE BOXES</h3>
            <div className="grid">
                {
                    rows.map((row)=>(
                        <Figure>
                            <Figure.Image
                                width={350}
                                height={350}
                                alt="171x180"
                                src={row.img}
                            />
                        </Figure>
                    ))
                }
            </div>
            <h3 className="header">CHOCOLATE BOXES</h3>
            <div className="grid">
                {
                    rows.map((row)=>(
                        <Figure>
                            <Figure.Image
                                width={350}
                                height={350}
                                alt="171x180"
                                src={row.img}
                            />
                        </Figure>
                    ))
                }
            </div>
        </div>
        </>
    )
}

export default Gallery;