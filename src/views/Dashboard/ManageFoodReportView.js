import React, {useEffect, useState} from "react";
import Typography from "@material-ui/core/Typography";
import {Col, DropdownItem, DropdownMenu, DropdownToggle, Row, UncontrolledButtonDropdown} from "reactstrap";
import "./ManageFoodView.css";
import API from "../../components/api";
import PrintIcon from '@material-ui/icons/Print';
import FoodReportTable from "../../components/Food/FoodReportTable";
import Button from "@material-ui/core/Button";
import jsPDF from "jspdf";
import "jspdf-autotable";
import {Input} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import RefreshIcon from '@material-ui/icons/Refresh';

let itemCode = "";

export default function ManageFoodReportView(props) {
    const [rows, setRows] = useState([]);

    useEffect(() => {
        API.get(`/food/`)
            .then(res => {
                setRows(res.data)
            })
            .catch(err => {
            });
    }, []);


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
    const handleSearch=(event)=>{
        itemCode = event.target.value;
    }

    const findFoodByCode =()=>{
        if(itemCode){
            API.get(`/food/${itemCode}`)
                .then(res => {
                    setRows(res.data)
                })
                .catch(err => {
                });
        }
    }

    const generateFoodPDF = items => {
        // initialize jsPDF
        const doc = new jsPDF();

        // define the columns we want and their titles
        const tableColumn = ["Item Id", "Item Name", "Description", "Category", "Price"];
        // define an empty array of rows
        const tableRows = [];

        items.forEach(item => {
            const itemData = [
                item.itemCode,
                item.itemName,
                item.description,
                item.category,
                item.price
                //format(new Date(ticket.updated_at), "yyyy-MM-dd")
            ];
            tableRows.push(itemData);
        });


        // startY is basically margin-top
        doc.autoTable(tableColumn, tableRows, { startY: 20 });
        const date = Date().split(" ");
        // we use a date string to generate our filename.
        const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];
        // ticket title. and margin-top + margin-left
        doc.text("Food Item Details", 14, 15);
        // we define the name of our PDF file.
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
                        <Input type="text" name="text" id="exampleText" onChange={handleSearch} placeholder="Item Code" />
                        <IconButton aria-label="delete" onClick={findFoodByCode}>
                            <SearchIcon/>
                        </IconButton>

                        <UncontrolledButtonDropdown outline>
                            <DropdownToggle caret color="primary">
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
                        {' '}
                        <Button
                            variant="contained"
                            color="default"
                            startIcon={<PrintIcon />}
                            onClick={()=>{generateFoodPDF(rows)}}
                        >
                            PRINT
                        </Button>
                    </Col>
                </Row>
            </div>
            <FoodReportTable rows={rows}/>
        </div>
    );
}