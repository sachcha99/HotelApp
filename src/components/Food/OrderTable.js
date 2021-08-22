import React from "react";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import {Button} from "reactstrap";
import {makeStyles, withStyles} from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import CardMedia from '@material-ui/core/CardMedia';
import {confirmAlert} from "react-confirm-alert";
import {useHistory} from "react-router-dom";
import API from "../api";

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

const OrderTable = (props) => {
    const history = useHistory();
    const classes = useStyles();

    const deleteFood= (id,name) => {
        confirmAlert({
            title: 'Confirm to Delete',
            message: 'Are you sure to delete '+ name +' item.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        API.delete(`/food/delete/${id}`)
                            .then();

                    }
                },
                {
                    label: 'No'
                }
            ]
        });
    }

    const goToEditItem =(row)=>{
        history.push({pathname: "/restaurant/food/edit", state: {data: row}});
    }

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
                        <StyledTableCell align="left">Phone</StyledTableCell>
                        <StyledTableCell align="left">Action</StyledTableCell>
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
                                <StyledTableCell style={{width: "15%"}} align="left">{row.customer.firstName}</StyledTableCell>
                                <StyledTableCell style={{width: "11%"}} align="left">{row.customer.phone}</StyledTableCell>

                                <StyledTableCell style={{width: "2%"}} align="left">
                                    <Button color="warning" onClick={()=>{goToEditItem(row)}}>Update</Button>
                                </StyledTableCell>
                            </StyledTableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
export default OrderTable;