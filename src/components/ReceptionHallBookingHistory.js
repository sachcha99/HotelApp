import React, {useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button";
import API from "../components/api";
import { useHistory } from 'react-router-dom';
import { Col, Row, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import {confirmAlert} from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import Hall01 from './Images/hall01.jpg'
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

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
                                    <img className="hallImg" src={Hall01} alt="" />
                                    </div>

                                    <div className="cardDesc">
                                <div className="statusParent">
                                    <h6 className="statusChild" style={row.status === "approved" ? { borderRight: "15px solid #0cce26" } : row.status == "rejected" ? { borderRight: "15px solid red" } : row.status == "recent" ? { borderRight: "15px solid #007d8d" } : { borderRight: "15px solid orange" }} >{row.status}</h6>
                                </div>
                                <Card.Title><h3 className="card-title-h3">Reception Hall Type : {row.receptionName}</h3></Card.Title>

                                <h5 className="venue">Capacity : {row.capacity}</h5>
                                <h5 className="venue">Category : {row.category}</h5>
                                <h5 className="venue">Entertainment Type : {row.entType}</h5>

                                <div className='conf-date'>
                                    <h6 className='conf-date1'>Date of the Function : {row.funcDate.split('T',[1])}</h6>
                                </div>
                                <div className='conf-date'>
                                    <h6 className='conf-date1'>Time of the Function : {row.funcDate.split('T').pop().split(".",1)}</h6>
                                </div>
                                <br />
                                <Card.Text className="desc-card">
                                    Remarks : {row.remarks}
                                </Card.Text>
                                <div className='conf-org'>
                                    <h6 className='conf-organ'>Menu Selection :  {row.menu}</h6>
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
        </div>
        {/* <Footer/> */}
        </div>
    )
}
