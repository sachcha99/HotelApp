import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
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

const useStyles = makeStyles((theme) => ({
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

export const ReceptionHallBookingForm = () => {

    const classes = useStyles();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [Ent, setEnt] = useState();
    const [Category, setCategory] = useState();
    const [Menu, setMenu] = useState();
    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Book Now
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
                size="lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Check Availability of the Reception Hall</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  
                    <div>

                        <div className={classes.margin}>
                            <Grid container spacing={1} alignItems="flex-end">
                                <Grid item>
                                    <GroupIcon fontSize="large" />
                                </Grid>
                                <Grid item>
                                    <TextField id="input-with-icon-grid" label="Capacity" type="number"
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
                                        variant="filled"
                                        size="small"
                                        id="datetime-local"
                                        type="datetime-local"
                                        defaultValue="2020-05-24T10:30"
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
                                        <RadioGroup className={classes.textField2} aria-label="gender" name="gender1" value={Menu} onChange={(e) => setMenu(e.target.value)}>
                                            <FormControlLabel value="MenuA" control={<Radio />} label="Menu A" />
                                            <FormControlLabel value="MenuB" control={<Radio />} label="Menu B" />
                                            <FormControlLabel value="MenuC" control={<Radio />} label="Menu C" />
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
                                <TextField id="input-with-icon-grid" label="Remarks"
                                    className={classes.textField} multiline />
                            </Grid>
                        </Grid>
                    </div>
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Make an Enquiry</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

