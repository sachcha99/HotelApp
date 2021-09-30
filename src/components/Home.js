import React, { useState } from 'react'
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Button } from 'reactstrap';
import { Carousel } from 'react-bootstrap';
import HomeSlide2 from './Images/HomeSlide1.jpg'
import HomeSlide1 from './Images/HomeSlide2.jpg'
import HomeSlide3 from './Images/HomeSlide3.jpg'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import coverSection from './Images/coverSection.jpg'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

export const Home = () => {
    const [more,setMore]= useState(false)
    return (
        <div className='HomePage'>
            <Header />
            <div>

                <Carousel interval={4000} pause={false}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={HomeSlide1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <div className="conf-MainTitle"> Hotel <text style={{ color: "green" }}><br />Lemon</text> Tree </div>
                            <p>Enjoy your happiness</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={HomeSlide2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <div className="conf-MainTitle"> Hotel <text style={{ color: "green" }}>Lemon</text> Tree </div>
                            <p>Enjoy your happiness</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={HomeSlide3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <div className="conf-MainTitle"> Hotel <text style={{ color: "green" }}><br />Lemon</text> Tree </div>
                            <p>Enjoy your happiness</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="home-item1">
                <div style={{ fontSize: '40px', textAlign: 'center' }}> Hotel <text style={{ color: "green" }}>Lemon</text> Tree </div>

            </div>
            <div style={{ fontSize: '20px', paddingLeft: '150px', lineHeight: '35px', paddingRight: '150px', textAlign: 'center' }} >
                Revel in our histories. Chase our mysteries. Discover extraordinary places. Unwind in our spaces. At Lemon Tree Hotels, we promise you are in good hands. With the largest family of hotels and villas across Sri Lanka, we are delighted to welcome you into our homes found on the mountains to the coastline, and everywhere else in between.
                <br />
                {more &&
                    <div >
                        Our legendary hospitality is one that we are truly proud of, and will forever remain synonymous with our name - wherever you may cross paths with us on your travels far and wide.

                        Our spaces have also been designed to seamlessly blend the finest of Sri Lankan hospitality with the nature of our surroundings, creating atmospheres of undiscovered luxury that you will find hard to match. With rooms that draw you into a world of their own, and signature dining experiences that transport you to a world beyond, your stay with us is a stay to remember. No matter how long you choose to spend with our family, we will always welcome you with open arms and a tropical embrace to make you feel at home.

                        As you explore our island, the smiles of our people will accompany you through the many natural spectacles and historical wonders on your journey. And although our home may hold fascinating legacies, it is also an exotic habitat that we carefully preserve for the future. It is one we share not only with the world, but also with each other – and this is what binds us together as a nation of warmth and compassion.

                        Through uncharted lands or world-famous destinations, our eternal spirit of Sri Lankan hospitality is one that is refreshingly contagious, in the best way possible. For it begins and ends with a simple blessing bestowed upon each and every one of you when you set foot on our land:

                        <br />
                        Ayubowan – may you live long!
                    </div>}

                <Button className="readMore" onClick={() => { setMore(!more) }}> Read More {more ? <ArrowDropUpIcon /> : <KeyboardArrowDownIcon />} </Button>
            </div>
            <div className="home-item1">
                <div style={{ fontSize: '40px', textAlign: 'center' }}> Fantastic   <text style={{ color: "green" }}>Global </text>Offers From Us </div>

            </div>
            <img
                className="d-block w-100"
                src={coverSection}
                alt="cover"
            />

            <div>
                <h2 className="contactTitle">Come and Enjoy</h2>

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8093395.500776968!2d78.52073801034562!3d7.910392422254003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f813dafbda5d%3A0x15df952d9ff0703!2sLemon%20Tree%20Hotel%2C%20Coimbatore!5e0!3m2!1sen!2slk!4v1632167596811!5m2!1sen!2slk"
                    style={{
                        width: "100%",
                        height: "450px",
                        frameBorder: "0",
                        style: "border:0;",
                        allowFullScreen: "",
                        tabIndex: "0"
                    }}

                />
            </div>
            <Footer />
        </div>
    )
}
