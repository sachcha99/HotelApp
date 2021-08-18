import React, {useEffect, useState} from "react";
import Typography from "@material-ui/core/Typography";
import {Button, Col, Row} from "reactstrap";
import "./ManageFoodView.css";
import {useHistory} from "react-router-dom";
import API from "../../components/api";
import FoodTable from "../../components/FoodTable";

export default function ManageFoodView() {
    const history = useHistory();
    const [rows, setRows] = useState([]);

    useEffect(() => {
        API.get(`/food/`)
            .then(res => {
                setRows(res.data)
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            });
    }, []);

    const goToAddItem = ()=>{
        history.push("/food/add");
    }
    return (
        <div>
            <div className="item-view-header">
                <Row>
                    <Col className="dashboard-header">
                        <Typography component="h2" variant="h6" color="inherit" noWrap>
                            Active listings (0)
                        </Typography>
                    </Col>
                    <Col className="add-new-listening">
                        <Button onClick={goToAddItem} color="warning">Add New Item</Button>
                    </Col>
                </Row>
            </div>
            <FoodTable rows={rows}/>
        </div>
    );

}