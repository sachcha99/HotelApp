import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button";
import { Col, Row, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import Hall01 from './Images/hall01.jpg'

export const ReceptionHallBookingHistory = () => {
    const [status, setStatus] = useState("all");
    return (
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
                                    <DropdownItem >All</DropdownItem>
                                    <DropdownItem >Pending</DropdownItem>
                                    <DropdownItem >Approved</DropdownItem>
                                    <DropdownItem>Rejected</DropdownItem>
                                    <DropdownItem >Recent</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Col>
                    </Row>
                </div>
                <br />
            </div>
            <div>
                <div className="cardBack">
                    <Card className="text-center" >
                        <Card.Header>Booking 001 </Card.Header>
                        <Card.Body>
                            <div className="cardBody">
                                <div >
                                    <img className="hallImg" src={Hall01} alt="" />
                                    </div>

                                    <div className="cardDesc">
                                <div className="statusParent">
                                    <h6 className="statusChild" style={status === "approved" ? { borderRight: "15px solid #0cce26" } : status == "rejected" ? { borderRight: "15px solid red" } : status == "recent" ? { borderRight: "15px solid #007d8d" } : { borderRight: "15px solid orange" }} >Pending</h6>
                                </div>
                                <Card.Title><h3 className="card-title-h3">Reception Hall Type : Grand Ballroom</h3></Card.Title>

                                <h5 className="venue">Capacity : 350</h5>
                                <h5 className="venue">Category : Wedding</h5>
                                <h5 className="venue">Entertainment Type : Music Band</h5>

                                <div className='conf-date'>
                                    <h6 className='conf-date1'>Date of the Function : 2021/09/25</h6>
                                </div>
                                <br />
                                <Card.Text className="desc-card">
                                    Remarks : N/A
                                </Card.Text>
                                <div className='conf-org'>
                                    <h6 className='conf-organ'>Menu Selection :  Menu A</h6>
                                </div>
                                <div className='conf-card' >

                                    <Button className='conf-btn conf-btn4' variant="primary"  > Cancel</Button>


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
            </div>
        </div>
    )
}
