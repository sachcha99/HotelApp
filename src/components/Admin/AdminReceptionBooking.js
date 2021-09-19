import React, {useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button";
import API from "../api";
import { useHistory } from 'react-router-dom';
import { Col, Row, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import {confirmAlert} from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import Hall01 from '../Images/hall01.jpg'
import { MDBCol } from "mdbreact";
import Snackbar from '@material-ui/core/Snackbar';
import Fade from '@material-ui/core/Fade';
import Slide from '@material-ui/core/Slide';
// import { ReceptionReport } from './ReceptionReport';


function TransitionUp(props) {
    return <Slide {...props} direction="up" />;
  }


export const AdminReceptionBooking = () => {
    const [status, setStatus] = useState("all");
    const [rows, setRows] = useState('');
    const [rows1, setRows1] = useState('');
    const [approve,setApprove] = useState("all");

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
 
 

    const [open, setOpen] = React.useState(false);
    const [transition, setTransition] = React.useState(undefined);
  
    const handleClick = (Transition) => () => {
      setTransition(() => Transition);
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  



    useEffect(() => {
        API.get(`/reception/`)
            .then(res => {
                setRows(res.data)
            })
            .catch(err => {
                console.log(err)
            });

    
    }, [rows]);



    // API.get(`/search/${searchTerm}`)
    //         .then(res => {
    //             setRows1(res.data)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         });

            // console.log(searchTerm)

            // console.log(rows1)
    
    // const findItems= (itemName)=>{
    //     API.post('/search', {itemName : itemName})
    //         .then(function (res) {
    //             let arr = res.data;
    //             let i;
    //             let list=[];
    //             for (i = 0; i < arr.length; i++) {
    //                 list.push(arr[i])
    //             }
    //             setRows(list);
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // }


    const handleChange = event => {
        setSearchTerm(event.target.value);
      };



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
                    receptionName: "Room 01",
                    status: "approved",
                    capacity: rowData.capacity,
                    entType: rowData.entType,
                    category: rowData.category,
                    funcDate: rowData.funcDate,
                    menu: rowData.menu,
                    remarks: rowData.remarks
                }
                API.put("/reception/update", approveData).then(handleClick(TransitionUp));
    
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
            receptionName: "Room 01",
            status: "rejected",
            capacity: rowData.capacity,
            entType: rowData.entType,
            category: rowData.category,
            funcDate: rowData.funcDate,
            menu: rowData.menu,
            remarks: rowData.remarks
        }

        API.put("/reception/update", approveData).then();
        //  window.location.reload();
    }

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

        <div id="filter-card-back">
            <div className="wr-table1">
                <div className="wr-table-header">
                    <Row>
                        <Col className="wr-dashboard-header">
                            <h4>Manage My Bookings</h4>
                        </Col>
                        <Col className="wr-dashboard-header">
                             {/* <ReceptionReport/> */}
                        </Col>
                        <Col className="wr-dashboard-header">
                        <input className="form-control" type="text" placeholder="Search" value={searchTerm} onChange={handleChange} aria-label="Search" />
   
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
            <Snackbar  className="approveSnack" autoHideDuration={3000} open={open} onClose={handleClose} TransitionComponent={transition} 
            message="Successfully Approved"key={transition ? transition.name : ''}
       />
        </div>
        {/* <Footer/> */}
        </div>
    )
}
