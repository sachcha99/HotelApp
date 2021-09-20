import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import rep1 from "../Images/reception4.jpg"
import rep2 from "../Images/reception5.jpg"
import rep3 from "../Images/reception2.jpg"
import rep4 from "../Images/reception3.jpg"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import SquareFootRoundedIcon from '@material-ui/icons/SquareFootRounded';
import ChevronRightOutlinedIcon from '@material-ui/icons/ChevronRightOutlined';
import GroupRoundedIcon from '@material-ui/icons/GroupRounded';
import RoomRoundedIcon from '@material-ui/icons/RoomRounded';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import React from "react";
import { ReceptionHallBookingForm } from "../RecepitionHall/ReceptionHallBookingForm";
import Title from "../header/Title";
import image from '../Images/rreception1.jpg'
import PageLoaderTimeOut from "../Preloader/PageLoaderTimeOut";

export const RecepitonHallList = () => {

  
  return (
    <div>
      
      <Header />
      <PageLoaderTimeOut/>
      {/* <div className="PicTitileHallReserve">Reserve a ReceptionHall</div> */}
      <Title className="PicTitileRoomReserve" title="Reserve a Reception Hall" />
      <img className="headerPic" src={image} />
      <div className="mainBgPic">
        <h3 className="repMTitle">Our Reception Hall List</h3>
        <hr className="hr1"></hr>
        
        <div className="repCard">
       
          <Card style={{ width: "70%", margin: "20px" }}>
          <div className="img-wrapper">
            <img className="repImage1" src={rep4} alt="sdfd" />
</div>
            <Card.Body id="repcard-body">
              <div className="repTitleFlex">
                <Card.Title className="repTitle">Grand Ballroom</Card.Title>
              </div>
              <Card.Text className="repDesc">
              Upholding its reputation to the name, the grandest venue at waters edge is located on the 3rd floor, with a panoramic view of the lake and beyond. The unique column free feature ensures the largest seating capacity for a minimum of 500 guests.   </Card.Text>

              <div className="repFlex">

                <Divider />
                <List component="nav" aria-label="secondary mailbox folders">
                  <div>
                    <hr className="repListHR" />

                    <ListItemIcon>
                      <RoomRoundedIcon style={{ color: "#827c74" }} /><div className="repList"  >Location</div>
                    </ListItemIcon>
                    <div className="repListChild"  >Lobby level with lawn views</div>

                    <hr className="repListHR" />

                    <ListItemIcon>
                      <GroupRoundedIcon style={{ color: "#827c74" }} /><div className="repList"  >Occupancy</div>
                    </ListItemIcon>
                    <div className="repListChild"  >Capacity for 500 guests (seated)</div>

                    <hr className="repListHR" />

                    <ListItemIcon>
                      <SquareFootRoundedIcon style={{ color: "#827c74" }} /><div className="repList"  >Area</div>
                    </ListItemIcon>
                    <div className="repListChild"  >676 m2 or 7725 sq. ft. floor space</div>

                    <hr className="repListHR" />
                  </div>
                </List>
                <div className="repFeature">
                  <div className="repFeaTitle">Features</div>

                  <List component="nav" aria-label="main mailbox folders">

                    <ListItemIcon>
                      <ChevronRightOutlinedIcon style={{ color: "#0e992e", marginTop: "5px" }} />Premium wood ceiling
                    </ListItemIcon>

                    <br />

                    <ListItemIcon>
                      <ChevronRightOutlinedIcon style={{ color: "#0e992e", marginTop: "5px" }} />Unobstructed view from any angle
                    </ListItemIcon>

                    <br />
                    <ListItemIcon>
                      <ChevronRightOutlinedIcon style={{ color: "#0e992e", marginTop: "5px" }} />Theatre style and table set-up arrangements
                    </ListItemIcon>

                    <br />
                    <ListItemIcon>
                      <ChevronRightOutlinedIcon style={{ color: "#0e992e", marginTop: "5px" }} />Cushion chairs with choice of covers and bows
                    </ListItemIcon>

                    <br />
                    <ListItemIcon>
                      <ChevronRightOutlinedIcon style={{ color: "#0e992e", marginTop: "5px" }} />Choice of theme light colours
                    </ListItemIcon>

                    <br />
                    <ListItemIcon>
                      <ChevronRightOutlinedIcon style={{ color: "#0e992e", marginTop: "5px" }} />Fully Air-conditioned
                    </ListItemIcon>

                    <br />


                  </List>
                </div>
              </div>

              <ReceptionHallBookingForm receptionType={'Grand Ballroom'}  imageName={rep4}/>

            </Card.Body>
          </Card>
        </div>
        <hr className="hr-mainRe"/>




        <div className="repCard">

<Card style={{ width: "70%", margin: "20px" }}>

<div className="img-wrapper">
            <img className="repImage1" src={rep3} alt="sdfd" />
</div>
<Card.Body id="repcard-body">
    <div className="repTitleFlex">
      <Card.Title className="repTitle">Banquet Hall</Card.Title>
    </div>
    <Card.Text className="repDesc">
    The Grand Banquet Hall is the largest hall in Brighten Hotels. The hall is ideal for weddings, birthday parties, engagements, receptions, corporate events etc.   </Card.Text>

    <div className="repFlex">

      <Divider />
      <List component="nav" aria-label="secondary mailbox folders">
        <div>
          <hr className="repListHR" />

          <ListItemIcon>
            <RoomRoundedIcon style={{ color: "#827c74" }} /><div className="repList"  >Location</div>
          </ListItemIcon>
          <div className="repListChild"  >Lobby level with lawn views</div>

          <hr className="repListHR" />

          <ListItemIcon>
            <GroupRoundedIcon style={{ color: "#827c74" }} /><div className="repList"  >Occupancy</div>
          </ListItemIcon>
          <div className="repListChild"  >Capacity for 400 guests (seated)</div>

          <hr className="repListHR" />

          <ListItemIcon>
            <SquareFootRoundedIcon style={{ color: "#827c74" }} /><div className="repList"  >Area</div>
          </ListItemIcon>
          <div className="repListChild"  >600 m2 or 7425 sq. ft. floor space</div>

          <hr className="repListHR" />
        </div>
      </List>
      <div className="repFeature">
        <div className="repFeaTitle">Features</div>

        <List component="nav" aria-label="main mailbox folders">

          <ListItemIcon>
            <ChevronRightOutlinedIcon style={{ color: "#0e992e", marginTop: "5px" }} />Premium wood ceiling
          </ListItemIcon>

          <br />

          <ListItemIcon>
            <ChevronRightOutlinedIcon style={{ color: "#0e992e", marginTop: "5px" }} />Unobstructed view from any angle
          </ListItemIcon>

          <br />
          <ListItemIcon>
            <ChevronRightOutlinedIcon style={{ color: "#0e992e", marginTop: "5px" }} />Theatre style and table set-up arrangements
          </ListItemIcon>

          <br />
          <ListItemIcon>
            <ChevronRightOutlinedIcon style={{ color: "#0e992e", marginTop: "5px" }} />Cushion chairs with choice of covers and bows
          </ListItemIcon>

          <br />
          <ListItemIcon>
            <ChevronRightOutlinedIcon style={{ color: "#0e992e", marginTop: "5px" }} />Choice of theme light colours
          </ListItemIcon>

          <br />
          <ListItemIcon>
            <ChevronRightOutlinedIcon style={{ color: "#0e992e", marginTop: "5px" }} />Fully Air-conditioned
          </ListItemIcon>

          <br />


        </List>
      </div>
    </div>

    <ReceptionHallBookingForm receptionType={'Banquet Hall'} imageName={rep3}/>

  </Card.Body>
</Card>
</div>
<hr/>









<div className="repCard">

<Card style={{ width: "70%", margin: "20px" }}>
<div className="img-wrapper">
            <img className="repImage1" src={rep2} alt="sdfd" />
</div>
  <Card.Body id="repcard-body">
    <div className="repTitleFlex">
      <Card.Title className="repTitle">Sangeeth Hall</Card.Title>
    </div>
    <Card.Text className="repDesc">
    Sangeeth Hall is designed to meet relatively smaller gatherings such as birthdays, engagements, baby showers, small scale parties, receptions etc.   </Card.Text>

    <div className="repFlex">

      <Divider />
      <List component="nav" aria-label="secondary mailbox folders">
        <div>
          <hr className="repListHR" />

          <ListItemIcon>
            <RoomRoundedIcon style={{ color: "#827c74" }} /><div className="repList"  >Location</div>
          </ListItemIcon>
          <div className="repListChild"  >Lobby level with lawn views</div>

          <hr className="repListHR" />

          <ListItemIcon>
            <GroupRoundedIcon style={{ color: "#827c74" }} /><div className="repList"  >Occupancy</div>
          </ListItemIcon>
          <div className="repListChild"  >Capacity for 500 guests (seated)</div>

          <hr className="repListHR" />

          <ListItemIcon>
            <SquareFootRoundedIcon style={{ color: "#827c74" }} /><div className="repList"  >Area</div>
          </ListItemIcon>
          <div className="repListChild"  >676 m2 or 7725 sq. ft. floor space</div>

          <hr className="repListHR" />
        </div>
      </List>
      <div className="repFeature">
        <div className="repFeaTitle">Features</div>

        <List component="nav" aria-label="main mailbox folders">

          <ListItemIcon>
            <ChevronRightOutlinedIcon style={{ color: "#0e992e", marginTop: "5px" }} />Premium wood ceiling
          </ListItemIcon>

          <br />

          <ListItemIcon>
            <ChevronRightOutlinedIcon style={{ color: "#0e992e", marginTop: "5px" }} />Unobstructed view from any angle
          </ListItemIcon>

          <br />
          <ListItemIcon>
            <ChevronRightOutlinedIcon style={{ color: "#0e992e", marginTop: "5px" }} />Theatre style and table set-up arrangements
          </ListItemIcon>

          <br />
          <ListItemIcon>
            <ChevronRightOutlinedIcon style={{ color: "#0e992e", marginTop: "5px" }} />Cushion chairs with choice of covers and bows
          </ListItemIcon>

          <br />
          <ListItemIcon>
            <ChevronRightOutlinedIcon style={{ color: "#0e992e", marginTop: "5px" }} />Choice of theme light colours
          </ListItemIcon>

          <br />
          <ListItemIcon>
            <ChevronRightOutlinedIcon style={{ color: "#0e992e", marginTop: "5px" }} />Fully Air-conditioned
          </ListItemIcon>

          <br />


        </List>
      </div>
    </div>

    <ReceptionHallBookingForm receptionType={'Sangeeth Hall'} imageName={rep2}/>

  </Card.Body>
</Card>
</div>
<hr/>















<div className="repCard">

<Card style={{ width: "70%", margin: "20px" }}>
<div className="img-wrapper">
            <img className="repImage1" src={rep1} alt="sdfd" />
</div>
  <Card.Body id="repcard-body">
    <div className="repTitleFlex">
      <Card.Title className="repTitle">Queens Hall</Card.Title>
    </div>
    <Card.Text className="repDesc">
    Sangeeth Hall is designed to meet relatively smaller gatherings such as birthdays, engagements, baby showers, small scale parties, receptions etc.   </Card.Text>

    <div className="repFlex">

      <Divider />
      <List component="nav" aria-label="secondary mailbox folders">
        <div>
          <hr className="repListHR" />

          <ListItemIcon>
            <RoomRoundedIcon style={{ color: "#827c74" }} /><div className="repList"  >Location</div>
          </ListItemIcon>
          <div className="repListChild"  >Lobby level with lawn views</div>

          <hr className="repListHR" />

          <ListItemIcon>
            <GroupRoundedIcon style={{ color: "#827c74" }} /><div className="repList"  >Occupancy</div>
          </ListItemIcon>
          <div className="repListChild"  >Capacity for 500 guests (seated)</div>

          <hr className="repListHR" />

          <ListItemIcon>
            <SquareFootRoundedIcon style={{ color: "#827c74" }} /><div className="repList"  >Area</div>
          </ListItemIcon>
          <div className="repListChild"  >676 m2 or 7725 sq. ft. floor space</div>

          <hr className="repListHR" />
        </div>
      </List>
      <div className="repFeature">
        <div className="repFeaTitle">Features</div>

        <List component="nav" aria-label="main mailbox folders">

          <ListItemIcon>
            <ChevronRightOutlinedIcon style={{ color: "#0e992e", marginTop: "5px" }} />Premium wood ceiling
          </ListItemIcon>

          <br />

          <ListItemIcon>
            <ChevronRightOutlinedIcon style={{ color: "#0e992e", marginTop: "5px" }} />Unobstructed view from any angle
          </ListItemIcon>

          <br />
          <ListItemIcon>
            <ChevronRightOutlinedIcon style={{ color: "#0e992e", marginTop: "5px" }} />Theatre style and table set-up arrangements
          </ListItemIcon>

          <br />
          <ListItemIcon>
            <ChevronRightOutlinedIcon style={{ color: "#0e992e", marginTop: "5px" }} />Cushion chairs with choice of covers and bows
          </ListItemIcon>

          <br />
          <ListItemIcon>
            <ChevronRightOutlinedIcon style={{ color: "#0e992e", marginTop: "5px" }} />Choice of theme light colours
          </ListItemIcon>

          <br />
          <ListItemIcon>
            <ChevronRightOutlinedIcon style={{ color: "#0e992e", marginTop: "5px" }} />Fully Air-conditioned
          </ListItemIcon>

          <br />


        </List>
      </div>
    </div>

    <ReceptionHallBookingForm receptionType={'Queens Hall'} imageName={rep1}/>

  </Card.Body>
</Card>
</div>




<Footer/>

      </div>
    </div>
  );
};
