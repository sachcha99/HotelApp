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
import ChildCareIcon from '@material-ui/icons/ChildCare';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import HouseIcon from '@material-ui/icons/House';
import LocalActivityIcon from '@material-ui/icons/LocalActivity';
import Switch from '@material-ui/core/Switch';

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

export const RoomBookingForm = () => {

    const classes = useStyles();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [Rooms, setRooms] = useState();
    const [Category, setCategory] = useState();
    const [Menu, setMenu] = useState();
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
      });

      const handleSwitch = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };
    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Reserve a Room
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
                    <Modal.Title>Reserve a room</Modal.Title>
                </Modal.Header>
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
                                    <TextField  id="input-with-icon-grid" label="Adult" type="number"
                                        className={classes.textField2} inputProps={{ min: 0}} />
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
                                    <TextField  id="input-with-icon-grid" label="Child" type="number"
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
                                        <Select
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
                                <div className={classes.margin}>

                                    <Grid container spacing={1} alignItems="flex-end">
                                        <Grid item>
                                            <ScheduleIcon fontSize="large" />
                                        </Grid>
                                        <Grid item>
                                            <label className={classes.textFieldLabel1}>Check-Out Date</label><br></br>
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
                   
                    <div className={classes.margin}>
                        <Grid container spacing={1} alignItems="flex-start">
                            <Grid item>
                                <LocalActivityIcon fontSize="large" />
                            </Grid>
                            <Grid item>
                            <label className={classes.textFieldLabel4}>Loyality Member</label>
                            <Switch
        checked={state.checkedB}
        onChange={handleSwitch}
        color="primary"
        name="checkedB"
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
                    <Button variant="primary">Reserve</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

