import React, {useEffect, useState} from "react";
import Typography from "@material-ui/core/Typography";
import {
    Button,
    Col, DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Row,
    UncontrolledButtonDropdown,
    UncontrolledDropdown
} from "reactstrap";
import "./ManageFoodView.css";
import {useHistory} from "react-router-dom";
import API from "../../components/api";
import OrderTable from "../../components/Food/OrderTable";
import {Input} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

export default function ManageOrderView() {
    const history = useHistory();
    const [rows, setRows] = useState([]);
    const [rows1, setRows1] = useState([]);

    useEffect(() => {
        API.get(`/order/`)
            .then(res => {
                setRows(res.data)
            })
            .catch(err => {
            });
        API.get(`/order/status/pending`)
            .then(res => {
                setRows1(res.data)
            })
            .catch(err => {
            });
    }, [rows]);

    const filterByStatus=(status)=>{
        if(status=="all"){
            API.get(`/order/`)
                .then(res => {
                    setRows(res.data)
                })
                .catch(err => {
                });
        }else{
            API.get(`/order/status/${status}`)
                .then(res => {
                    console.log(res.data)
                    setRows(res.data)
                })
                .catch(err => {
                });
        }

    }
    return (
        <div>
            <div className="item-view-header">
                <Row>
                    <Col className="dashboard-header">
                        <Typography component="h2" variant="h6" color="inherit" noWrap>
                            Pending Orders ({rows.length})
                        </Typography>
                    </Col>
                </Row>
            </div>
            <OrderTable rows={rows1}/>
            <br/>
            <div className="item-view-header">
                <Row>
                    <Col className="dashboard-header">
                        <Typography component="h2" variant="h6" color="inherit" noWrap>
                            All Orders ({rows.length})
                        </Typography>
                    </Col>
                    <Col className="add-new-listening">
                        <UncontrolledButtonDropdown>
                            <DropdownToggle caret color="primary">
                                Status
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem onClick={()=>{filterByStatus("all")}}>All</DropdownItem>
                                <DropdownItem onClick={()=>{filterByStatus("pending")}}>Pending</DropdownItem>
                                <DropdownItem onClick={()=>{filterByStatus("prepared")}}>Prepared</DropdownItem>
                                <DropdownItem onClick={()=>{filterByStatus("delivered")}}>Delivered</DropdownItem>
                                <DropdownItem onClick={()=>{filterByStatus("completed")}}>Completed</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledButtonDropdown>
                    </Col>
                </Row>
            </div>
            <OrderTable rows={rows}/>
        </div>
    );

}