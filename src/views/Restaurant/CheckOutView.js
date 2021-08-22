import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from "@material-ui/core/styles";
import {Button, Input} from "reactstrap";
import {useForm} from "react-hook-form";
import API from "../../components/api";
import uniqueID from 'uniqid';
import RestHeader from "../../components/header/RestHeader";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

export default function CheckOutView() {
    const { register, handleSubmit } = useForm();

    const [textInput, setTextInput] = useState({
        firstName:"",
        lastName:"",
        addr1:"",
        addr2:"",
        city:"",
        phone:""
    });

    const cart = JSON.parse(localStorage.getItem("cart"));

    const sum = cart.reduce(function (prev, current) {
        return prev + +(current.unitPrice * current.itemQty)
    }, 0);

    const handleTextInputChange = event => {
        const {name, value} = event.target;
        setTextInput((prev)=>{
            if(name==="firstName")
            {
                return(
                    {
                        firstName:value,
                        lastName:prev.lastName,
                        addr1:prev.addr1,
                        addr2:prev.addr2,
                        city:prev.city,
                        phone:prev.phone
                    }
                )
            }
            else if(name==="lastName")
            {
                return(
                    {
                        firstName:prev.firstName,
                        lastName:value,
                        addr1:prev.addr1,
                        addr2:prev.addr2,
                        city:prev.city,
                        phone:prev.phone
                    }
                )
            }
            else if(name==="address1")
            {
                return(
                    {
                        firstName:prev.firstName,
                        lastName:prev.lastName,
                        addr1:value,
                        addr2:prev.addr2,
                        city:prev.city,
                        phone:prev.phone
                    }
                )
            }
            else if(name==="address2")
            {
                return(
                    {
                        firstName:prev.firstName,
                        lastName:prev.lastName,
                        addr1:prev.addr1,
                        addr2:value,
                        city:prev.city,
                        phone:prev.phone
                    }
                )
            }else if(name==="city")
            {
                return (
                    {
                        firstName:prev.firstName,
                        lastName:prev.lastName,
                        addr1:prev.addr1,
                        addr2:prev.addr2,
                        city:value,
                        phone:prev.phone
                    }
                )
            }else if(name==="phone")
            {
                return (
                    {
                        firstName:prev.firstName,
                        lastName:prev.lastName,
                        addr1:prev.addr1,
                        addr2:prev.addr2,
                        city:prev.city,
                        phone:value
                    }
                )
            }
        })
    };

    const onSubmit = () => {
        const Order = {
            orderNo: uniqueID.time('ITM-'),
            orderDate: new Date(),
            itemList:cart,
            status:"pending",
            amount: sum,
            customer:textInput,
            userId:"uid12000"
        }

        console.log(Order)

        API.post("/order/create", Order)
            .then(() => {
                confirmAlert({
                    customUI: ({ onClose }) => {
                        return (
                            <div className='custom-ui'>
                                <div className="success">
                                    <div className="alert-success">
                                        <h3> Your Order is Successfully Placed!</h3>
                                    </div>
                                    <p className="message">
                                        <b>Thanks for being awesome! </b><br /><br />

                                        We have received your order Details and would like to thank you for shopping with us. If your inquiry is urgent, please use the telephone number or email address listed below to talk to one of our staff members.
                                        <br /><br />
                                        We will make sure to send your order as soon as possible.
                                        <br /><br />
                                        Thank you
                                    </p>
                                    <Button
                                        onClick={() => {

                                            onClose();
                                        }}
                                    >
                                        Go To Home
                                    </Button>
                                </div>
                            </div>
                        );
                    }
                });
            });
    };

    const removeCache = () => {

    }
    const classes = useStyles();

    return (
        <div>
            <RestHeader count={cart.length} cartItems={cart} removeCache={removeCache}/>
            <div className="checkout-view">
                <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                    <Typography variant="h6" gutterBottom>
                        Shipping address
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="firstName"
                                name="firstName"
                                label="First name"
                                fullWidth
                                autoComplete="given-name"
                                onChange={handleTextInputChange}
                                value={textInput.itemCode}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="lastName"
                                name="lastName"
                                label="Last name"
                                fullWidth
                                autoComplete="family-name"
                                onChange={handleTextInputChange}
                                value={textInput.itemCode}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="address1"
                                name="address1"
                                label="Address line 1"
                                fullWidth
                                autoComplete="shipping address-line1"
                                onChange={handleTextInputChange}
                                value={textInput.itemCode}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="address2"
                                name="address2"
                                label="Address line 2"
                                fullWidth
                                autoComplete="shipping address-line2"
                                onChange={handleTextInputChange}
                                value={textInput.itemCode}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="city"
                                name="city"
                                label="City"
                                fullWidth
                                autoComplete="shipping address-level2"
                                onChange={handleTextInputChange}
                                value={textInput.itemCode}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="phone"
                                name="phone"
                                label="Mobile No"
                                fullWidth
                                autoComplete="shipping tel"
                                onChange={handleTextInputChange}
                                value={textInput.phone}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h6" gutterBottom>
                                Payment Method
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Input type="radio" name="radio1" checked="checked"/>{' '}Cash on delivery
                        </Grid>
                        <Grid item xs={12}>
                            <Button color="danger">Place Order</Button>{' '}<Button color="warning">Cancel</Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </div>
    );
}