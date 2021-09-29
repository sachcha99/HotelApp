import React, {useState} from 'react';
import {withStyles, makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {useHistory} from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import {Button, Col, Row} from "reactstrap";
import {confirmAlert} from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { Container} from "reactstrap";
import RestHeader from "../../components/header/RestHeader";
import Footer from "../../components/footer/Footer";

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: "#2D411D",
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

export default function FoodCartView() {
    const history = useHistory();
    const classes = useStyles();
    const token =JSON.parse(sessionStorage.getItem("token"));
    const cart1 = JSON.parse(localStorage.getItem("cart")); //get cart item back

    let itemCount = cart1.length;

    //calculate total price
    const sum = cart1.reduce(function (prev, current) {
        return prev + +(current.unitPrice * current.itemQty)
    }, 0);

    let shipCost = 200;
    let cartHead = "Cart"

    if (itemCount == 0) {
        shipCost = 0;
        cartHead = "Cart is Empty"
    }

    const tot = shipCost + sum;
    const clearCart = () => {
        confirmAlert({
            title: 'Confirm to clear',
            message: 'Are you sure to clear cart.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        localStorage.removeItem("cart");
                        history.push("/restaurant/menu");
                        window.location.reload();
                    }
                },
                {
                    label: 'No'
                }
            ]
        });
    };

    const removeCache = () => {

    }
    return (
        <div className="food-cart">
            <RestHeader count={cart1.length} cartItems={cart1} removeCache={removeCache}/>
            <div>
                <h1 className="cart-title">Shopping Cart</h1>
                {/* cart details part */}
                <Container className="themed-container">
                    <Row>
                        <Col className="item" lg="8">
                            <h3>{cartHead} ({cart1.length})</h3>
                            <div>
                                <TableContainer component={Paper}>
                                    <Table className={classes.table} aria-label="customized table">
                                        <TableHead>
                                            <TableRow>
                                                <StyledTableCell>Item Name</StyledTableCell>
                                                <StyledTableCell align="left">Item Description</StyledTableCell>
                                                <StyledTableCell align="left">Price</StyledTableCell>
                                                <StyledTableCell align="left">Quantity</StyledTableCell>

                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {cart1.map((row) => (
                                                <StyledTableRow key={row.itemName}>
                                                    <StyledTableCell component="th" scope="row">
                                                        {row.itemName}
                                                    </StyledTableCell>
                                                    <StyledTableCell align="left">{row.description}</StyledTableCell>
                                                    <StyledTableCell align="left">{row.unitPrice}</StyledTableCell>
                                                    <StyledTableCell align="left">{row.itemQty}</StyledTableCell>

                                                </StyledTableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>

                            </div>
                        </Col>
                        <Col className="check" xs="3">
                            <h4 className="order">Order Summary </h4>
                            <Row>
                                <Row>
                                    <div className="ordersum" >
                                            <Row>
                                                <Col style={{marginLeft:8}} xs={7}>SubTotal ({itemCount} ) items</Col>
                                                <Col style={{textAlign:"right"}}> Rs : {sum}</Col>
                                            </Row>
                                            <Row>
                                                <Col style={{marginLeft:8}} xs={7}>Shipping</Col>
                                                <Col style={{textAlign:"right"}} className="order-d"> Rs : {shipCost}</Col>
                                            </Row>
                                            <Row>
                                                <Col style={{marginLeft:8}} xs={7} id="order-t">Total</Col>
                                                <Col style={{textAlign:"right"}} id="order-t"> Rs : {tot}</Col>
                                            </Row>
                                    </div>
                                </Row>
                                <Col style={{textAlign:"left",marginLeft:8}}>
                                    <Button color="warning"onClick={() => {
                                        clearCart();
                                    }}>Clear Cart</Button>
                                </Col>
                                <Col style={{textAlign:"right",marginRight:8}}>
                                    <Button color="success" onClick={() => {
                                        if(itemCount>0){
                                            if(token){
                                                history.push("/restaurant/checkout");
                                            }else{
                                                history.push("/login");
                                            }
                                        }else{
                                            confirmAlert({
                                                title: 'No Items in Cart',
                                                message: 'There are no items in cart to checkout',
                                                buttons: [
                                                    {
                                                        label: 'ok',
                                                        onClick: () => {
                                                        }
                                                    },
                                                ]
                                            });
                                        }
                                    }}>Check out</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer/>
        </div>);
}
