import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {useHistory} from "react-router-dom";
import {useForm} from "react-hook-form";
import API from "../components/api";
import {confirmAlert} from "react-confirm-alert";
const bcrypt = require('bcryptjs');


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Lime Tree
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://images.unsplash.com/photo-1493770348161-369560ae357d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignInView() {
    const classes = useStyles();
    const history = useHistory();
    const { register, handleSubmit } = useForm();

    const [textInput, setTextInput] = useState({
        email: "",
        password:""
    });

    const onSubmit = () => {
        let email = textInput.email;
        API.post("/user/validate",{email:email})
            .then(res=>{
                if(res.data){
                    let hashPass = res.data.password;
                    const isValid = bcrypt.compareSync(textInput.password, hashPass);
                    if(isValid){
                        const token ={
                            id: res.data._id,
                            fname: res.data.firstName,
                            lname: res.data.lastName,
                            email:res.data.email,
                            phone:res.data.phone,
                            type:res.data.type
                        }
                        sessionStorage.setItem("token",JSON.stringify(token));
                        switch(token.type) {
                            case "customer":
                                history.push("/restaurant/menu");
                                break;
                            case "headChef":
                                history.push("/restaurant/dashboard");
                                break;
                            default:
                            // code block
                        }
                    }else {
                        confirmAlert({
                            title: 'Login Error',
                            message: 'You have entered invalid password.',
                            buttons: [
                                {
                                    label: 'Ok'
                                }
                            ]
                        });
                    }
                }else{
                    confirmAlert({
                        title: 'Login Error',
                        message: 'Your entered email address is not registered.',
                        buttons: [
                            {
                                label: 'Ok'
                            }
                        ]
                    });
                }
            })
    };
    const goToRegister=()=>{
        history.push("/register");
    }
    const handleTextInputChange = event => {
        const {name, value} = event.target;
        setTextInput((prev)=>{
            if(name==="email")
            {
                return(
                    {
                        email: value,
                        password:prev.password
                    }
                )
            }
            else if(name==="password")
            {
                return(
                    {
                        email: prev.email,
                        password:value,
                    }
                )
            }
        })
    };
    return (
        <div>
            <Grid container component="main" className={classes.root}>
                <CssBaseline />
                <Grid item xs={false} sm={4} md={8} className={classes.image} />
                <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} square>
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <form className={classes.form} onSubmit={handleSubmit(onSubmit)} >
                            <TextField
                                variant="filled"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                onChange={handleTextInputChange}
                                value={textInput.email}
                            />
                            <TextField
                                variant="filled"
                                margin="normal"
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
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="secondary"
                                className={classes.submit}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link onClick={goToRegister} variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                            <Box mt={5}>
                                <Copyright />
                            </Box>
                        </form>
                    </div>
                </Grid>
            </Grid>
        </div>

    );
}