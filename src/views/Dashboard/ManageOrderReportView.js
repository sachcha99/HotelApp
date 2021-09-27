import React, {useEffect, useState} from "react";
import Typography from "@material-ui/core/Typography";
import {
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
import OrderReportTable from "../../components/Food/OrderReportTable";
import jsPDF from "jspdf";
import PrintIcon from "@material-ui/icons/Print";
import Button from "@material-ui/core/Button";
import {Input} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import RefreshIcon from "@material-ui/icons/Refresh";

let orderNo="";

export default function ManageOrderReportView() {
    const history = useHistory();
    const [rows, setRows] = useState([]);

    useEffect(() => {
        API.get(`/order/`)
            .then(res => {
                setRows(res.data)
            })
            .catch(err => {
            });
    }, []);

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

    const refreshFoodTable = () => {
        API.get(`/order/`)
            .then(res => {
                setRows(res.data)
            })
            .catch(err => {
            });
    }

    const handleSearch=(event)=>{
        orderNo = event.target.value;
    }

    const findOrderByOrderNo =()=>{
        if(orderNo){
            API.get(`/order/find/${orderNo}`)
                .then(res => {
                    setRows(res.data)
                    console.log(res.data)
                })
                .catch(err => {
                });
        }
    }
    const generateOrderPDF = orders => {
        const doc = new jsPDF();

        const tableColumn = ["OrderNo","Order Date", "Description", "Status", "Amount","Customer Name","Phone"];
        const tableRows = [];

        orders.forEach(item => {
            let description = "";
            item.itemList.map((item=>{
                description = item.itemName +" X " + item.itemQty
            }))
            const itemData = [
                item.orderNo,
                new Date(item.orderDate).toUTCString(),
                description,
                item.status,
                "Rs."+item.amount,
                item.customer.firstName+" "+item.customer.lastName,
                item.customer.phone
            ];
            tableRows.push(itemData);
        });


        doc.autoTable(tableColumn, tableRows, { startY: 20 });
        const date = Date().split(" ");
        const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];
        doc.text("Food Order Details", 14, 15);
        doc.save(`report_${dateStr}.pdf`);
    };

    return (
        <div>
            <div className="item-view-header">
                <Row>
                    <Col className="dashboard-header">
                        <Typography component="h2" variant="h6" color="inherit" noWrap>
                            Total Result ({rows.length})
                        </Typography>
                    </Col>
                    <Col className="add-new-listening">
                        <Input type="text" name="text" id="exampleText" onChange={handleSearch} placeholder="Order No" />
                        <IconButton aria-label="delete" onClick={findOrderByOrderNo}>
                            <SearchIcon/>
                        </IconButton>
                        <IconButton aria-label="delete" onClick={refreshFoodTable}>
                            <RefreshIcon/>
                        </IconButton>
                        {' '}
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
                        {' '}
                        <Button
                            variant="contained"
                            color="default"
                            startIcon={<PrintIcon />}
                            onClick={()=>{generateOrderPDF(rows)}}
                        >
                            PRINT
                        </Button>
                    </Col>
                </Row>
            </div>
            <OrderReportTable rows={rows}/>
        </div>
    );

}