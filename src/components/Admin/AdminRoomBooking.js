import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import API from "../api";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import {
  Col,
  Row,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import Room01 from "../Images/room01.jpg";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Title from "../header/Title";
import image from "../Images/roomreseve.jpg";
import AdminLoader from "../Preloader/AdminLoader";
import { RoomReport } from "./RoomReport";
import CalcDate from "../Common/CalcDate";
import GroupIcon from "@material-ui/icons/Group";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import TodayOutlinedIcon from "@material-ui/icons/TodayOutlined";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import BedroomChildIcon from "@mui/icons-material/BedroomChild";
import BedroomParentIcon from "@mui/icons-material/BedroomParent";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import StarRateRoundedIcon from "@material-ui/icons/StarRateRounded";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import EventIcon from "@mui/icons-material/Event";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import DoneAllRoundedIcon from "@mui/icons-material/DoneAllRounded";
import RemoveDoneRoundedIcon from "@mui/icons-material/RemoveDoneRounded";
import Snackbar from "@material-ui/core/Snackbar";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import Slide from "@material-ui/core/Slide";

function TransitionUp(props) {
  return <Slide {...props} direction="up" />;
}

export const AdminRoomBooking = () => {
  const [status, setStatus] = useState("all");
  const [rows, setRows] = useState("");
  const [approve, setApprove] = useState("all");

  const [StatusFilter, setStatusFilter] = useState("All");

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState("");
  let count = 0;
  const [AdminLoading, setAdminLoading] = useState(true);
  const [open, setOpen] = React.useState(false);
  const [openDel, setOpenDel] = React.useState(false);
  const [transition, setTransition] = React.useState(undefined);

  useEffect(() => {
    if (!searchTerm) {
      API.get(`/room/`)
        .then((res) => {
          setRows(res.data);
          setAdminLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [searchTerm]);

  const handleClick = (Transition) => () => {
    setTimeout(() => {
      setTransition(() => Transition);
      setOpen(true);
    }, 1000);
  };

  const handleClose = () => {
    setOpen(false);
    setOpenDel(false);
  };

  const handleClickDel = (Transition) => () => {
    setTimeout(() => {
      setTransition(() => Transition);
      setOpenDel(true);
    }, 1000);
  };

  const findItems = (itemName) => {
    if (itemName) {
      API.get(`/room/search/${itemName}`)

        .then((res) => {
          let arr = res.data;
          let i;
          let list = [];
          for (i = 0; i < arr.length; i++) {
            list.push(arr[i]);
          }
          setRows(list);
        })
        .catch((err) => {
          console.log(err);
        });
     
    }
  };

  {
    rows.length > 0 &&
      rows.map((row) => {
        if (row.status === status || status === "all") {
          count++;
        }
      });
  }

  const handleChange = (event) => {
    findItems(event.target.value);
    setSearchTerm(event.target.value);
   
  };

  const approveBooking = (rowData) => {
    for (let i = 0; i < rows.length; i++) {
      if (rows[i]._id == rowData._id) {
        setApprove("approved");
        rowData.status = "approved";
        const approveData = {
          _id: rowData._id,
          userId: rowData.userId,
          name: rowData.name,
          email: rowData.email,
          phone: rowData.phone,
          roomName: rowData.roomName,
          status: "approved",
          adultNo: rowData.adultNo,
          childNo: rowData.childNo,
          roomNo: rowData.roomNo,
          checkIn: rowData.checkIn,
          checkOut: rowData.checkOut,
          addDate: rowData.addDate,
          photoPath: rowData.photoPath,
          remarks: rowData.remarks,
          loyalty: rowData.loyalty,
        };
        API.put("/room/update", approveData).then(handleClick(TransitionUp));
      }
    }
  };

  const rejectBooking = (rowData) => {
    setApprove("rejected");
    rowData.status = "rejected";
    const approveData = {
      _id: rowData._id,
      userId: rowData.userId,
      name: rowData.name,
      email: rowData.email,
      phone: rowData.phone,
      roomName: rowData.roomName,
      status: "rejected",
      adultNo: rowData.adultNo,
      childNo: rowData.childNo,
      roomNo: rowData.roomNo,
      checkIn: rowData.checkIn,
      checkOut: rowData.checkOut,
      addDate: rowData.addDate,
      photoPath: rowData.photoPath,
      remarks: rowData.remarks,
      loyalty: rowData.loyalty,
    };

    API.put("/room/update", approveData).then(handleClickDel(TransitionUp));
  };

  

  const AllConference = () => {
    setStatus("all");
    setStatusFilter("All");
  };
  const ApprovedConference = () => {
    setStatus("approved");
    setStatusFilter("Approved");
  };
  const PendingConference = () => {
    setStatus("pending");
    setStatusFilter("Pending");
  };
  const RejectedConference = () => {
    setStatus("rejected");
    setStatusFilter("Rejected");
  };

  return (
    <div>
      {AdminLoading ? (
        <AdminLoader />
      ) : (
        <div id="admin-card-back">
          <div className="wr-table1">
            <div className="wr-table-header">
              <Row>
                <Col className="wr-dashboard-header">
                  <Col>
                    <div className="chilBar">Manage My Bookings</div>
                  </Col>
                </Col>
                <Col>
                  <input
                    className="form-control"
                    id="searchBar"
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleChange}
                    aria-label="Search"
                  />
                </Col>

                <Col className="wr-submit">
                  <UncontrolledDropdown id="filterToggle">
                    <DropdownToggle caret id="filterDrop">
                      {StatusFilter}
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem onClick={AllConference}>All</DropdownItem>
                      <DropdownItem onClick={PendingConference}>
                        Pending
                      </DropdownItem>
                      <DropdownItem onClick={ApprovedConference}>
                        Approved
                      </DropdownItem>
                      <DropdownItem onClick={RejectedConference}>
                        Rejected
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>

                  <RoomReport />
                </Col>
              </Row>
            </div>
            <br />
          </div>
          {!count == 0 ? (
            <div className="CountingHead">
              {" "}
              {StatusFilter} Room Reservations ({count})
            </div>
          ) : (
            <div className="ZeroCountingHead"> No Any Room Reservations</div>
          )}
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {rows.length > 0 &&
              rows.map((row) => {
                if (row.status === status || status === "all") {
                  return (
                    <div>
                      <div className="cardBackAdmin" key={row._id}>
                        <Card className="text-center">
                          <Card.Header>
                            Booking ID - RM{row._id.substring(0, 7)}{" "}
                          </Card.Header>
                          <Card.Body>
                            <div className="cardBody">
                              <div className="cardDesc">
                                <div className="statusParent">
                                  <h6
                                    className="statusChild"
                                    style={
                                      row.status === "approved"
                                        ? { borderRight: "15px solid #0cce26" }
                                        : row.status == "rejected"
                                        ? { borderRight: "15px solid red" }
                                        : row.status == "recent"
                                        ? { borderRight: "15px solid #007d8d" }
                                        : { borderRight: "15px solid orange" }
                                    }
                                  >
                                    {row.status}
                                  </h6>
                                </div>
                                <Card.Title>
                                  <h3 className="card-title-h3">
                                    Room Type : {row.roomName}
                                  </h3>
                                </Card.Title>
                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-evenly",
                                    marginBottom: "15px",
                                  }}
                                >
                                  <div
                                    style={{
                                      width: "400px",
                                      padding: "15px",
                                      textAlign: "left",
                                    }}
                                  >
                                    <h5 className="admin-room">
                                      <GroupIcon id="card-his-bodyIcon" />
                                      Capacity:
                                    </h5>
                                    <h5
                                      style={{ marginLeft: "25px" }}
                                      className="admin-room"
                                    >
                                      <FamilyRestroomIcon id="card-his-bodyIcon" />
                                      No of Rooms : {row.roomNo}
                                    </h5>
                                    <h5
                                      style={{ marginLeft: "25px" }}
                                      className="admin-room"
                                    >
                                      <BedroomParentIcon id="card-his-bodyIcon" />
                                      No of Adults : {row.adultNo}
                                    </h5>
                                    <h5
                                      style={{ marginLeft: "25px" }}
                                      className="admin-room"
                                    >
                                      <BedroomChildIcon id="card-his-bodyIcon" />
                                      No of Childs : {row.childNo}
                                    </h5>
                                  </div>

                                  <div
                                    style={{
                                      backgroundColor: "#9e9e9e",
                                      width: "400px",
                                      height: "fit-content",
                                      padding: "15px",
                                      textAlign: "left",
                                    }}
                                  >
                                    <h5 className="admin-room">
                                      <ContactMailIcon id="card-his-bodyIcon" />
                                      Contact Details:
                                    </h5>
                                    <h5
                                      style={{ marginLeft: "25px" }}
                                      className="admin-room"
                                    >
                                      <PermIdentityIcon id="card-his-bodyIcon" />
                                      Name : {row.name}
                                    </h5>
                                    <h5
                                      style={{ marginLeft: "25px" }}
                                      className="admin-room"
                                    >
                                      <AlternateEmailIcon id="card-his-bodyIcon" />
                                      E-mail : {row.email}
                                    </h5>
                                    <h5
                                      style={{ marginLeft: "25px" }}
                                      className="admin-room"
                                    >
                                      <PhoneInTalkIcon id="card-his-bodyIcon" />
                                      Phone : {row.phone}
                                    </h5>
                                  </div>
                                </div>
                                <div
                                  className="conf-date"
                                  style={{ justifyContent: "flex-start" }}
                                >
                                  <h6 className="conf-date1">
                                    <TodayOutlinedIcon id="card-his-bodyIcon" />
                                    Check In Date :{" "}
                                    {row.checkIn.split("T", [1])}
                                  </h6>
                                  <h6 className="conf-date1">
                                    <AccessTimeIcon id="card-his-bodyIcon" />
                                    Check In Time :{" "}
                                    {row.checkIn.split("T").pop().split(".", 1)}
                                  </h6>
                                </div>

                                <div
                                  className="conf-date"
                                  style={{ justifyContent: "flex-start" }}
                                >
                                  <h6 className="conf-date1">
                                    <EventIcon id="card-his-bodyIcon" />
                                    Check Out Date :{" "}
                                    {row.checkOut.split("T", [1])}
                                  </h6>
                                  <h6 className="conf-date1">
                                    <AccessTimeFilledIcon id="card-his-bodyIcon" />
                                    Check Out Time :{" "}
                                    {row.checkOut
                                      .split("T")
                                      .pop()
                                      .split(".", 1)}
                                  </h6>
                                </div>
                                <br />
                                <div
                                  className="conf-date"
                                  style={{ justifyContent: "flex-start" }}
                                >
                                  <h5 className="desc-card">
                                    <StarRateRoundedIcon id="card-his-bodyIcon" />
                                    Remarks : {row.remarks}
                                  </h5>
                                </div>

                                <div
                                  className="conf-date"
                                  style={{ justifyContent: "flex-start" }}
                                >
                                  <h6>
                                    {" "}
                                    <LoyaltyIcon id="card-his-bodyIcon" />
                                    Customer Type :{" "}
                                    {row.loyalty ? "Loyalty" : "Regular"}
                                  </h6>
                                </div>

                                <div className="conf-card">
                                  <Button
                                    variant="primary"
                                    className={
                                      row.status != `rejected`
                                        ? "DeclineLoadingBtn"
                                        : "DeclineLoadingBtnFalse"
                                    }
                                    style={{ width: "125px" }}
                                    variant="primary"
                                    onClick={() => rejectBooking(row)}
                                  >
                                    {row.status == "rejected" ? (
                                      <RemoveDoneRoundedIcon id="refreshIcon" />
                                    ) : (
                                      ""
                                    )}

                                    {row.status != "rejected" && (
                                      <span>Decline</span>
                                    )}
                                    {row.status == "rejected" && (
                                      <span>Declined</span>
                                    )}
                                  </Button>

                                  <Button
                                    style={{ width: "135px" }}
                                    className={
                                      "AproveLoadingBtn" +
                                      (row.status != `approved` ? "" : "False")
                                    }
                                    variant="primary"
                                    onClick={() => approveBooking(row)}
                                  >
                                    {row.status == "approved" ? (
                                      <DoneAllRoundedIcon id="refreshIcon" />
                                    ) : (
                                      ""
                                    )}

                                    {row.status != "approved" && (
                                      <span>Approve</span>
                                    )}
                                    {row.status == "approved" && (
                                      <span>Approved</span>
                                    )}
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </Card.Body>
                          <Card.Footer className="text-muted">
                            <CalcDate
                              DateC={row.addDate
                                .split("T", [1])
                                .pop()
                                .split("-", 3)}
                            />
                          </Card.Footer>
                        </Card>
                      </div>
                    </div>
                  );
                }
              })}
            <Snackbar
              autoHideDuration={3000}
              open={openDel}
              onClose={handleClose}
              TransitionComponent={transition}
              severity="success"
              key={transition ? transition.name : ""}
            >
              <div id="declineSnack">
                <CheckCircleOutlinedIcon id="declineSnackIcon" />
                <div> Successfully Declined </div>
              </div>
            </Snackbar>

            <Snackbar
              autoHideDuration={3000}
              open={open}
              onClose={handleClose}
              TransitionComponent={transition}
              severity="success"
              key={transition ? transition.name : ""}
            >
              <div id="approveSnack">
                <CheckCircleOutlinedIcon id="approveSnackIcon" />
                <div> Successfully Approved </div>
              </div>
            </Snackbar>
          </div>
        </div>
      )}
    </div>
  );
};
