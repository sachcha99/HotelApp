import React, {useState} from "react";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import {makeStyles, withStyles} from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import {useHistory} from "react-router-dom";

//const token =JSON.parse(sessionStorage.getItem("token"));

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: "grey",
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

const OrderReportTable = (props) => {
    const history = useHistory();
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Order No</StyledTableCell>
                        <StyledTableCell>Date</StyledTableCell>
                        <StyledTableCell align="left">Description</StyledTableCell>
                        <StyledTableCell align="left">status</StyledTableCell>
                        <StyledTableCell align="left">Amount</StyledTableCell>
                        <StyledTableCell align="left">Customer Name</StyledTableCell>
                        <StyledTableCell align="left">Customer Address</StyledTableCell>
                        <StyledTableCell align="left">Phone</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.rows.length > 0 && props.rows.map((row) => {
                        let description = "";
                        row.itemList.map((item=>{
                            description = item.itemName +" X " + item.itemQty
                        }))

                        return (
                            <StyledTableRow key={row._id}>
                                <StyledTableCell style={{width: "10%"}} align="left">{row.orderNo}</StyledTableCell>
                                <StyledTableCell style={{width: "11%"}} align="left">
                                    {new Date(row.orderDate).toUTCString()}
                                </StyledTableCell>
                                <StyledTableCell style={{width: "20%"}} align="left">{description}</StyledTableCell>
                                <StyledTableCell style={{width: "10%"}} align="left">{row.status}</StyledTableCell>
                                <StyledTableCell style={{width: "11%"}} align="left">{"Rs."+row.amount}</StyledTableCell>
                                <StyledTableCell style={{width: "15%"}} align="left">{row.customer.firstName+" "+row.customer.lastName}</StyledTableCell>
                                <StyledTableCell style={{width: "15%"}} align="left">{row.customer.addr1+" "+row.customer.addr2+" "+row.customer.city}</StyledTableCell>
                                <StyledTableCell style={{width: "11%"}} align="left">{row.customer.phone}</StyledTableCell>
                            </StyledTableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
export default OrderReportTable;