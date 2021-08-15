import React, {useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card'
import API from "../components/api";
import { useHistory } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import { Col, Row, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import {confirmAlert} from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import Room01 from './Images/room01.jpg'
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Title from "./header/Title";
import image from './Images/roomreseve.jpg'

export const RoomBookingHistory = () => {
    const [status, setStatus] = useState("all");
    const [rows, setRows] = useState('');

    useEffect(() => {
        API.get(`/room/`)
            .then(res => {
                setRows(res.data)
            })
            .catch(err => {
                console.log(err)
            });
    }, [rows]);



    const deleteBooking = (row)=>{
        console.log(row._id)
        confirmAlert({
            title: 'Confirm to Delete',
            message: 'Are you sure to delete this Room.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        API.delete(`room/delete/${row._id}`)
                            .then((res) => {

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
    }
    const ApprovedConference = ()=>{
        setStatus("approved")
    }
    const PendingConference =()=>{
        setStatus("pending")
    }
    const RejectedConference =()=>{
        setStatus("rejected")
    }
    const RecentConference =()=>{
        setStatus("recent")
    }



    return (
        <div>
<Header/>
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
                                    Status Filter
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
            {rows.length > 0 && rows.map((row) => {
                    if (row.status === status || status === "all") {
                        return(
                <div className="cardBack" key={row._id}>
                    <Card className="text-center" >
                        <Card.Header>Booking 001 </Card.Header>
                        <Card.Body>
                            <div className="cardBody">
                                <div >
                                    <img className="hallImg" src={Room01} alt="" />
                                    </div>

                                    <div className="cardDesc">
                                <div className="statusParent">
                                    <h6 className="statusChild" style={status === "approved" ? { borderRight: "15px solid #0cce26" } : status == "rejected" ? { borderRight: "15px solid red" } : status == "recent" ? { borderRight: "15px solid #007d8d" } : { borderRight: "15px solid orange" }} >{row.status}</h6>
                                </div>
                                <Card.Title><h3 className="card-title-h3">Room Type : {row.roomName}</h3></Card.Title>

                                <h5 className="venue">Adult No : {row.adultNo}</h5>
                                <h5 className="venue">Child No : {row.childNo}</h5>
                                <h5 className="venue">Room No:{row.roomNo}</h5>

                                <div className='conf-date'>
                                    <h6 className='conf-date1'>Check In Date : {row.checkIn.split('T',[1])}</h6>
                                    <h6 className='conf-date1'>Check Out Date : {row.checkOut.split('T',[1])}</h6>
                                </div>
                                <div className='conf-date'>
                                    <h6 className='conf-date1'>Check In Time : {row.checkIn.split('T').pop().split(".",1)}</h6>
                                    <h6 className='conf-date1'>Check Out Time : {row.checkOut.split('T').pop().split(".",1)}</h6>
                                </div>
                                <br />
                                <Card.Text className="desc-card">
                                    Remarks : {row.remarks}
                                </Card.Text>
                                <div className='conf-org'>
                                    <h6 className='conf-organ'>Customer Type :  {row.loyalty? "Loyalty":"Regular"}</h6>
                                </div>
                                <div className='conf-card' >

                                    <Button className='conf-btn conf-btn4' variant="primary"  onClick={() => deleteBooking(row)}> Cancel</Button>


                                    <Button className='conf-btn conf-btn2' variant="primary">Edit</Button>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Footer className="text-muted" >
                            {/*<text align="left">user ID:904535459</text>*/}
                            2 days ago

                        </Card.Footer>

                    </Card>

                </div>
                 )}
                })}
            </div>
            {/* <Footer/> */}
            </div>
        </div>
    )
}
