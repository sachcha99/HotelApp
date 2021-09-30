import React, {useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card'
import API from "../api";
import { useHistory } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import { Col, Row, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import {confirmAlert} from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import Room01 from '../Images/room01.jpg'
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Title from "../header/Title";
import image from '../Images/roomreseve.jpg'
import { RoomBookingForm } from './RoomBookingForm';

import ChildCareIcon from '@material-ui/icons/ChildCare';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import HouseIcon from '@material-ui/icons/House';
import LocalActivityIcon from '@material-ui/icons/LocalActivity';
import DescriptionIcon from '@material-ui/icons/Description';
import ScheduleIcon from '@material-ui/icons/Schedule';
import TodayOutlinedIcon from '@material-ui/icons/TodayOutlined';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import CalcDate from '../Common/CalcDate';
import Pageloader from '../Preloader/Pageloader';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}


export const RoomBookingHistory = () => {
    const [status, setStatus] = useState("all");
    const [rows, setRows] = useState('');
    const [open, setOpen] = React.useState(false);
    const token =JSON.parse(sessionStorage.getItem("token"));
    const [StatusFilter,setStatusFilter] = useState("All");
    const [IsProgress,setIsProgress] = useState(true);
    let  count=0;
   
    
    const handleCloseSnack = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    useEffect(() => {
        API.get(`/room/${token.id}`)
            .then(res => {
                setRows(res.data)
                setIsProgress(false)
            })
            .catch(err => {
                console.log(err)
            });


    }, [rows]);

    {rows.length > 0 && rows.map((row) => {
        if (row.status === status || status === "all") {
           
            count++
            
        }
      }
    )} 

    const handleClick = () => {
        setOpen(true);
    };

    const deleteBooking = (row)=>{
        console.log(row._id)
        confirmAlert({
            title: 'Confirm to Delete',
            message: 'Are you sure to delete this Room Reservation.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        API.delete(`room/delete/${row._id}`)
                            .then((res) => {
                                handleClick()
                            }).catch((err) => {
                            console.log(err);
                        })
                       
                    }
                },
                {
                    label: 'No'
                }
            ]
        });
    }


    const AllConference =()=>{
        setStatus("all");
        setStatusFilter("All")
    }
    const ApprovedConference = ()=>{
        setStatus("approved")
        setStatusFilter("Approved")
    }
    const PendingConference =()=>{
        setStatus("pending")
        setStatusFilter("Pending")
    }
    const RejectedConference =()=>{
        setStatus("rejected")
        setStatusFilter("Rejected")
    }
    const RecentConference =()=>{
        setStatus("recent")
        setStatusFilter("Recent")
    }


    return (
        <div>
                        <Snackbar open={open} autoHideDuration={3000} onClose={handleCloseSnack}>
                <Alert onClose={handleCloseSnack} severity="warning">
                    {`Room Reservation Cancelled`}
                </Alert>
            </Snackbar>
<Header/>
{IsProgress ? <Pageloader/> : 
<div>
<Title className="PicTitileRoomReserve" title="Room Reservation History"/>
            <img className="headerPic" src={image}/>  
        <div id="admin-card-back">
            <div className="wr-table">
                <div className="wr-table-header">
                    <Row>
                        <Col className="wr-dashboard-header">
                            <h4>Manage My Bookings</h4>
                        </Col>
                        <Col className="wr-submit" >
                            <UncontrolledDropdown id='filterToggle'>
                                <DropdownToggle caret id='filterDrop'>
                                {StatusFilter}
                                </DropdownToggle>
                                <DropdownMenu>
                                        <DropdownItem onClick={AllConference}>All</DropdownItem>
                                        <DropdownItem onClick={PendingConference}>Pending</DropdownItem>
                                        <DropdownItem onClick={ApprovedConference}>Approved</DropdownItem>
                                        <DropdownItem onClick={RejectedConference}>Rejected</DropdownItem>
                                        <DropdownItem onClick={RecentConference}>Recent</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Col>
                    </Row>
                </div>
                <br />
            </div>
            <div>
            <div className="CountingHeadUser"> {StatusFilter} Reception Hall Reservations ({count})</div>
            {rows.length > 0 && rows.map((row) => {
                    if (row.status === status || status === "all") {
                        
                        return(
                <div className="cardBack" key={row._id}>
                    <Card className="text-center" >
                        <Card.Header>Booking #1256 </Card.Header>
                        <Card.Body>
                            <div className="cardBody">
                                <div >
                                    <img className="hallImg" src={row.photoPath} alt="" />
                                    </div>

                                    <div className="cardDesc">
                                <div className="statusParent">
                                <Card.Title><h4 className="card-title-h3">Room Type : {row.roomName}</h4></Card.Title>
                                    <div className="statusType">
                                    <h6 className="statusChild" style={row.status === "approved" ? { borderRight: "15px solid #0cce26" } : row.status == "rejected" ? { borderRight: "15px solid red" } : row.status == "recent" ? { borderRight: "15px solid #007d8d" } : { borderRight: "15px solid orange" }} >{row.status}</h6>
                                    </div>
                                      </div>
                                

                                      <div className="card-his-bodyFlex">
                                <div>
                                <h6 className="card-his-body"><HouseIcon id="card-his-bodyIcon"/>No of Rooms: {row.roomNo}</h6>
                                <h6 className="card-his-body"><EmojiPeopleIcon  id="card-his-bodyIcon"/>No of Adults : {row.adultNo}</h6>
                                <h6 className="card-his-body"><ChildCareIcon id="card-his-bodyIcon"/>No of Childs : {row.childNo}</h6>
                                
                                <h6 className='card-his-body'><LocalActivityIcon id="card-his-bodyIcon"/>Customer Type :  {row.loyalty === false ? 'Loyalty' : 'Regular'}</h6>
                           
                                </div>
                                <div className='card-his-body-date1'>
                                    <div>
                                    <h6 className='conf-date1'><TodayOutlinedIcon id="card-his-bodyIcon"/>Check-in Date : {row.checkIn.split('T',[1])}</h6>
                                    <h6 className='conf-date1'><ScheduleIcon id="card-his-bodyIcon"/>Check-in Time : {row.checkIn.split('T').pop().split(".",1)}</h6>
                                   
                                       </div>
                                    <div>
                                    <h6 className='conf-date1'><TodayOutlinedIcon id="card-his-bodyIcon"/>Check-out Date : {row.checkOut.split('T',[1])}</h6>
                                    <h6 className='conf-date1'><ScheduleIcon id="card-his-bodyIcon"/>Check-out Time : {row.checkOut.split('T').pop().split(".",1)}</h6>
                                    </div>
                                </div>



                                </div>


                       

                                <div className='card-his-body-remarks'>
                                       
                                <Card.Text >
                                <DescriptionIcon style={{ color: "#827700e0", marginLeft: "40px",fontSize:"20px",paddingBottom:"3px"  }} />   Remarks - {row.remarks}
                                </Card.Text>
                                
                              
                                </div>
                            
                                <div className='card-his-btn' >

                                <Button className='card-his-btnDelete' variant="primary"  onClick={() => deleteBooking(row)}>Cancel</Button>


                                    <RoomBookingForm row={row}/>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Footer className="text-muted" >
                           <CalcDate DateC={(row.addDate.split('T',[1]).pop().split("-",3))}/>
                        
                        </Card.Footer>

                    </Card>

                </div>
                 )}
                })}
            </div>
            <Footer/>
            </div>
            </div> }
</div>
    )
}
