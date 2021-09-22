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
import StarRateRoundedIcon from '@material-ui/icons/StarRateRounded';
import GroupIcon from '@material-ui/icons/Group';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import AssistantIcon from '@material-ui/icons/Assistant';
import ScheduleIcon from '@material-ui/icons/Schedule';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import TodayOutlinedIcon from '@material-ui/icons/TodayOutlined';
import PersonIcon from '@mui/icons-material/Person';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import CachedIcon from '@mui/icons-material/Cached';
import CalcDate from '../Common/CalcDate';
import { Container, createStyles, makeStyles } from "@material-ui/core";
import DoneAllRoundedIcon from '@mui/icons-material/DoneAllRounded';
import RemoveDoneRoundedIcon from '@mui/icons-material/RemoveDoneRounded';
import { ReceptionReport } from './ReceptionReport';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const useStyles =  makeStyles({
    rotateIcon: {
      animation: "spin 1.5s linear infinite",
     
    }
  })


function TransitionUp(props) {
    return <Slide {...props} direction="up" />;
  }


export const AdminReceptionBooking = () => {
    const classes = useStyles();
    const [status, setStatus] = useState("all");
    const [rows, setRows] = useState('');
    const [rows1, setRows1] = useState('');
    const [approve,setApprove] = useState("all");
    const [StatusFilter,setStatusFilter] = useState("All");
    let  count=0;
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState('');
    const [loading, setLoading] = useState(false);
    const [loadingDel, setLoadingDel] = useState(false);
    const [loadingBtn, setloadingBtn] = useState("AproveLoadingBtn");
    const [loadingBtnDel, setloadingBtnDel] = useState("DeclineLoadingBtn");
 
    const token =JSON.parse(sessionStorage.getItem("token"));

    const [open, setOpen] = React.useState(false);
    const [openDel, setOpenDel] = React.useState(false);
    const [transition, setTransition] = React.useState(undefined);

  const  fetchData = () => {
    setLoading( true );
    setloadingBtn("AproveLoadingBtnTrue")
    
        //Faking API call here
        setTimeout(() => {
            setLoading( false );
            setloadingBtn("AproveLoadingBtnFalse")
        }, 1000);
      };

      const  fetchDataDel = () => {
        setLoadingDel( true );
        setloadingBtnDel("DeclineLoadingBtnTrue")
        
            //Faking API call here
            setTimeout(() => {
                setLoadingDel( false );
                setloadingBtnDel("DeclineLoadingBtnFalse")
            }, 1000);
          };

      
  
    const handleClick = (Transition) => () => {
     fetchData()
     setTimeout(() => {
      setTransition(() => Transition);
      setOpen(true);
    }, 1000);
    };
  
    const handleClose = () => {
      setOpen(false);
      setOpenDel(false);
    };

    const handleClickDel = (Transition) => () => {
        fetchDataDel()
        setTimeout(() => {
        setTransition(() => Transition);
        setOpenDel(true);
    }, 1000);
      };
    
      
  



    useEffect(() => {
        if(!searchTerm){
        API.get(`/reception/`)
            .then(res => {
                setRows(res.data)
            })
            .catch(err => {
                console.log(err)
            });
        }

    
    }, [rows,searchTerm]);


    const findItems= (itemName)=>{
        if(itemName){
        API.get(`/reception/search/${itemName}`)
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

  


      {rows.length > 0 && rows.map((row) => {
        if (row.status === status || status === "all") {
           
            count++
            
        }
      }
    )} 

    const handleChange = event => {
        findItems(event.target.value);
        setSearchTerm(event.target.value);
        
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
                    receptionName: rowData.receptionName,
                    status: "approved",
                    capacity: rowData.capacity,
                    entType: rowData.entType,
                    category: rowData.category,
                    funcDate: rowData.funcDate,
                    addDate: rowData.addDate,
                    photoPath: rowData.photoPath, 
                    menu: rowData.menu,
                    remarks: rowData.remarks
                }
                API.put("/reception/update", approveData).then(handleClick(TransitionUp));
    
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
            receptionName: rowData.receptionName,
            status: "rejected",
            capacity: rowData.capacity,
            entType: rowData.entType,
            category: rowData.category,
            funcDate: rowData.funcDate,
            addDate: rowData.addDate,
            photoPath: rowData.photoPath, 
            menu: rowData.menu,
            remarks: rowData.remarks
        }

        API.put("/reception/update", approveData).then(handleClickDel(TransitionUp));
        
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

        <div id="filter-card-back">
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

                            <ReceptionReport/>
                        </Col>
                        
                    </Row>
                </div>
                <br />
            </div>
            <div>


           {!count ==0? <div className="CountingHead"> {StatusFilter} Reception Hall Reservations ({count})</div>:
           <div className="ZeroCountingHead"> No Any Reception Hall Reservations</div>}
            {rows.length > 0 && rows.map((row) => {
                    if (row.status === status || status === "all") {
                        return(
                <div className="cardBack" key={row._id}>
                    <Card className="text-center" >
                        <Card.Header>Booking No - RE001 </Card.Header>
                        <Card.Body>
                            <div className="cardBody">
                               

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
                                 <h6 className='card-his-body'><FastfoodIcon id="card-his-bodyIcon"/>Menu Selection :  {row.menu}</h6><br/>
                                 <h6 className='card-his-body'><TodayOutlinedIcon id="card-his-bodyIcon"/>Date of the Function  {row.funcDate.split('T',[1])}</h6>
                                 <h6 className='card-his-body'><ScheduleIcon id="card-his-bodyIcon"/>Time of the Function : {row.funcDate.split('T').pop().split(".",1)}</h6>
                                
                                </div>

                                <div className="card-his-bodyFlexAd">

                                   
                                    <div className='card-his-body-dateAdmin'>
                                    

                                    <div className='conf-UserContactAdmin' >Customer Details :-</div>
                                    <h6 className='conf-date1Admin'><PersonIcon fontSize='small' id="card-his-bodyIcon"/>Name:{row.name } </h6>
                                    <h6 className='conf-date1Admin'><PhoneAndroidIcon fontSize='small' id="card-his-bodyIcon"/>Phone Number: {row.phone} </h6>
                                    <h6 className='conf-date1Admin'><EmailIcon fontSize='small' id="card-his-bodyIcon"/>Email :{row.email} </h6>

                                    </div>

                                    <div className="card-his-bodyFlexAdmin">
                                         <div>
                                         <StarRateRoundedIcon style={{ color: "#827700", marginLeft: "0px",paddingBottom:"2px" }} />   Remarks <br/> 
                                         <div style={{  marginLeft: "27px" ,fontFamily: "Raleway",fontSize:"14"}}>{row.remarks}ssdsdsdsssssssssss ssss</div>
                                        </div>
                                
                                    </div>
                                
                      
                                </div>


                                

                                </div>
                                <br />
                               
                                <div className='card-his-btn' >

                                {/* <Button className='conf-btn conf-btn2' variant="primary" onClick={() => rejectBooking(row)}>Decline</Button> */}

                                <Button variant="primary" className={"DeclineLoadingBtn" + (row.status != `rejected` ? '' : 'False')}
                                   variant="primary" onClick={() => rejectBooking(row)} disabled={loading}>
                                 {loadingDel &&  (
                                      <Container maxWidth="sm">
                                     <CachedIcon className={classes.rotateIcon} id="refreshIcon"/>
                                      <style>{`
                                            @keyframes spin {
                                                 0% { transform: rotate(0deg); }
                                                 100% { transform: rotate(360deg); }
                                            }
                                        `}</style>
                                         {loadingDel && <span>Applying</span>}
                                    </Container>
                                     )}
                                     {!loadingDel && row.status == "rejected" ?<RemoveDoneRoundedIcon  id="refreshIcon"/>:''}
                                     {!loadingDel && <span>{ row.status != "rejected" ? `Decline`:`Declined`}</span>}
                                    </Button>

                                {/* <Button className='conf-btn conf-btn1' variant="primary" onClick={() => approveBooking(row)} >Approve</Button> */}

                               
                                <Button className={"AproveLoadingBtn" + (row.status != `approved` ? '' : 'False')} variant="primary" onClick={() => approveBooking(row)} disabled={loading}>
                                 {loading &&  (
                                      <Container maxWidth="sm">
                                      <CachedIcon className={classes.rotateIcon} id="refreshIcon"/>
                                      <style>{`
                                            @keyframes spin {
                                                 0% { transform: rotate(0deg); }
                                                 100% { transform: rotate(360deg); }
                                            }
                                        `}</style>
                                         {loading && <span>Applying</span>}
                                    </Container>
                                     )}
                                     { !loading && row.status == "approved" ?<DoneAllRoundedIcon  id="refreshIcon"/>:''}
                                     {!loading && <span>{row.status != "approved"  ? `Give Approve`:`Approved`}</span>}
                                    </Button>
                                  


                                    
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
            })
           
            
            }



            </div>
            {/* <Snackbar  className="approveSnack" autoHideDuration={3000} open={open} onClose={handleClose} TransitionComponent={transition} 
            message="Successfully Approved"key={transition ? transition.name : ''}  /> */}
           <Snackbar  className="declineSnack" autoHideDuration={3000} open={openDel} onClose={handleClose} TransitionComponent={transition} 
            message="Successfully Decline" severity="success" key={transition ? transition.name : ''}/>

         <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} TransitionComponent={transition} >
          <Alert id="approveSnack"  onClose={handleClose} severity="success" sx={{ width: '100%' }}>
              Successfully Approved
          </Alert>
         </Snackbar>
        </div>
        {/* <Footer/> */}
        </div>
    )
}

