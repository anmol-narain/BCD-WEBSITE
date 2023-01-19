import React, { useState } from "react";
import NavBar from "./NavBar";
import '../../assets/css/testimonials.css'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';

import Img1 from '../../assets/img/test1.png'
import Img2 from '../../assets/img/test2.png'
import Img3 from '../../assets/img/test3.png'
import Img4 from '../../assets/img/test4.jpg'
import Img5 from '../../assets/img/test5.jpg'
import Img6 from '../../assets/img/test6.jpg'
import Img7 from '../../assets/img/test7.png'
import Img8 from '../../assets/img/test8.png'
import Img9 from '../../assets/img/test9.png'
import Img10 from '../../assets/img/test10.png'
import Img11 from '../../assets/img/test11.jpeg'

const rows = [
    {
      "id":1,
      "name":"Vishwanath Krishnamoorthy",
      "text":"Bites chocolates over the past two years has further increased our love for good chocolates. The exotic varieties from Bites is a refreshing alternatives to known commercial brands. Fresh and safe ingredients, value for money has made sure we get our regular stocks from Bites and no longer from supermarket.  No preservatives and only high quality ingredients. Trust that makes us share with all to try and enjoy Bites Chocolates.  Thank you for the lovely chocolates.  Our favourite and only brand of choice for chocolates",
      "img":Img1
    },
    {
      "id":2,
      "name":"Shubhra Saxena",
      "text":"Amazing Experience! Must buy! Fabulously crafted handmade chocolates that just melt in your mouth.. Amazing variety of flavors and packaging in all price ranges!",
      "img":Img2
    },
    {
      "id":3,
      "name":"Rajesh P S",
      "text":"Amit, got the eagerly awaited chocolates today. As we had discussed, I have a very specific taste requirement and generally don't like home made chocolates.I was really happy that you sent the custom made chocolate box to me. The chocolate tasted exactly the way I wanted it to. Its great to know that you can customise the chcoclates as per customers requirement.    Really loved it and would love to order more of the same in the coming months. I am sure you would make the sandwitch chocolate as well I asked for 😊😊",
      "img":Img3
    },
    {
      "id":4,
      "name":"Aakash Bajpai",
      "text":"One of the best chocolates I have ever tasted. I got to know about this company from my friends and it was worth while trying it. They have a lot of varieties and believe me they have the best quality of every product available though my favorite is still Paan chocolate. They also have customized and cost efficient packs... I highly recommend to all the viewer to try it and fall in love with the chocolate delight. 😍",
      "img":Img4
    },
    {
      "id":5,
      "name":"Anupama Channan",
      "text":"Excellent quality of chocolates! Very delicious really appreciated by all. Very efficiently and timely sent to destination anywhere in India. Has made celebrating occasions easy. Affordable too.",
      "img":Img5
    },
    {
      "id":6,
      "name":"Drishti Samajik Sansthan",
      "text":"We found the chocolates excellent. Our 252 Special Children truly liked the taste. The packaging too was unique.Will like to have it again.",
      "img":Img6
    },
    {
      "id":7,
      "name":"Anand Chadha",
      "text":"Tasty Chocolates in different varieties delivered on time in beautiful packing.Must Gift for all happy occasions.",
      "img":Img7
    },
    {
      "id":8,
      "name":"Parimal Chaturvedi",
      "text":"It's awesome in this cheap price. The taste is great and packing is too good. Love to order again. Keep going",
      "img":Img8
    },
    {
      "id":9,
      "name":"Gyanendra Singh",
      "text":"One of the best handmade Chocolates had today. When i heard story how they made, its really amazing and most important Amit give perssonal attention to every order. Go for it, you will love it too,",
      "img":Img9
    },
    {
      "id":10,
      "name":"Ashutosh Rawat",
      "text":"Thanks Bites chocolate for baking these tasty and yummy delights. You have surely onboarded me for a long association with my first order only. The post sales service and regular updates on the packet tracking were truly a customer delight as well. Keep baking love in lives of people. Thanks 😊",
      "img":Img10
    },
    {
      "id":11,
      "name":"Ashok Thakur VP, KIA khatwani",
      "text":"We have been giving to our Kia Khatwani customers at the time of delivery; Customers n their families are delighted with these chocolate boxes. The taste n quality are very nice  n worth it.All the best team Bites Chocolate..keep the good taste n quality continues in long run.Best wishes 👍👏👏",
      "img":Img11
    }
];

let TestimonialComp = () => {
    return(
        <>
            <NavBar/>
            <div className="Container">
                <h1>TESTIMONIALS</h1>
                <div className="cardsContainer">
                {
                  rows.map((row)=>(
                        <Card key={row.id} className="card" style={{ width: '18rem' }}>
                            <Card.Img className="cardImg" variant="top" src={row.img} />
                            <Card.Body>
                                <Card.Title>{row.name}</Card.Title>
                                <Card.Text>{row.text}</Card.Text>
                            </Card.Body>
                        </Card>
                    ))
                }    
                </div>
            </div>
        </>
    )
}

export default TestimonialComp;