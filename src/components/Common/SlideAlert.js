import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import {useHistory} from "react-router-dom";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

 const SlideAlert = ( {open,handleClose}) => {
  const history = useHistory();
  const goToLogin =()=>{
    history.push("/login")
  }
  

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Slide in alert dialog
      </Button> */}
      <Dialog 
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      ><div id="AlertBox">
        <DialogTitle><div><InfoOutlinedIcon className="alertBoxIcon"/>Google's location service</div></DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
           <div> Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.</div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} id="alertCancelBtn">Cancel</Button>
          <Button onClick={goToLogin} id="alertLoginBtn">Go to login</Button>
        </DialogActions>
        </div>
      </Dialog>
    </div>
  );
}

export default SlideAlert;