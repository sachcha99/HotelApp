import React, { useEffect } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import KingBedRoundedIcon from "@mui/icons-material/KingBedRounded";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import BrunchDiningRoundedIcon from "@mui/icons-material/BrunchDiningRounded";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useHistory } from "react-router-dom";
import { AdminReceptionBooking } from "./AdminReceptionBooking";
import { AdminRoomBooking } from "./AdminRoomBooking";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 38,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export const AdminNav = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  let t = { background: "blue" };

  const [showIcon, setShowResults] = React.useState(false);
  const [roomIcon, setClickRoomIcon] = React.useState(false);
  const [receptionIcon, setClickReceptionIcon] = React.useState(true);
  const [homeIcon, setClickHomeIcon] = React.useState(true);

  const [title, setTitle] = React.useState("Admin Dashboard");

  const [Barcolour, setBarcolour] = React.useState({
    background:
      "linear-gradient(90deg, rgba(0,150,55,1) 36%, rgba(21,142,96,1) 96%)",
  });
  const [fontcolour, setfontcolour] = React.useState("");

  const [viewTab, setView] = React.useState(<AdminRoomBooking />);

  const token = JSON.parse(sessionStorage.getItem("token"));
  const history = useHistory();

  const handleDrawerOpen = () => {
    setOpen(true);
    setShowResults(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setShowResults(false);
  };

  const FindClick = (index) => {
    if (index == "Room") {
      setTitle("Room Management");
      setBarcolour({
        background:
          "linear-gradient(90deg, rgba(0,150,55,1) 36%, rgba(21,142,96,1) 96%)",
      });
      setClickRoomIcon(false);
      setClickReceptionIcon(true);
      setClickHomeIcon(true);
      setView(<AdminRoomBooking />);
    } else if (index == "Reception") {
      setTitle("Reception Hall Managemet");
      setBarcolour({
        background:
          "linear-gradient(90deg, rgba(76,179,59,1) 0%, rgba(21,142,77,1) 100%)",
      });
      setClickRoomIcon(true);
      setClickReceptionIcon(false);
      setClickHomeIcon(true);
      setView(<AdminReceptionBooking />);
    } else if (index == "logout") {
      sessionStorage.removeItem("token");
      history.push("/login");
    } else if (index == "Home") {
      history.push("/");
    } else if (index == "Restaurant") {
      history.push("/restaurant/dashboard");
    }
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        id="appbar"
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar style={Barcolour}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton
            onClick={handleDrawerClose}
            style={showIcon ? {} : { display: "none" }}
          >
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem
            button
            onClick={() => FindClick("Room")}
            style={roomIcon ? {} : { background: "#009635", color: "white" }}
          >
            <ListItemIcon>
              {" "}
              <KingBedRoundedIcon style={roomIcon ? {} : { color: "white" }} />
            </ListItemIcon>
            <ListItemText primary={"Room"} />
          </ListItem>

          <ListItem
            button
            onClick={() => FindClick("Reception")}
            style={
              receptionIcon ? {} : { background: "#4cb33b", color: "white" }
            }
          >
            <ListItemIcon>
              {" "}
              <BrunchDiningRoundedIcon
                style={receptionIcon ? {} : { color: "white" }}
              />
            </ListItemIcon>
            <ListItemText primary={"Reception"} />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem
            button
            onClick={() => FindClick("Restaurant")}
            style={homeIcon ? {} : { background: "#636363", color: "white" }}
          >
            <ListItemIcon>
              {" "}
              <RestaurantIcon style={homeIcon ? {} : { color: "white" }} />
            </ListItemIcon>
            <ListItemText primary={"Restaurant"} />
          </ListItem>
          <ListItem
            button
            onClick={() => FindClick("Home")}
            style={homeIcon ? {} : { background: "#636363", color: "white" }}
          >
            <ListItemIcon>
              {" "}
              <HomeRoundedIcon style={homeIcon ? {} : { color: "white" }} />
            </ListItemIcon>
            <ListItemText primary={"Home"} />
          </ListItem>
          <ListItem button onClick={() => FindClick("logout")}>
            <ListItemIcon>
              {" "}
              <ExitToAppIcon style={{ color: "#fa4661" }} />
            </ListItemIcon>
            <ListItemText primary={"Logout"} />
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />

        <div></div>

        <Typography paragraph>
          <div>{viewTab}</div>
        </Typography>
      </main>
    </div>
  );
};
