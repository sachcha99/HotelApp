import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Col} from "react-bootstrap";
import {Button, DropdownItem, DropdownMenu, DropdownToggle, Row, UncontrolledButtonDropdown} from "reactstrap";
import ManageFoodView from "./ManageFoodView";
import ManageFoodReportView from "./ManageFoodReportView";
import ManageOrderReportView from "./ManageOrderReportView";
import API from "../../components/api";

export default function IconLabelTabs() {
    const [value, setValue] = React.useState(0);
    const [view, setView] = useState(null);

    useEffect(() => {
        setView(<ManageOrderReportView/>);
    }, []);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        if(newValue==0){
            setView(<ManageOrderReportView/>);
        }else if(newValue==1){
            setView(<ManageFoodReportView/>);
        }
    };

    return (
        <div className="item-view-header">
            <Row>
                <Col xs={4} className="dashboard-header">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="fullWidth"
                        indicatorColor="secondary"
                        textColor="secondary"
                        aria-label="icon label tabs example"
                    >
                        <Tab label="Orders" aria-controls="a11y-tabpanel-0" id="a11y-tab-0" />
                        <Tab label="Foods" aria-controls="a11y-tabpanel-1" id="a11y-tab-1" />
                    </Tabs>
                </Col>
            </Row>
            {view}
        </div>
    );
}
