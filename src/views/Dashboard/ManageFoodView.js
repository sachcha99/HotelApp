import React, {useEffect, useState} from "react";
import Typography from "@material-ui/core/Typography";
import {Button, Col, DropdownItem, DropdownMenu, DropdownToggle, Row, UncontrolledButtonDropdown} from "reactstrap";
import "./ManageFoodView.css";
import {useHistory} from "react-router-dom";
import API from "../../components/api";
import FoodTable from "../../components/Food/FoodTable";
import {Input, TextField} from "@material-ui/core";
import AddItemView from "./AddItemView";
import SearchIcon from '@material-ui/icons/Search';
import IconButton from "@material-ui/core/IconButton";

export default function ManageFoodView(props) {
    const history = useHistory();
    const [rows, setRows] = useState([]);

    useEffect(() => {
        API.get(`/food/`)
            .then(res => {
                setRows(res.data)
            })
            .catch(err => {
            });
    }, [rows]);

    const goToAddItem = ()=>{
        props.dashboard(<AddItemView dashboard={props.dashboard}/>);
    }

    const filterByCategory=(category)=>{
        if(category=="all"){
            API.get(`/food/`)
                .then(res => {
                    setRows(res.data)
                })
                .catch(err => {
                });
        }else{
            API.get(`/food/category/${category}`)
                .then(res => {
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
                            Active listings ({rows.length})
                        </Typography>
                    </Col>
                    <Col className="add-new-listening">
                        <Button onClick={goToAddItem} color="primary">Add New Item</Button>{' '}
                        <UncontrolledButtonDropdown outline color="primary">
                            <DropdownToggle caret>
                                Category
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem  onClick={()=>{filterByCategory("all")}}>All</DropdownItem>
                                <DropdownItem  onClick={()=>{filterByCategory("kottu")}}>Kottu</DropdownItem>
                                <DropdownItem  onClick={()=>{filterByCategory("noodles")}}>Noodles</DropdownItem>
                                <DropdownItem  onClick={()=>{filterByCategory("pizza")}}>Pizza</DropdownItem>
                                <DropdownItem  onClick={()=>{filterByCategory("dessert")}}>Dessert</DropdownItem>
                                <DropdownItem  onClick={()=>{filterByCategory("beverages")}}>Beverages</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledButtonDropdown>
                    </Col>
                </Row>
            </div>
            <FoodTable dashboard={props.dashboard} rows={rows}/>
        </div>
    );
}