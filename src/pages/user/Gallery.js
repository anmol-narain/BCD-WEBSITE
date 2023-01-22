import React from "react";

import NavBar from "./NavBar";
import Figure from 'react-bootstrap/Figure';

import Img1 from '../../assets/img/rakhi1.png'
import Img2 from '../../assets/img/rakhi2.png'
import Img3 from '../../assets/img/rakhi3.png'
import Img4 from '../../assets/img/rakhi4.png'
import Img5 from '../../assets/img/rakhi5.png'
import Img6 from '../../assets/img/6.png'

import DImg1 from '../../assets/img/d1.png'
import DImg2 from '../../assets/img/d2.png'
import DImg3 from '../../assets/img/d3.png'
import DImg4 from '../../assets/img/d4.png'
import DImg5 from '../../assets/img/d5.png'
import DImg6 from '../../assets/img/d6.png'

import VImg1 from '../../assets/img/v1.png'
import VImg2 from '../../assets/img/v2.png'
import VImg3 from '../../assets/img/v3.png'
import VImg4 from '../../assets/img/v4.png'
import VImg5 from '../../assets/img/v5.png'
import VImg6 from '../../assets/img/v6.png'
import VImg7 from '../../assets/img/v7.png'

import CImg1 from '../../assets/img/c1.png'
import CImg2 from '../../assets/img/c2.png'
import CImg3 from '../../assets/img/c3.png'
import CImg4 from '../../assets/img/c4.png'

import WBImg1 from '../../assets/img/wb1.png'
import WBImg2 from '../../assets/img/wb2.png'
import WBImg3 from '../../assets/img/wb3.png'
import WBImg4 from '../../assets/img/wb4.png'

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
const diwalirows = [
    {
      "id":1,
      "name":"Heart Chocolate Red",
      "img":DImg1
    },
    {
      "id":2,
      "name":"Heart Chocolate Black",
      "img":DImg2
    },
    {
      "id":3,
      "name":"Choco Bar Heart Pack",
      "img":DImg3
    },
    {
      "id":4,
      "name":"Assorted Chocolate Pack",
      "img":DImg4
    },
    {
        "id":5,
        "name":"Dark Chocolate BAR",
        "img":DImg5
    },
    {
        "id":6,
        "name":"Mini Chocolate Hamper",
        "img":DImg6
    }
];
const valentinerows = [
    {
      "id":1,
      "name":"Heart Chocolate Red",
      "img":VImg1
    },
    {
      "id":2,
      "name":"Heart Chocolate Black",
      "img":VImg2
    },
    {
      "id":3,
      "name":"Choco Bar Heart Pack",
      "img":VImg3
    },
    {
      "id":4,
      "name":"Assorted Chocolate Pack",
      "img":VImg4
    },
    {
        "id":5,
        "name":"Dark Chocolate BAR",
        "img":VImg5
    },
    {
        "id":6,
        "name":"Mini Chocolate Hamper",
        "img":VImg6
    },
    {
        "id":7,
        "name":"Mini Chocolate Hamper",
        "img":VImg7
    }
];
const christmasrows = [
    {
      "id":1,
      "name":"Heart Chocolate Red",
      "img":CImg1
    },
    {
      "id":2,
      "name":"Heart Chocolate Black",
      "img":CImg2
    },
    {
      "id":3,
      "name":"Choco Bar Heart Pack",
      "img":CImg3
    },
    {
      "id":4,
      "name":"Assorted Chocolate Pack",
      "img":CImg4
    }
];
const wbrows = [
    {
      "id":1,
      "name":"Heart Chocolate Red",
      "img":WBImg1
    },
    {
      "id":2,
      "name":"Heart Chocolate Black",
      "img":WBImg2
    },
    {
      "id":3,
      "name":"Choco Bar Heart Pack",
      "img":WBImg3
    },
    {
      "id":4,
      "name":"Assorted Chocolate Pack",
      "img":WBImg4
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
                    diwalirows.map((diwalirow)=>(
                        <Figure>
                            <Figure.Image
                                width={350}
                                height={350}
                                alt="171x180"
                                src={diwalirow.img}
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
                    christmasrows.map((christmasrow)=>(
                        <Figure>
                            <Figure.Image
                                width={350}
                                height={350}
                                alt="171x180"
                                src={christmasrow.img}
                            />
                        </Figure>
                    ))
                }
            </div>
            <h3 className="header">VALENTINE'S DAY CHOCOLATE BOXES</h3>
            <div className="grid">
                {
                    valentinerows.map((vrow)=>(
                        <Figure>
                            <Figure.Image
                                width={350}
                                height={350}
                                alt="171x180"
                                src={vrow.img}
                            />
                        </Figure>
                    ))
                }
            </div>
            <h3 className="header">WEDDING CHOCOLATE BOXES</h3>
            <div className="grid">
                {
                    wbrows.map((wbrow)=>(
                        <Figure>
                            <Figure.Image
                                width={350}
                                height={350}
                                alt="171x180"
                                src={wbrow.img}
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