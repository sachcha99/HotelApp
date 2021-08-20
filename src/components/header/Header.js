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

    const goToRestaurant=()=>{
        history.push("/restaurant/menu");
    }
    const GotoAbout = () => {
        history.push("/AdminNav")
    }

    const changeNavbar = () => {
        if(window.scrollY>=80){
            setNavbar(true)
        }else{
            setNavbar(false)
        }
      
        console.log(window.scrollY)
    }
    window.addEventListener('scroll',changeNavbar);

    return <div>
        
        <Navbar className={navbar ? "navBarr1" : "navBarr"}  fixed="top" light expand="md">
        <NavbarBrand  href="/home"><img className="mainLogo" src={Logo}/></NavbarBrand>
            <NavbarToggler onClick={toggle}/>
            <Collapse className="navCollaspe" isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink className="navItem" href="/" >Home</NavLink>
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
                <UncontrolledButtonDropdown  className="accountMenu ml-auto" size="lg" style={{  fontSize:"large"  }} >
                    <DropdownToggle  caret className="userOption" >
                       <PersonRoundedIcon fontSize="large" /> 
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
            </Collapse>
        </Navbar>
    </div>;
}

export default Header;