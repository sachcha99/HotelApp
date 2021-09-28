import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useForm} from "react-hook-form";
import uniqueID from "uniqid";
import API from "../components/api";
import {confirmAlert} from "react-confirm-alert";
import {useHistory} from "react-router-dom";
import {Button} from "reactstrap";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const bcrypt = require('bcryptjs');

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: "#198853",
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignUpView() {
    const classes = useStyles();
    const history = useHistory();
    const { register, handleSubmit } = useForm();

    const [textInput, setTextInput] = useState({
        firstName:"",
        lastName:"",
        email: "",
        password:"",
        type:"customer",
    });

    const onSubmit = () => {
        textInput.password = bcrypt.hashSync(textInput.password, bcrypt.genSaltSync());
        API.post("/user/create", textInput)
            .then(() => {
                confirmAlert({
                    title: 'Registered Successfully',
                    message: 'You have successfully registered to Lime Tree',
                    buttons: [
                        {
                            label: 'Ok'
                        }
                    ]
                });
            });
    };

    const goToLogin=()=>{
        history.push("/login");
    }

    const handleTextInputChange = event => {
        const {name, value} = event.target;
        setTextInput((prev)=>{
            if(name==="firstName")
            {
                return(
                    {
                        firstName:value,
                        lastName:prev.lastName,
                        email: prev.email,
                        password:prev.password,
                        type:prev.type
                    }
                )
            }
            else if(name==="lastName")
            {
                return(
                    {
                        firstName:prev.firstName,
                        lastName:value,
                        email: prev.email,
                        password:prev.password,
                        type:prev.type
                    }
                )
            }
            else if(name==="email")
            {
                return(
                    {
                        firstName:prev.firstName,
                        lastName:prev.lastName,
                        email: value,
                        password:prev.password,
                        type:prev.type
                    }
                )
            }
            else if(name==="password")
            {
                return(
                    {
                        firstName:prev.firstName,
                        lastName:prev.lastName,
                        email: prev.email,
                        password:value,
                        type:prev.type
                    }
                )
            }
        })
    };

    return (
        <div className="sign-up">
            <Header/>
            <Container component="main" maxWidth="xs" style={{marginTop:130}}>
                <CssBaseline />
                <div  className="sign-up-form">
                    <Avatar className={classes.avatar}>
                        <LockOpenIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="fname"
                                    name="firstName"
                                    variant="filled"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                    onChange={handleTextInputChange}
                                    value={textInput.firstName}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="filled"
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="lname"
                                    onChange={handleTextInputChange}
                                    value={textInput.lastName}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="filled"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    onChange={handleTextInputChange}
                                    value={textInput.email}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="filled"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange={handleTextInputChange}
                                    value={textInput.password}
                                />
                            </Grid>
                        </Grid>
                        <div className="d-grid gap-2">
                            <Button
                                type="submit"
                                color="success"
                                className={classes.submit}
                            >
                                Sign Up
                            </Button>
                        </div>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link onClick={goToLogin} href="#" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
            <Footer/>
        </div>
    );
}