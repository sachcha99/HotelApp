import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import rep1 from "../Images/room1.jpeg"
import rep2 from "../Images/room2.jpeg"
import rep3 from "../Images/room3.jpeg"
import rep4 from "../Images/room4.jpeg"
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
                In the buzzing beachside, resort amenities of the cosiest kind are yours at our deluxe rooms with all the comforts you need. Bold colours paint bright cheer in the décor reflecting the vibrant surrounds.
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
                    <div style={{ color: "#0d0d0a", marginLeft: "15px" }}> LKR :15000.00 </div>
                  </ListItemIcon>
                </div>



                <div className="roomBtn" >
                  <Button variant="primary" className="roomBtn2" onClick={ReadMoreBtn} >Read more</Button>
                  <RoomBookingForm />
                </div>

              </Card.Body>
            </div>
          </Card>
        </div>

        <br></br>
        

        {readmore ? <RoomDetails /> : ""}















        <div className="roomCard">

          <Card style={{ width: "80%", margin: "20px" }}>


            <div className="roomFlex">



              <img className="roomImage1" src={rep2} alt="sdfd" />
              <Card.Body>
                <div className="roomTitleFlex">
                  <Card.Title className="roomTitle">Deluxe Room Ocean Facing</Card.Title>
                </div>
                <Card.Text className="roomDesc">
                In the buzzing beachside, resort amenities of the cosiest kind are yours at our deluxe rooms with all the comforts you need. Bold colours paint bright cheer in the décor reflecting the vibrant surrounds.
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
                    <div style={{ color: "#0d0d0a", marginLeft: "15px" }}> LKR :20000.00 </div>
                  </ListItemIcon>
                </div>



                <div className="roomBtn" >
                  <Button variant="primary" className="roomBtn2" onClick={ReadMoreBtn} >Read more</Button>
                  <RoomBookingForm />
                </div>

              </Card.Body>
            </div>
          </Card>
        </div>

        <br></br>
        

        {readmore ? <RoomDetails /> : ""}








        <div className="roomCard">

          <Card style={{ width: "80%", margin: "20px" }}>


            <div className="roomFlex">



              <img className="roomImage1" src={rep3} alt="sdfd" />
              <Card.Body>
                <div className="roomTitleFlex">
                  <Card.Title className="roomTitle">Deluxe Bed Room Suite City View</Card.Title>
                </div>
                <Card.Text className="roomDesc">
                In the buzzing beachside, resort amenities of the cosiest kind are yours at our deluxe rooms with all the comforts you need. Bold colours paint bright cheer in the décor reflecting the vibrant surrounds.
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
                    <div style={{ color: "#0d0d0a", marginLeft: "15px" }}> LKR :25000.00 </div>
                  </ListItemIcon>
                </div>



                <div className="roomBtn" >
                  <Button variant="primary" className="roomBtn2" onClick={ReadMoreBtn} >Read more</Button>
                  <RoomBookingForm />
                </div>

              </Card.Body>
            </div>
          </Card>
        </div>

        <br></br>
        

        {readmore ? <RoomDetails /> : ""}








        <div className="roomCard">

          <Card style={{ width: "80%", margin: "20px" }}>


            <div className="roomFlex">



              <img className="roomImage1" src={rep4} alt="sdfd" />
              <Card.Body>
                <div className="roomTitleFlex">
                  <Card.Title className="roomTitle">Deluxe Bed Room Suite Ocean View</Card.Title>
                </div>
                <Card.Text className="roomDesc">
                In the buzzing beachside, resort amenities of the cosiest kind are yours at our deluxe rooms with all the comforts you need. Bold colours paint bright cheer in the décor reflecting the vibrant surrounds.
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
                    <div style={{ color: "#0d0d0a", marginLeft: "15px" }}> LKR :30000.00 </div>
                  </ListItemIcon>
                </div>



                <div className="roomBtn" >
                  <Button variant="primary" className="roomBtn2" onClick={ReadMoreBtn} >Read more</Button>
                  <RoomBookingForm />
                </div>

              </Card.Body>
            </div>
          </Card>
        </div>

        <br></br>
        

        {readmore ? <RoomDetails /> : ""}
        </div>
        
      </div>

      );
};
