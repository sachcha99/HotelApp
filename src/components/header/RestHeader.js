import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import "./RestHeader.css"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledButtonDropdown, Row
} from 'reactstrap';
import Logo from '../Images/logo2.png'
import {Col} from "react-bootstrap";
import IconButton from "@material-ui/core/IconButton";
import * as PropTypes from "prop-types";
import {withStyles} from '@material-ui/core/styles';
import Badge from "@material-ui/core/Badge";
// import DropDown from "../common/DropDown";

const StyledBadge = withStyles((theme) => ({
    badge: {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}))(Badge);

StyledBadge.propTypes = {
    color: PropTypes.string,
    children: PropTypes.node
};
const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const history = useHistory();
    const toggle = () => setIsOpen(!isOpen);


    const [navbar, setNavbar] = useState(false);

    const goToRooms = () => {
        history.push("/Rooms");
    }
    const goToReceptionHalls = () => {
        history.push("/Receptions");
    }
    const goToRoomHistory = () => {
        history.push("/RoomHistory");
    }

    const goToReceptionHistory = () => {
        history.push("/ReceptionHistory")
    }

    const goToRestaurant = () => {
        history.push("/restaurant/menu")
    }

    const GotoAbout = () => {
        history.push("/AdminNav")
    }

    const goToCart = () => {
        const cart = JSON.parse(localStorage.getItem("cart"));
        if(cart){
            if (props.cartItems) {
                localStorage.setItem("cart", JSON.stringify(props.cartItems)); //store cart
                history.push("/restaurant/cart");
            }
        }else{
            if (props.cartItems) {
                localStorage.setItem("cart", JSON.stringify(props.cartItems)); //store cart
                history.push("/restaurant/cart");
                props.removeCache();
            }
        }


    }

    return <div>

        <Navbar className={"rest-nav-bar"} fixed="top" light expand="md">
            <NavbarBrand href="/home"><img className="mainLogo" src={Logo}/></NavbarBrand>
            <NavbarToggler onClick={toggle}/>
            <Collapse className="navCollaspe" isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink className="navItem" href="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="navItem" onClick={goToRooms}>Accommodation</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="navItem" onClick={goToReceptionHalls}>Wedding & Event</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="navItem" onClick={goToRestaurant}>Restaurant</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="navItem" onClick={GotoAbout}>About</NavLink>
                    </NavItem>
                </Nav>
                <Row>
                    <Col className="cart">
                        <IconButton onClick={goToCart} aria-label="cart">
                            <StyledBadge badgeContent={props.count} color="secondary">
                                <ShoppingCartIcon style={{ color: "white" }}fontSize="large"/>
                            </StyledBadge>
                        </IconButton>
                    </Col>
                    <Col>
                        <UncontrolledButtonDropdown className="accountMenu ml-auto" size="lg"
                                                    style={{fontSize: "large"}}>
                            <DropdownToggle caret className="rest-user">
                                <PersonRoundedIcon fontSize="large"/>
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem onClick={goToRoomHistory}>
                                    Room Reservation History
                                </DropdownItem>
                                <DropdownItem onClick={goToReceptionHistory}>
                                    Reception Hall Reservation History
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledButtonDropdown>
                    </Col>
                </Row>
            </Collapse>
        </Navbar>
    </div>;
}

export default Header;