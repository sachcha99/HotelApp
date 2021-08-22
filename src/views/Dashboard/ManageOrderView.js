import React, {useEffect, useState} from "react";
import Typography from "@material-ui/core/Typography";
import {Button, Col, Row, UncontrolledDropdown} from "reactstrap";
import "./ManageFoodView.css";
import {useHistory} from "react-router-dom";
import API from "../../components/api";
import DropdownToggle from "react-bootstrap/DropdownToggle";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import DropdownItem from "react-bootstrap/DropdownItem";
import OrderTable from "../../components/Food/OrderTable";

export default function ManageOrderView() {
    const history = useHistory();
    const [rows, setRows] = useState([]);

    useEffect(() => {
        API.get(`/order/`)
            .then(res => {
                setRows(res.data)
            })
            .catch(err => {
            });
    }, [rows]);

    return (
        <div>
            <div className="item-view-header">
                <Row>
                    <Col className="dashboard-header">
                        <Typography component="h2" variant="h6" color="inherit" noWrap>
                            Pending Orders ({rows.length})
                        </Typography>
                    </Col>
                    <Col className="add-new-listening">
                        <UncontrolledDropdown>
                            <DropdownToggle caret>
                                Status
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem header>Header</DropdownItem>
                                <DropdownItem disabled>Action</DropdownItem>
                                <DropdownItem>Another Action</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Another Action</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Col>
                </Row>
            </div>
            <OrderTable rows={rows}/>
            <br/>
            <div className="item-view-header">
                <Row>
                    <Col className="dashboard-header">
                        <Typography component="h2" variant="h6" color="inherit" noWrap>
                            All Orders ({rows.length})
                        </Typography>
                    </Col>
                    <Col className="add-new-listening">
                        <UncontrolledDropdown>
                            <DropdownToggle caret>
                                Status
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem header>Header</DropdownItem>
                                <DropdownItem disabled>Action</DropdownItem>
                                <DropdownItem>Another Action</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Another Action</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Col>
                </Row>
            </div>
            <OrderTable rows={rows}/>
        </div>
    );

}