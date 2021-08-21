import React, {useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button";
import API from "../api";
import { useHistory } from 'react-router-dom';
import { Col, Row, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import {confirmAlert} from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import Hall01 from '../Images/hall01.jpg'
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Title from "../header/Title";
import image from '../Images/rreception2.jpg'
import { RecepitonHallList } from './ReceptionHallList';
import { ReceptionHallBookingForm } from './ReceptionHallBookingForm';
import StarRateRoundedIcon from '@material-ui/icons/StarRateRounded';
import GroupIcon from '@material-ui/icons/Group';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import AssistantIcon from '@material-ui/icons/Assistant';
import ScheduleIcon from '@material-ui/icons/Schedule';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import TodayOutlinedIcon from '@material-ui/icons/TodayOutlined';

export const ReceptionHallBookingHistory = () => {
    const [status, setStatus] = useState("all");
    const [rows, setRows] = useState('');

    useEffect(() => {
        API.get(`/reception/`)
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
            message: 'Are you sure to delete this Reception.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        API.delete(`reception/delete/${row._id}`)
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
            <Title className="PicTitileRoomReserve" title="Reception Hall Booking History"/>
            <img className="headerPic" src={image}/>
        <div id="filter-card-back">
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
                                    <img className="hallImg" src={Hall01} alt="" />
                                    </div>

                                    <div className="cardDesc">
                                <div className="statusParent">
                                    <Card.Title><h4 className="card-title-h3">Reception Hall Type : {row.receptionName}</h4></Card.Title>
                                    <div className="statusType">
                                    <h6 className="statusChild" style={row.status === "approved" ? { borderRight: "15px solid #0cce26" } : row.status == "rejected" ? { borderRight: "15px solid red" } : row.status == "recent" ? { borderRight: "15px solid #007d8d" } : { borderRight: "15px solid orange" }} >{row.status}</h6>
                                    </div>
                                </div >
                                <div className="card-his-bodyFlex">
                                <div>
                                <h6 className="card-his-body"><GroupIcon  id="card-his-bodyIcon"/>Capacity : {row.capacity}</h6>
                                <h6 className="card-his-body"><AssistantIcon id="card-his-bodyIcon"/>Category : {row.category}</h6>
                                <h6 className="card-his-body"><LibraryMusicIcon id="card-his-bodyIcon"/>Entertainment Type : {row.entType}</h6>
                                </div>
                                <div className='card-his-body-date'>
                                    <div>
                                    <h6 className='conf-date1'><TodayOutlinedIcon id="card-his-bodyIcon"/>Date of the Function  {row.funcDate.split('T',[1])}</h6>
                            
                                    <h6 className='conf-date1'><ScheduleIcon id="card-his-bodyIcon"/>Time of the Function : {row.funcDate.split('T').pop().split(".",1)}</h6>
                                    </div>
                                </div>

                                </div>
                                <br />
                                <div className="card-his-bodyFlex">
                                <Card.Text >
                                <StarRateRoundedIcon style={{ color: "#827700", marginLeft: "45px",paddingBottom:"2px" }} />   Remarks - {row.remarks}
                                </Card.Text>
                                <div className='card-his-body-menu'>
                                    <h6 className='conf-organ'><FastfoodIcon id="card-his-bodyIcon"/>Menu Selection :  {row.menu}</h6>
                                </div>

                                </div>
                                <div className='card-his-btn' >

                                    <Button className='card-his-btnDelete' variant="primary"  onClick={() => deleteBooking(row)}>Cancel</Button>


                                    
                                    <ReceptionHallBookingForm row={row}/>
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
        </div>
        {/* <Footer/> */}
        </div>
    )
}
