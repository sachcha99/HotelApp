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
import CalcDate from '../Common/CalcDate';

export const AdminRoomBooking = () => {
    const [status, setStatus] = useState("all");
    const [rows, setRows] = useState('');
    const [approve,setApprove] = useState("all");
    
    const [StatusFilter,setStatusFilter] = useState("All");

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState('');
    let  [count, setCount] = useState('0');
   
    useEffect(() => {
        if(!searchTerm){
        API.get(`/room/`)
            .then(res => {
                setRows(res.data)
                setCount(rows.length)
            })
            .catch(err => {
                console.log(err)
            });
        }
    
    }, [rows,searchTerm]);


    const findItems= (itemName)=>{
        if(itemName){
        API.get(`/room/search/${itemName}`)
       
        
        .then(res =>{
                let arr = res.data;
                let i;
                let list=[];
                for (i = 0; i < arr.length; i++) {
                    list.push(arr[i])
                }
                setRows(list);
            })
            .catch(err => {
                console.log(err)
            });
            console.log(searchResults)
        }
    }


    const handleChange = event => {
        findItems(event.target.value);
        setSearchTerm(event.target.value);
        console.log(searchTerm)
      };


    const approveBooking = (rowData)=>{

        for (let i=0;i<rows.length;i++){

            if(rows[i]._id==rowData._id){
                setApprove("approved")
                rowData.status="approved"
                const approveData={
                    _id:rowData._id,
                    userId:rowData.userId,
                    name: rowData.name,
                    email: rowData.email,
                    phone: rowData.phone, 
                    roomName: rowData.roomName,
                    status: "approved",
                    adultNo: rowData.adultNo,
                    childNo: rowData.childNo,
                    roomNo: rowData.roomNo,
                    checkIn: rowData.checkIn,
                    checkOut: rowData.checkOut,
                    addDate: rowData.addDate,
                    photoPath: rowData.photoPath, 
                    remarks: rowData.remarks,
                    loyalty: rowData.loyalty,
                }
                API.put("/room/update", approveData).then();
            }
          
        }


    }



    const rejectBooking = (rowData)=>{
        setApprove("rejected")
        rowData.status="rejected"
        const approveData={
                    _id:rowData._id,
                    userId:rowData.userId,
                    name: rowData.name,
                    email: rowData.email,
                    phone: rowData.phone, 
                    roomName: rowData.roomName,
                    status: "rejected",
                    adultNo: rowData.adultNo,
                    childNo: rowData.childNo,
                    roomNo: rowData.roomNo,
                    checkIn: rowData.checkIn,
                    checkOut: rowData.checkOut,
                    addDate: rowData.addDate,
                    photoPath: rowData.photoPath, 
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
           
        <div id="admin-card-back">
            <div className="wr-table1">
                <div className="wr-table-header">
                    <Row>
                        <Col className="wr-dashboard-header">
                        <Col>
                            <div className="chilBar">Manage My Bookings</div>
                        </Col>
                             
                        </Col>
                        <Col>
                        
                        <input className="form-control" id="searchBar"type="text" placeholder="Search" 
                        value={searchTerm} onChange={handleChange} aria-label="Search" />
                       
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

                            <RoomReport/>
                        </Col>
                    </Row>
                </div>
                <br />
            </div>
            <div className="CountingHead"> {StatusFilter} Room Reservations ({count})</div>
            <div  style={{display:'flex', flexWrap:'wrap'}}>
            {rows.length > 0 && rows.map((row) => {
               
                    if (row.status === status || status === "all") {
                        
                        return( 


            <div>
                
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
                        <CalcDate DateC={row.addDate.split('T',[1])}/>

                        </Card.Footer>

                    </Card>

                </div>
                </div>
                 )}
                 
                })
                }
                
            </div>
            {/* <Footer/> */}
            </div>
        </div>
        
    )
}
