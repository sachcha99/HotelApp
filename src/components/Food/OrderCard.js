import React from "react";
import {Button, Col, Row} from "reactstrap";

const OrderCard = (props) => {
    return (
        <div className="order-card">
            <Row>
                <Col>
                    <h4>Order No : {props.row.orderNo}</h4>
                    <br/>
                    {
                        props.row.itemList.map((item)=>{
                            return(<p>{item.itemName} X {item.itemQty}</p>);
                        })
                    }
                    <p>Total : Rs.{props.row.amount}</p>
                    <p>Status : {props.row.status}</p>
                </Col>
                <Col>

                </Col>
            </Row>
        </div>
    );
}

export default OrderCard;