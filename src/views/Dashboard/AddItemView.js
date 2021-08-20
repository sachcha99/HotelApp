import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Fab, FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";
import FastfoodIcon from '@material-ui/icons/Fastfood';
import {useForm} from "react-hook-form";
import API from "../../components/api";
import {confirmAlert} from "react-confirm-alert";
import uniqueID from 'uniqid';
import clsx from "clsx";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AppBar from "@material-ui/core/AppBar";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
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
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    input: {
        display: 'none'
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(5, 0, 1),
    },
    upload:{
        paddingLeft: 16
    }
}));

export default function AddItemView() {
    const classes = useStyles();
    const { register, handleSubmit } = useForm();

    const [textInput, setTextInput] = useState({
        itemCode:uniqueID.time('ITM-'),
        itemName:"",
        description:"",
        imageURL:"",
        category:"",
        price:""
    });

    const onSubmit = () => {
        API.post("/food/create", textInput)
            .then(() => {
                confirmAlert({
                    title: 'Added Successfully',
                    message: 'Food Item has added successfully',
                    buttons: [
                        {
                            label: 'Ok'
                        }
                    ]
                });
            });
    };

    const handleTextInputChange = event => {
        const {name, value} = event.target;
        setTextInput((prev)=>{
           if(name==="itemName")
            {
                return(
                    {
                        itemCode:prev.itemCode,
                        itemName:value,
                        description:prev.description,
                        imageURL:prev.imageURL,
                        category:prev.category,
                        price:prev.price
                    }
                )
            }
            else if(name==="description")
            {
                return(
                    {
                        itemCode:prev.itemCode,
                        itemName:prev.itemName,
                        description:value,
                        imageURL:prev.imageURL,
                        category:prev.category,
                        price:prev.price
                    }
                )
            }
            else if(name==="imageURL")
            {
                return(
                    {
                        itemCode:prev.itemCode,
                        itemName:prev.itemName,
                        description:prev.description,
                        imageURL:value,
                        category:prev.category,
                        price:prev.price
                    }
                )
            }
            else if(name==="category")
            {
                return(
                    {
                        itemCode:prev.itemCode,
                        itemName:prev.itemName,
                        description:prev.description,
                        imageURL:prev.imageURL,
                        category:value,
                        price:prev.price
                    }
                )
            }else if(name==="price")
            {
                return (
                    {
                        itemCode:prev.itemCode,
                        itemName:prev.itemName,
                        description:prev.description,
                        imageURL:prev.imageURL,
                        category:prev.category,
                        price:value
                    }
                )
            }
        })
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <AppBar position="absolute" color={"secondary"}>
                <Toolbar className={classes.toolbar}>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        Add Food Item
                    </Typography>
                </Toolbar>
            </AppBar>
            <br/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <FastfoodIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Add Food Item
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="filled"
                                required
                                fullWidth
                                id="itemCode"
                                label="Item Code"
                                name="itemCode"
                                inputRef={register("itemCode")}
                                onChange={handleTextInputChange}
                                value={textInput.itemCode}
                                disabled
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="filled"
                                required
                                fullWidth
                                id="itemName"
                                label="Item Name"
                                name="itemName"
                                onChange={handleTextInputChange}
                                value={textInput.itemName}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="filled"
                                required
                                fullWidth
                                id="description"
                                label="Description"
                                name="description"
                                multiline
                                rows={4}
                                onChange={handleTextInputChange}
                                value={textInput.description}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="filled"
                                required
                                fullWidth
                                id="imageURL"
                                label="ImageURL"
                                name="imageURL"
                                onChange={handleTextInputChange}
                                value={textInput.imageURL}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl variant="filled" fullWidth>
                                <InputLabel id="demo-simple-select-filled-label">Select a category</InputLabel>
                                <Select
                                    labelId="demo-simple-select-filled-label"
                                    id="demo-simple-select-filled"
                                    onChange={handleTextInputChange}
                                    value={textInput.category}
                                    name="category"
                                >
                                    <MenuItem value={"special"}>Specials</MenuItem>
                                    <MenuItem value={"kottu"}>Kottu</MenuItem>
                                    <MenuItem value={"noodles"}>Noodles</MenuItem>
                                    <MenuItem value={"pizza"}>Pizza</MenuItem>
                                    <MenuItem value={"dessert"}>Dessert</MenuItem>
                                    <MenuItem value={"beverages"}>Beverages</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="filled"
                                required
                                fullWidth
                                id="price"
                                label="Price"
                                name="price"
                                onChange={handleTextInputChange}
                                value={textInput.price}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="secondary"
                        className={classes.submit}
                    >
                        Add Item
                    </Button>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                    >
                        Cancel
                    </Button>
                </form>
            </div>
            <Box mt={5}>
                <Copyright/>
            </Box>
            <br/>
        </Container>
    );
}