import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { useHistory } from "react-router-dom";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const SlideAlert = ({ open, handleClose }) => {
  const history = useHistory();
  const goToLogin = () => {
    history.push("/login");
  };
  const goToSignUp = () => {
    history.push("/register");
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <div id="AlertBox">
          <DialogTitle>
            <div>
              <InfoOutlinedIcon className="alertBoxIcon" />
              Login to continue
            </div>
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              <div>
                You must be logged into the{" "}
                <span style={{ color: "#007500", cursor: "pointer" }}>
                  Lemon Tree{" "}
                </span>
                Website before making the reservation.If you have not yet
                registered with our system, Please Sign up now
              </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} id="alertCancelBtn">
              Cancel
            </Button>
            <Button onClick={goToSignUp} id="alertRegBtn">
              SignUp
            </Button>
            <Button onClick={goToLogin} id="alertLoginBtn">
              Login
            </Button>
          </DialogActions>
        </div>
      </Dialog>
    </div>
  );
};

export default SlideAlert;
