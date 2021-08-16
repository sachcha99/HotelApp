import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import rep1 from "../Images/room1.jpeg"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import WifiRoundedIcon from '@material-ui/icons/WifiRounded';
import KingBedRoundedIcon from '@material-ui/icons/KingBedRounded';
import SquareFootRoundedIcon from '@material-ui/icons/SquareFootRounded';
import SupervisorAccountRoundedIcon from '@material-ui/icons/SupervisorAccountRounded';
import StarRateRoundedIcon from '@material-ui/icons/StarRateRounded';
import { RoomDetails } from "./RoomDetails";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import React, { useState, useEffect } from 'react';
import { RoomBookingForm } from "../Rooms/RoomBookingForm";
import Title from "../header/Title";
import image from '../Images/rroom.jpg'




export const RoomList = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [readmore, setReadmore] = useState(false);

  const ReadMoreBtn = () => {
    setReadmore(!readmore)
  }
  return (
    <div>
      <Header />
      <Title className="PicTitileRoomReserve" title="Reserve a Room" />
      <img className="headerPic" src={image} />
      <div className="mainBgPic">
        <h3 className="repMTitle">Our Room List</h3>
        <hr className="hr1"></hr>
        <div className="roomCard">

          <Card style={{ width: "80%", margin: "20px" }}>


            <div className="roomFlex">



              <img className="roomImage1" src={rep1} alt="sdfd" />
              <Card.Body>
                <div className="roomTitleFlex">
                  <Card.Title className="roomTitle">Luxury Room City View</Card.Title>
                </div>
                <Card.Text className="roomDesc">
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content The Grand Banquet Hall is the largest hall in Brighten Hotels. The hall is ideal for weddings, birthday parties, engagements, receptions, corporate events etc..
                </Card.Text>


                <ListItemIcon>
                  <SquareFootRoundedIcon style={{ color: "#454c61", marginLeft: "20px" }} /><div className="roomIconList"  >35 Sq Mt</div>
                </ListItemIcon>
                <ListItemIcon>
                  <WifiRoundedIcon style={{ color: "#454c61", marginLeft: "20px" }} /><div className="roomIconList"  >Complimentary WiFi</div>
                </ListItemIcon>

                <br></br>
                <ListItemIcon>
                  <KingBedRoundedIcon style={{ color: "#454c61", marginLeft: "20px" }} /><div className="roomIconList"  >Twin/Queen</div>
                </ListItemIcon>


                <ListItemIcon>
                  <SupervisorAccountRoundedIcon style={{ color: "#454c61", marginLeft: "20px" }} /><div className="roomIconList"  >Up to 3 guests</div>
                </ListItemIcon>

                <br></br> <br></br>

                <div className="roomCostFlex">
                  <ListItemIcon>
                    <StarRateRoundedIcon style={{ color: "#827700", marginLeft: "20px" }} /> Uninterrupted view of the twinkling pool and city
                  </ListItemIcon>

                  <ListItemIcon className="roomCost">
                    <div style={{ color: "#0d0d0a", marginLeft: "15px" }}> LKR :1500.00 </div>
                  </ListItemIcon>
                </div>



                <div className="roomBtn" >
                  <Button variant="primary" className="roomBtn2" onClick={ReadMoreBtn} >Read more</Button>
                  <RoomBookingForm handleClose={handleClose} setShow={setShow} show={show} handleShow={handleShow} />
                  
            <Button variant="primary" className="roomBtn1" onClick={handleShow} >Check Availability</Button>

                </div>

              </Card.Body>
            </div>
          </Card>
        </div>

        <br></br>
        {/* <div className="roomReadMore">
          <div>
      <div className="repFeaTitle">ROOM DETAILS</div>
            
            <List component="nav" aria-label="main mailbox folders">
            
          <ListItemIcon>
            The large rooms are a luxurious retreat in the middle of the city,<br></br> with captivating views of Colombo’s vibrant streets.
          </ListItemIcon>
        
        <br/>
        <div className="repFeaTitle">SIZE</div>
        <ListItemIcon>
            35 Sq Mt
          </ListItemIcon>
        
        <br/>
        <div className="repFeaTitle">SIGNATURE FEATURE</div>
        <ListItemIcon>
          Theatre style and table set-up arrangements
          </ListItemIcon>
        
        <br/>
        <div className="repFeaTitle">Occupancy Details</div>
        <ListItemIcon>
            Cushion chairs with choice of covers and bows
          </ListItemIcon>
        
       
          
        
      </List>


      </div>







      <div>

      <div className="repFeaTitle">BED & BATH</div>
            
            <List component="nav" aria-label="main mailbox folders">
            
          <ListItemIcon>
            Premium wood ceiling
          </ListItemIcon>
        
        <br/>

        <ListItemIcon>
            nobstructed view from any angle
          </ListItemIcon>
        
        <br/>
        <ListItemIcon>
            Theatre style and table set-up arrangements
          </ListItemIcon>
        
        <br/>
        <ListItemIcon>
         Cushion chairs with choice of covers and bows
          </ListItemIcon>
        
        <br/>
        <ListItemIcon>
            Choice of theme light colours
          </ListItemIcon>
        
        <br/>
        <ListItemIcon>
            Fully Air-conditioned
          </ListItemIcon>
        
        <br/>
          
        
      </List>
      </div>











      <div>
      <div className="repFeaTitle">OTHER CONVENIENCES</div>
            
            <List component="nav" aria-label="main mailbox folders">
            
          <ListItemIcon>
          24-hour in-room dining Premium Wi-Fi at nominal charge
          </ListItemIcon>
        
        <br/>

        <ListItemIcon>
        Premium Wi-Fi at nominal charge
          </ListItemIcon>
        
        <br/>
        <ListItemIcon>
            DVD player DVDs on request
          </ListItemIcon>
        
        <br/>
        <ListItemIcon>
        Complimentary newspapers
          </ListItemIcon>
        
        <br/>
        <ListItemIcon>
        Cordless telephones with voicemail and data capabilities
          </ListItemIcon>
        
        <br/>
        <ListItemIcon>
        32-inch flat-screen LCD TV
          </ListItemIcon>
        
        <br/>
          
        
      </List>


      </div>


      </div>
       */}

        {readmore ? <RoomDetails /> : ""}
        </div>
      </div>

      );
};
