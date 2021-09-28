import React, {useEffect, useState} from 'react';
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
import loginbtn from './../Images/loginbtn.png'

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
    const token = JSON.parse(sessionStorage.getItem("token"));

    const goToRooms = () => {
        history.push("/Rooms");
    }
    const goToReceptionHalls = () => {
        history.push("/Receptions");
    }
    const goToMyOrders = () => {
        history.push("/restaurant/orders")
    }
    const goToLogout = () => {
        sessionStorage.removeItem("token");
        history.push("/login")
    }
    const goToLogin = () => {
        history.push("/login")
    }
    const goToRestaurant = () => {
        history.push("/restaurant/menu")
    }
    const GotoAbout = () => {

    }

    const goToCart = () => {
        const cart = localStorage.getItem("cart");
        if (cart) {
            if (props.cartItems) {
                localStorage.setItem("cart", JSON.stringify(props.cartItems)); //store cart
                history.push("/restaurant/cart");
            }
        } else {
            if (props.cartItems) {
                localStorage.setItem("cart", JSON.stringify(props.cartItems)); //store cart
                history.push("/restaurant/cart");
                props.removeCache();
            }
        }
    }

    const changeNavbar = () => {
        if(window.scrollY>=80){
            setNavbar(true)
        }else{
            setNavbar(false)
        }

    }
    window.addEventListener('scroll',changeNavbar);

    return <div>

        <Navbar className={navbar ? "navBarr1" : "navBarr"}  fixed="top" light expand="md">
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
                                <ShoppingCartIcon style={{color: "white"}} fontSize="large"/>
                            </StyledBadge>
                        </IconButton>
                    </Col>
                    <Col>
                        {!token ?
                            <img className="login-btn" alt="login" src={loginbtn} onClick={goToLogin}/> :
                            <UncontrolledButtonDropdown className="accountMenu ml-auto" size="lg"
                                                        style={{fontSize: "large"}}>
                                <DropdownToggle caret className="rest-user">
                                    <PersonRoundedIcon fontSize="large"/>
                                    {token.fname}
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem onClick={goToMyOrders}>
                                        My Orders
                                    </DropdownItem>
                                    {token == null ?
                                        (<DropdownItem onClick={goToLogin}>
                                            Login
                                        </DropdownItem>) :
                                        (<DropdownItem onClick={goToLogout}>
                                            Logout
                                        </DropdownItem>)
                                    }
                                </DropdownMenu>
                            </UncontrolledButtonDropdown>
                        }
                    </Col>
                </Row>
            </Collapse>
        </Navbar>
    </div>;
}

export default Header;