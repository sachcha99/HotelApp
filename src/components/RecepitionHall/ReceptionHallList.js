import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import rep1 from "../Images/rep1.jpg"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import SquareFootRoundedIcon from '@material-ui/icons/SquareFootRounded';
import ChevronRightOutlinedIcon from '@material-ui/icons/ChevronRightOutlined';
import GroupRoundedIcon from '@material-ui/icons/GroupRounded';
import RoomRoundedIcon from '@material-ui/icons/RoomRounded';

import React from "react";

export const RecepitonHallList = () => {
  return (
    <div>
        <div className="repCard">
            
      <Card  style={{ width: "70%",margin: "20px" }}>
          
        <img className="repImage1" src={rep1} alt="sdfd" />
        <Card.Body>
            <div className="repTitleFlex">
          <Card.Title className="repTitle">RECEPTION HALL 01</Card.Title>
          </div>
          <Card.Text  className="repDesc">
            Some quick example text to build on the card title and make up the
            bulk of the card's content The Grand Banquet Hall is the largest hall in Brighten Hotels. The hall is ideal for weddings, birthday parties, engagements, receptions, corporate events etc..
          </Card.Text>
        
          <div className="repFlex">
          
      <Divider />
      <List component="nav" aria-label="secondary mailbox folders">
        <div>
      <hr className="repListHR"/>
          <ListItemIcon>
            <RoomRoundedIcon style={{ color: "#827c74"} } /><div className="repList"  >Location</div>
          </ListItemIcon>
          <div className="repListChild"  >Lobby level with lawn views</div>

             <hr className="repListHR"/>

          <ListItemIcon>
            <GroupRoundedIcon style={{ color: "#827c74"} } /><div className="repList"  >Occupancy</div>
          </ListItemIcon>
          <div className="repListChild"  >Capacity for 500 guests (seated)</div>

            <hr className="repListHR"/>

          <ListItemIcon>
            <SquareFootRoundedIcon style={{ color: "#827c74"} } /><div className="repList"  >Area</div>
          </ListItemIcon>
          <div className="repListChild"  >676 m2 or 7725 sq. ft. floor space</div>
          
          <hr className="repListHR"/>
          </div>
      </List>
      <div className="repFeature">
              <div className="repFeaTitle">Features</div>
            
            <List component="nav" aria-label="main mailbox folders">
            
          <ListItemIcon>
            <ChevronRightOutlinedIcon style={{ color: "#0e992e" , marginTop:"5px"} }/>Premium wood ceiling
          </ListItemIcon>
        
        <br/>

        <ListItemIcon>
            <ChevronRightOutlinedIcon style={{ color: "#0e992e" , marginTop:"5px"} }/>Unobstructed view from any angle
          </ListItemIcon>
        
        <br/>
        <ListItemIcon>
            <ChevronRightOutlinedIcon style={{ color: "#0e992e" , marginTop:"5px"} }/>Theatre style and table set-up arrangements
          </ListItemIcon>
        
        <br/>
        <ListItemIcon>
            <ChevronRightOutlinedIcon style={{ color: "#0e992e" , marginTop:"5px"} }/>Cushion chairs with choice of covers and bows
          </ListItemIcon>
        
        <br/>
        <ListItemIcon>
            <ChevronRightOutlinedIcon style={{ color: "#0e992e" , marginTop:"5px"} } />Choice of theme light colours
          </ListItemIcon>
        
        <br/>
        <ListItemIcon>
            <ChevronRightOutlinedIcon style={{ color: "#0e992e" , marginTop:"5px"} }/>Fully Air-conditioned
          </ListItemIcon>
        
        <br/>
          
        
      </List>
      </div>
      </div>
          <div className="repBtn" >
          <Button variant="primary" className="repBtn1" >Make an Enquiry</Button>
          </div>
          
        </Card.Body>
      </Card>
      </div>
    </div>
  );
};
