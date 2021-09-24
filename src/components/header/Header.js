import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
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
    UncontrolledButtonDropdown
} from 'reactstrap';
import Logo from '../Images/logo2.png'
// import DropDown from "../common/DropDown";
import loginbtn from './../Images/loginbtn.png'

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const history = useHistory();
    const token =JSON.parse(sessionStorage.getItem("token"));
    const [UserType, setUserType] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const [navbar, setNavbar] = useState(false);

    const goToHome = () => {
        history.push("/");
    }

    const goToRooms = () => {
        history.push("/rooms");
    }
    const goToReceptionHalls = () => {
        history.push("/receptions");
    }
    const goToRoomHistory = () => {
        history.push("/roomHistory");
    }

    const goToReceptionHistory = () => {
        history.push("/receptionHistory")
    }

    const goToRestaurant=()=>{
        history.push("/restaurant/menu");
    }
    const GotoAbout = () => {
        history.push("/about")
    }
    const goToAdmin = () => {
        history.push("/admin")
    }
    const goToLogin = () => {
        history.push("/login")
    }
    const goToLogOut = () => {
        sessionStorage.removeItem("token");
        history.push("/")
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
        <NavbarBrand  href="/home"><img className="mainLogo" src={Logo}/></NavbarBrand>
            <NavbarToggler onClick={toggle}/>
            <Collapse className="navCollaspe" isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink className="navItem" onClick={goToHome} >Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="navItem" onClick={goToRooms} >Accommodation</NavLink>
                    </NavItem>
                    {/* <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret className="navItem">
                        Wedding & Event
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem onClick={goToReceptionHalls}>
                                Reception Halls
                            </DropdownItem>
                            <DropdownItem onClick={callForEvent}>
                                Events
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown> */}
                    <NavItem>
                        <NavLink  className="navItem" onClick={goToReceptionHalls}>Wedding & Event</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="navItem" onClick={goToRestaurant}>Restaurant</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink  className="navItem" onClick={GotoAbout}>About</NavLink>
                    </NavItem>
                </Nav>
                {!token ? 
                <img className="loginbtn" alt="login" src={loginbtn} onClick={goToLogin}/>: 
                (token.type == "customer" ?
                
                <UncontrolledButtonDropdown  className="accountMenu ml-auto" size="small" style={{  fontSize:"medium"  }} >
                    <DropdownToggle  caret className="userOption" >
                       <PersonRoundedIcon fontSize="large" /> 
                       <h6 className="userName" >{token.fname}</h6>
                    </DropdownToggle>
                    <DropdownMenu>
                    <DropdownItem onClick={goToRoomHistory}>
                                Room Reservation History
                            </DropdownItem>
                            <DropdownItem onClick={goToReceptionHistory}>
                            Reception Hall Reservation History 
                            </DropdownItem>
                            <DropdownItem onClick={goToLogOut}>
                            Logout
                            </DropdownItem>
                    </DropdownMenu>
                </UncontrolledButtonDropdown> :
                 <UncontrolledButtonDropdown  className="accountMenu ml-auto" size="small" style={{  fontSize:"medium"  }} >
                 <DropdownToggle  caret className="userOption" >
                    <PersonRoundedIcon fontSize="large" /> 
                    <h6 className="userName" >{token.fname}</h6>
                 </DropdownToggle>
                 <DropdownMenu>
                 <DropdownItem onClick={goToAdmin}>
                         Admin Dashboard
                         </DropdownItem>
                         <DropdownItem onClick={goToLogOut}>
                         Logout
                         </DropdownItem>
                 </DropdownMenu>
             </UncontrolledButtonDropdown>)}
            </Collapse>
        </Navbar>
    </div>;
}

export default Header;