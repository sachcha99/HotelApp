import React, { useState ,useEffect} from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import DescriptionIcon from '@material-ui/icons/Description';
import ScheduleIcon from '@material-ui/icons/Schedule';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import ChildCareIcon from '@material-ui/icons/ChildCare';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import HouseIcon from '@material-ui/icons/House';
import LocalActivityIcon from '@material-ui/icons/LocalActivity';
import Switch from '@material-ui/core/Switch';
import API from "../api";
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import SlideAlert from '../Common/SlideAlert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'absolute',
        top: 0,
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
    margin: {
        margin: theme.spacing(1),
    },
    margin2: {
        margin: theme.spacing(1),
        marginLeft: "30px",
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '500px'
    },
    textFieldLabel: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '500px',
        marginBottom: '5px'
    },
    textField2: {
        marginLeft: "30px",

    },
    textFieldLabel2: {
        marginLeft: "30px"
    },
    switch: {
        marginLeft: "30px"
    },
    textFieldLabel3: {
        marginTop: "8px",
        marginLeft: "75px",
        fontWeight: "500",
        fontSize: "20px"

    },
    textFieldLabel4: {
        marginTop: "8px",
        marginLeft: "8px",
        fontWeight: "500",
        fontSize: "16px"

    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },

}));

export const RoomBookingForm = ({row,roomType,imageName}) => {

    const classes = useStyles();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    const [Rooms, setRooms] = useState();
    const [adultNo, setAdultNo] = useState();
    const [childNo, setChildNo] = useState();
    const [checkIn, setCheckIn] = useState();
    const [checkOut, setCheckOut] = useState();
    const [remarks, setRemarks] = useState();
    const [userId, setuserId] = useState();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [date, setDate] = useState();
    const [sumbitDate, setsumbitDate] = useState();
    const [photoPath, setphotoPath] = useState();
    const [switchState, setSwitchState] = useState({ switch: false });
    const [open, setOpen] = React.useState(false);
    const [Alertopen, setAlertopen] = React.useState(false);

    const token =JSON.parse(sessionStorage.getItem("token"));
    const today = new Date()

    const handleShow = () =>{ 

      
    if(token){
        setShow(true);
        setuserId(token.id)
        setEmail(token.email)
        setName(token.fname+" "+token.lname)
        setPhone("1234567896")
        setsumbitDate(today)
        setphotoPath(imageName)
    }else{
        handleClickOpen()
       
    }

}


const handleClickOpen = () => {
setAlertopen(true);
};

const handleAlertClose = () => {
setAlertopen(false);
};


    useEffect(() => {
        if(row){
   
            setRooms(row.roomNo)
            setAdultNo(row.adultNo);
            setChildNo(row.childNo);
            setCheckIn(row.checkIn.split('.',1));
            setCheckOut(row.checkOut.split('.',1));
            setRemarks(row.remarks);
            if( row.loyalty){
                setSwitchState(true );
            }
            
        }
       }, [open])


    const handleClick = () => {
        setOpen(true);
    };

    const handleCloseSnack = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const handleSwitch = (event) => {
       
        setSwitchState({ ...switchState, [event.target.name]: event.target.checked });
    };
    

    function handleSubmit(event) {
        event.preventDefault();
        if(!row){
        const room = {
            userId:userId,
            name: name,
            email: email,
            phone: phone,
            roomName: roomType? roomType : 'Unkown Room Type',
            status: "pending",
            adultNo: adultNo,
            childNo: childNo,
            roomNo: Rooms,
            checkIn: checkIn,
            checkOut: checkOut,
            remarks: remarks,
            loyalty: switchState.switch,
            addDate: sumbitDate,
            photoPath: photoPath

        }

        //send post request to add a new room reservation to the db
        API.post('/room/create', room)
            .then(function (response) {
                console.log(response.data);
                if (response.data.message) {
                    alert.info(response.data.message);
                }
                handleClick()
                setShow(false)
            })
            .catch(function (error) {
                console.log(error);
                setShow(false)
            });
        }if(row){
            const room = {
                
               
                _id: row._id,
                userId:row.userId,
                name: row.name,
                email: row.email,
                phone: row.phone, 
                roomName: row.roomName,
                status: "pending",
                adultNo: adultNo,
                childNo: childNo,
                roomNo: Rooms,
                checkIn: checkIn,
                checkOut: checkOut,
                remarks: remarks,
                loyalty: false,
                addDate: row.addDate,
                photoPath: row.photoPath, 
    
            }



            API.put('/room/update', room)
                    .then(function (response) {
                        console.log(response.data);
                        if (response.data.message) {
                            alert.info(response.data.message);
    
                        }
                        handleClick()
                        setShow(false)
    
                    })
    
                    .catch(function (error) {
                        console.log(error);
                        setShow(false)
    
                    });
        }

        setRooms()
        setAdultNo();
        setChildNo();
        setCheckIn();
        setCheckOut();
        setRemarks();
        setSwitchState({ ...switchState, switch: false });

    }
    return (
        <div>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleCloseSnack}>
                <Alert onClose={handleCloseSnack} severity="success">
                {row ? 'Room Reservation Successful Updated':'Room Reservation Successful'}
                </Alert>
            </Snackbar>
            <SlideAlert open={Alertopen} handleClose={handleAlertClose}/>
         {row ?
            <Button className='conf-btn conf-btn2' variant="primary" onClick={handleShow}>Edit</Button>:
            <Button variant="primary" className="roomBtn1" onClick={handleShow} >Reserve</Button>
         }
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
                size="lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title>{row ? `Update Room Reservation` : `Reserve a room`}</Modal.Title>
                </Modal.Header>
                <form onSubmit={handleSubmit}>
                    <Modal.Body>


                        <div>

                            <label className={classes.textFieldLabel3}>Capacity</label><br></br>
                            <Grid container spacing={1}>

                                <Grid item>


                                    <div className={classes.margin}>
                                        <Grid container spacing={1} alignItems="flex-end">
                                            <Grid item>
                                                <EmojiPeopleIcon fontSize="large" />
                                            </Grid>
                                            <Grid item>
                                                <TextField required onChange={(e) => { setAdultNo(e.target.value) }} value={adultNo} id="input-with-icon-grid" label="Adult" type="number"
                                                    className={classes.textField2} inputProps={{ min: 0 }} />
                                            </Grid>
                                        </Grid>
                                    </div>
                                </Grid>
                                <Grid item>

                                    <div className={classes.margin}>
                                        <Grid container spacing={1} alignItems="flex-end">
                                            <Grid item>
                                                <ChildCareIcon fontSize="large" />
                                            </Grid>
                                            <Grid item>
                                                <TextField required onChange={(e) => { setChildNo(e.target.value) }} value={childNo} id="input-with-icon-grid" label="Child" type="number"
                                                    className={classes.textField2} inputProps={{ min: 0 }} />
                                            </Grid>
                                        </Grid>
                                    </div>
                                </Grid>
                            </Grid>


                            <div className={classes.margin}>

                                <Grid container spacing={1} alignItems="flex-end">
                                    <Grid item>
                                        <HouseIcon fontSize="large" />
                                    </Grid>
                                    <Grid item>
                                        <FormControl className={classes.formControl}>
                                            <InputLabel className={classes.textField} id="demo-simple-select-label">No Of Rooms</InputLabel>
                                            <Select required
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                className={classes.textField}
                                                value={Rooms}
                                                onChange={(e) => setRooms(e.target.value)}
                                            >
                                                <MenuItem value={1}>1</MenuItem>
                                                <MenuItem value={2}>2</MenuItem>
                                                <MenuItem value={3}>3</MenuItem>
                                                <MenuItem value={4}>4</MenuItem>
                                                <MenuItem value={5}>5</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </div>

                            <Grid container spacing={1}>
                                <Grid item>
                                    <div className={classes.margin}>

                                        <Grid container spacing={1} alignItems="flex-end">
                                            <Grid item>
                                                <ScheduleIcon fontSize="large" />
                                            </Grid>
                                            <Grid item>
                                                <label className={classes.textFieldLabel1}>Check-In Date</label><br></br>
                                                <TextField
                                                    required
                                                    onChange={(e) => { setCheckIn(e.target.value) }}
                                                    value={checkIn}
                                                    variant="filled"
                                                    size="small"
                                                    id="datetime-local"
                                                    type="datetime-local"
                                                    className={classes.textField1}
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                />
                                            </Grid>
                                        </Grid>
                                    </div>
                                </Grid>
                                <Grid item>
                                    <div className={classes.margin}>

                                        <Grid container spacing={1} alignItems="flex-end">
                                            <Grid item>
                                                <ScheduleIcon fontSize="large" />
                                            </Grid>
                                            <Grid item>
                                                <label className={classes.textFieldLabel1}>Check-Out Date</label><br></br>
                                                <TextField
                                                    required
                                                    onChange={(e) => { setCheckOut(e.target.value) }}
                                                    value={checkOut}
                                                    variant="filled"
                                                    size="small"
                                                    id="datetime-local"
                                                    type="datetime-local"
                                                    className={classes.textField1}
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                />
                                            </Grid>
                                        </Grid>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>

                        <div className={classes.margin}>
                            <Grid container spacing={1} alignItems="flex-end">
                                <Grid item>
                                    <DescriptionIcon fontSize="large" />
                                </Grid>
                                <Grid item>
                                    <TextField id="input-with-icon-grid" label="Remarks" onChange={(e) => { setRemarks(e.target.value) }} value={remarks}
                                        className={classes.textField} multiline />
                                </Grid>
                            </Grid>
                        </div>

                        <div className={classes.margin}>
                            <Grid container spacing={1} alignItems="flex-start">
                                <Grid item>
                                    <LocalActivityIcon fontSize="large" />
                                </Grid>
                                <Grid item>
                                    <label className={classes.textFieldLabel4}>Loyality Member</label>
                                    <Switch
                                        onChange={handleSwitch}
                                        color="primary"
                                        name="switch"
                                        value={switchState}
                                        inputProps={{ 'aria-label': 'primary checkbox' }}
                                        className={classes.switch}
                                    />
                                </Grid>
                            </Grid>
                        </div>


                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                
                        <Button type="submit" className="bookingBtn" variant="primary">{row ? `Update`:'Reserve'}</Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </div>
    )
}

