import React, { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import GroupIcon from '@material-ui/icons/Group';
import DescriptionIcon from '@material-ui/icons/Description';
import MenuItem from '@material-ui/core/MenuItem';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import AssistantIcon from '@material-ui/icons/Assistant';
import ScheduleIcon from '@material-ui/icons/Schedule';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import API from "../api";
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
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
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },

}));

export const ReceptionHallBookingForm = ({ row, receptionType, imageName }) => {

    const classes = useStyles();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [Ent, setEnt] = useState();
    const [Category, setCategory] = useState();
    const [Menu, setMenu] = useState();
    const [capacity, setCapacity] = useState();
    const [remarks, setRemarks] = useState();
    const [userId, setuserId] = useState();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [date, setDate] = useState();
    const [sumbitDate, setsumbitDate] = useState();
    const [photoPath, setphotoPath] = useState();
    const [open, setOpen] = React.useState(false);
    const [Alertopen, setAlertopen] = React.useState(false);
    const token = JSON.parse(sessionStorage.getItem("token"));
    const today = new Date()

    const handleShow = () => {

        if (token) {
            setShow(true);
            setuserId(token.id)
            setEmail(token.email)
            setName(token.fname + " " + token.lname)
            setPhone("1234567896")
            setsumbitDate(today)
            setphotoPath(imageName)

        } else {
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
        if (row) {

            setCapacity(row.capacity)
            setEnt(row.entType);
            setCategory(row.category);
            setDate(row.funcDate.split('.', 1));
            setMenu(row.menu);
            setRemarks(row.remarks);
        }
    }, [show])


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
        if (!row) {
            const reception = {
                userId: userId,
                name: name,
                email: email,
                phone: phone,
                receptionName: receptionType ? receptionType : 'Unknown',
                status: "pending",
                capacity: capacity,
                entType: Ent,
                category: Category,
                funcDate: date,
                addDate: sumbitDate,
                photoPath: photoPath,
                menu: Menu,
                remarks: remarks
            }
            console.log(reception)

            //send post request to add a new reception hall reservation to the db
            API.post('/reception/create', reception)
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
        if (row) {
            const reception = {

                _id: row._id,
                userId: row.userId,
                name: row.name,
                email: row.email,
                phone: row.phone,
                receptionName: row.receptionName,
                status: "pending",
                capacity: capacity,
                entType: Ent,
                category: Category,
                funcDate: date,
                addDate: row.addDate,
                photoPath: row.photoPath,
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
                    setShow(false)
                })
                .catch(function (error) {
                    console.log(error);
                    setShow(false)
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
                    {row ? `Reception Hall Reservation Successfully Updated ` : `Reception Hall Reservation Successful`}
                </Alert>
            </Snackbar>
            <SlideAlert open={Alertopen} handleClose={handleAlertClose} />

            <div className="repBtn" >
                {row ?
                    <Button className=' conf-btn2' variant="primary" onClick={handleShow} ><EditOutlinedIcon fontSize="small" /> Edit</Button> :

                    <Button variant="primary" className="repBtn1" onClick={handleShow}  >Make an Enquiry</Button>
                }
            </div>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
                size="lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title>{row ? `Update Reception Hall Reservation Details` : `Check Availability of the Reception Hall`}</Modal.Title>
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
                                                        <FormControlLabel value="MenuA" control={<Radio required={true} color="primary" />} label="Menu A" />
                                                        <FormControlLabel value="MenuB" control={<Radio required={true} color="primary" />} label="Menu B" />
                                                        <FormControlLabel value="MenuC" control={<Radio required={true} color="primary" />} label="Menu C" />
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

                        <Button type="submit" className="bookingBtn" variant="primary">{row ? `Update` : `Reserve`}</Button>

                    </Modal.Footer>
                </form>
            </Modal>
        </div>
    )
}

