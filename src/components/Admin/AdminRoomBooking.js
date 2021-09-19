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
import { RoomReport } from './RoomReport';

export const AdminRoomBooking = () => {
    const [status, setStatus] = useState("all");
    const [rows, setRows] = useState('');
    const [approve,setApprove] = useState("all");

    useEffect(() => {
        API.get(`/room/`)
            .then(res => {
                setRows(res.data)
            })
            .catch(err => {
                console.log(err)
            });
    }, [rows]);



    const approveBooking = (rowData)=>{

        for (let i=0;i<rows.length;i++){

            if(rows[i]._id==rowData._id){
                setApprove("approved")
                rowData.status="approved"
                const approveData={
                    _id:rowData._id,
                          name: "John",
            email: "john@gmail.com",
            phone: "+94775556667",
            roomName: rowData.roomName,
            status: "approved",
            adultNo: rowData.adultNo,
            childNo: rowData.childNo,
            roomNo: rowData.roomNo,
            checkIn: rowData.checkIn,
            checkOut: rowData.checkOut,
            remarks: rowData.remarks,
            loyalty: rowData.loyalty,
                }
                API.put("/room/update", approveData).then();
            }
            // else if(rows[i].status=="approved" && rows[i]._id!=rowData._id){
            //     setApprove("recent")
            //     rowData.status="recent"
            //     const approveData={
            //         _id:rows[i]._id,
            //         name: "John",
            //         email: "john@gmail.com",
            //         phone: "+94775556667",
            //         roomName: "Room 01",
            //         status: "pending",
            //         adultNo: rows[i].adultNo,
            //         childNo: rows[i].childNo,
            //         roomNo: rows[i].roomNo,
            //         checkIn: rows[i].checkIn,
            //         checkOut: rows[i].checkOut,
            //         remarks: rows[i].remarks,
            //         loyalty: rows[i].loyalty,
                    
            //     }
            //     API.put("/room/update", approveData).then();
            // }
        }


        //window.location.reload();
    }



    const rejectBooking = (rowData)=>{
        setApprove("rejected")
        rowData.status="rejected"
        const approveData={
            _id:rowData._id,
            name: "John",
email: "john@gmail.com",
phone: "+94775556667",
roomName: rowData.roomName,
status: "rejected",
adultNo: rowData.adultNo,
childNo: rowData.childNo,
roomNo: rowData.roomNo,
checkIn: rowData.checkIn,
checkOut: rowData.checkOut,
remarks: rowData.remarks,
loyalty: rowData.loyalty
        }

        API.put("/room/update", approveData).then();
        //  window.location.reload();
    }

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
           
        <div id="admin-card-back">
            <div className="wr-table1">
                <div className="wr-table-header">
                    <Row>
                        <Col className="wr-dashboard-header">
                            <h4>Manage My Bookings</h4>
                        </Col>
                        <Col className="wr-dashboard-header">
                             <RoomReport/> 
                        </Col>
                        <Col className="wr-dashboard-header">
                        <input className="form-control" type="text" placeholder="Search"  aria-label="Search" />
  
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
            <div  style={{display:'flex', flexWrap:'wrap'}}>
            {rows.length > 0 && rows.map((row) => {
                    if (row.status === status || status === "all") {
                        return(
                <div className="cardBackAdmin" key={row._id}>
                    <Card className="text-center" >
                        <Card.Header>Booking ID - #{row._id} </Card.Header>
                        <Card.Body>
                            <div className="cardBody">
                                

                                    <div className="cardDesc">
                                <div className="statusParent">
                                    <h6 className="statusChild" style={row.status === "approved" ? { borderRight: "15px solid #0cce26" } : row.status == "rejected" ? { borderRight: "15px solid red" } : row.status == "recent" ? { borderRight: "15px solid #007d8d" } : { borderRight: "15px solid orange" }} >{row.status}</h6>
                                </div>
                                <Card.Title><h3 className="card-title-h3">Room Type : {row.roomName}</h3></Card.Title>
                                                <div style={{display:'flex',justifyContent: 'space-evenly', marginBottom:'15px'}}>
                                                    <div style={{ width:'400px', padding:'15px',textAlign:'left' }}>
                                                        
                                                        <h5 className="admin-room">Capacity:</h5>
                                                        <h5 style={{marginLeft:'25px'}} className="admin-room">No of Rooms : {row.roomNo}</h5>
                                                        <h5 style={{marginLeft:'25px'}} className="admin-room">No of Adults : {row.adultNo}</h5>
                                                        <h5  style={{marginLeft:'25px'}} className="admin-room">No of Childs : {row.childNo}</h5>
                                                        
                                                    </div>
                                                    
                                                    <div style={{backgroundColor:'#9e9e9e' , width:'400px', padding:'15px',textAlign:'left' }}>
                                                    <h5 className="admin-room">Contact Details:</h5>
                                                        <h5 style={{marginLeft:'25px'}} className="admin-room">Name : {row.name}</h5>
                                                        <h5  style={{marginLeft:'25px'}} className="admin-room">E-mail : {row.email}</h5>
                                                        <h5  style={{marginLeft:'25px'}} className="admin-room">Phone : {row.phone}</h5>
                                                    </div>
                                                </div>
                                <div className='conf-date' style={{justifyContent: 'flex-start' }}>
                                    <h6 className='conf-date1'>Check In Date : {row.checkIn.split('T',[1])}</h6>
                                    <h6 className='conf-date1'>Check In Time : {row.checkIn.split('T').pop().split(".",1)}</h6>
                                </div>
                                    
                                <div className='conf-date' style={{justifyContent: 'flex-start'}}>
                                <h6 className='conf-date1'>Check Out Date : {row.checkOut.split('T',[1])}</h6>
                                    <h6 className='conf-date1'>Check Out Time : {row.checkOut.split('T').pop().split(".",1)}</h6>
                                </div>
                                <br />
                                <div className='conf-date' style={{justifyContent: 'flex-start'}}>
                                <h5  className="desc-card">
                                    Remarks : {row.remarks}
                                </h5>
                                </div>
                                
                                <div className='conf-date' style={{justifyContent: 'flex-start' }}>
                                    <h6 >Customer Type :  {row.loyalty? "Loyalty":"Regular"}</h6>
                                </div>
                                
                                <div className='conf-card' >

                                <Button className='conf-btn conf-btn2' variant="primary" onClick={() => rejectBooking(row)}>Decline</Button>

                                        <Button className='conf-btn conf-btn1' variant="primary" onClick={() => approveBooking(row)} >Approve</Button>
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
