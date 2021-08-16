import React, { useState,useEffect} from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import GroupIcon from '@material-ui/icons/Group';
import DescriptionIcon from '@material-ui/icons/Description';
import ScheduleIcon from '@material-ui/icons/Schedule';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import AssistantIcon from '@material-ui/icons/Assistant';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import FormLabel from '@material-ui/core/FormLabel';
import API from "../api";
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

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
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },

}));

export const ReceptionHallBookingForm = (props) => {

    const [bookingID,setBookingID]=useState();
    const classes = useStyles();
    const [Ent, setEnt] = useState('');
    const [Category, setCategory] = useState('');
    const [Menu, setMenu] = useState('');
    const [MenuA, setMenuA] = useState();
    const [MenuB, setMenuB] = useState();
    const [MenuC, setMenuC] = useState();
    const [capacity, setCapacity] = useState('');
    const [remarks, setRemarks] = useState('');
    const [date, setDate] = useState('');
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        // setBookingID()
        // setCapacity()
        // setEnt();
        // setCategory();
        // setDate();
        // setMenu();
        // setRemarks();
        // console.log("object")
        props.setShow(false)

    };

    useEffect(() => {

  
      
           console.log(props.row)
        // setBookingID(row._id)
        setCapacity(props.row.capacity)
        setEnt(props.row.entType);
        setCategory(props.row.category);
        setDate(props.row.funcDate.split('.',1));
        setMenu(props.row.menu);
        setRemarks(props.row.remarks);
       
    
    }, [])

    const handleClick = () => {
        setOpen(true);
    };

    const handleCloseSnack = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };


    function handleSubmit(event) {
        event.preventDefault();

        if(!props.row) {
        const reception = {
            name: "John",
            email: "john@gmail.com",
            phone: "+94775556667",
            receptionName: "Room 01",
            status: "pending",
            capacity: capacity,
            entType: Ent,
            category: Category,
            funcDate: date,
            menu: Menu,
            remarks: remarks
        }

              
        //send post request to add a new reception hall reservation to the db
        API.post('/reception/create', reception)
            .then(function (response) {
                console.log(response.data);
                if (response.data.message) {
                    alert.info(response.data.message);
                }
                handleClick()
                props.setShow(false)
            })
            .catch(function (error) {
                console.log(error);
                props.setShow(false)
            });
        }

        if(props.row) {
            const reception = {
                _id: props.row._id,
                name: "John",
                email: "john@gmail.com",
                phone: "+94775556667",
                receptionName: "Room 01",
                status: "pending",
                capacity: capacity,
                entType: Ent,
                category: Category,
                funcDate: date,
                menu: Menu,
                remarks: remarks
            }
    
                  
            //send post request to add a new reception hall reservation to the db
            API.put('/reception/update', reception)
                .then(function (response) {
                    console.log(response.data);
                    if (response.data.message) {
                        alert.info(response.data.message);
                    }
                    handleClick()
                    props.setShow(false)
                })
                .catch(function (error) {
                    console.log(error);
                    props.setShow(false)
                });
            }
        setCapacity()
        setEnt();
        setCategory();
        setDate();
        setMenu();
        setRemarks();


    }

    return (
        <div>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleCloseSnack}>
                <Alert onClose={handleCloseSnack} severity="success">
                    Reception Hall Reservation Successful
                </Alert>
            </Snackbar>
        


            <Modal
                show={props.show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
                size="lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title>{props.row? `Update Reception Hall Reservation Details` : `Check Availability of the Reception Hall`}</Modal.Title>
                </Modal.Header>
                <form onSubmit={handleSubmit}>
                    <Modal.Body>

                        <div>

                            <div className={classes.margin}>
                                <Grid container spacing={1} alignItems="flex-end">
                                    <Grid item>
                                        <GroupIcon fontSize="large" />
                                    </Grid>
                                    <Grid item>
                                        <TextField required onChange={(e) => { setCapacity(e.target.value) }} value={capacity} id="input-with-icon-grid" label="Capacity" type="number"
                                            className={classes.textField} inputProps={{ min: 0 }} />
                                    </Grid>
                                </Grid>
                            </div>


                            <div className={classes.margin}>

                                <Grid container spacing={1} alignItems="flex-end">
                                    <Grid item>
                                        <LibraryMusicIcon fontSize="large" />
                                    </Grid>
                                    <Grid item>
                                        <FormControl className={classes.formControl}>
                                            <InputLabel className={classes.textField} id="demo-simple-select-label">Entertainment Type</InputLabel>
                                            <Select
                                                required
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                className={classes.textField}
                                                value={Ent}
                                                onChange={(e) => setEnt(e.target.value)}
                                            >
                                                <MenuItem value="Music">Music Band</MenuItem>
                                                <MenuItem value="DJ">DJ</MenuItem>
                                                <MenuItem value="Calypso">Calypso</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </div>
                            <div className={classes.margin}>

                                <Grid container spacing={1} alignItems="flex-end">
                                    <Grid item>
                                        <AssistantIcon fontSize="large" />
                                    </Grid>
                                    <Grid item>
                                        <FormControl className={classes.formControl}>
                                            <InputLabel className={classes.textField} id="demo-simple-select-label">Category</InputLabel>
                                            <Select
                                                required
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                className={classes.textField}
                                                value={Category}
                                                onChange={(e) => setCategory(e.target.value)}
                                            >
                                                <MenuItem value="Wedding">Wedding</MenuItem>
                                                <MenuItem value="Party">Party</MenuItem>
                                                <MenuItem value="Other">Other Occasions</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </div>
                            <Grid container spacing={1}>
                                <Grid item><div className={classes.margin}>

                                    <Grid container spacing={1} alignItems="flex-end">
                                        <Grid item>
                                            <ScheduleIcon fontSize="large" />
                                        </Grid>
                                        <Grid item>
                                            <label className={classes.textFieldLabel1}>Date of the function</label><br></br>
                                            <TextField
                                                required
                                                variant="filled"
                                                size="small"
                                                id="datetime-local"
                                                type="datetime-local"
                                                defaultValue="2021-09-04T00:48:00.000Z"
                                                onChange={(e) => { setDate(e.target.value) }}
                                                value={date}
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
                                    <div className={classes.margin2}>

                                        <Grid container spacing={1} alignItems="flex-start">
                                            <Grid item>
                                                <FastfoodIcon fontSize="large" />
                                            </Grid>
                                            <Grid item>
                                                <FormControl component="fieldset">
                                                    <FormLabel className={classes.textFieldLabel2} component="legend">Menu Selection</FormLabel>
                                                    <RadioGroup className={classes.textField2} aria-label="menu" name="menu" value={Menu} onChange={(e) => setMenu(e.target.value)}>
                                                        <FormControlLabel value="MenuA" control={<Radio required={true} color="primary"value={MenuA} />} label="Menu A" />
                                                        <FormControlLabel value="MenuB" control={<Radio required={true} color="primary"  value={MenuB}/>} label="Menu B" />
                                                        <FormControlLabel value="MenuC" control={<Radio required={true} color="primary"  value={MenuC}/>} label="Menu C" />
                                                    </RadioGroup>
                                                </FormControl>
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
                                    <TextField id="input-with-icon-grid" onChange={(e) => setRemarks(e.target.value)} value={remarks} label="Remarks"
                                        className={classes.textField} multiline />
                                </Grid>
                            </Grid>
                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        
                        <Button type="submit" variant="primary">{props.row? `Update Enquiry` : `Make an Enquiry`}</Button>

                    </Modal.Footer>
                </form>
            </Modal>
        </div>
    )
}

