import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {createBrowserHistory} from "history";
import { Home } from './Home'
import {RoomBookingHistory} from './Rooms/RoomBookingHistory'
import { ReceptionHallBookingHistory } from './RecepitionHall/ReceptionHallBookingHistory';
import {RecepitonHallList} from './RecepitionHall/ReceptionHallList'
import {RoomList} from "./Rooms/RoomList"
import {AdminNav} from "./Admin/AdminNav"
import SignInView from "../views/SignIn";
import SignUpView from "../views/SignUp";
import Dashboard from "../views/Dashboard/Dashboard";
import AddItemView from "../views/Dashboard/AddItemView";
import EditItemView from "../views/Dashboard/EditItemView";
import RestuarantView from "../views/Restaurant/RestuarantView";
import FoodCartView from "../views/Restaurant/ItemCartView";
import CheckOutView from "../views/Restaurant/CheckOutView";
import MyOrdersView from "../views/Restaurant/MyOrdersView";

const hist = createBrowserHistory();

const routes = () => (
    <Router history={hist}>
        <Route exact path="/" component={Home}/>
        <Route exact path="/RoomHistory" component={RoomBookingHistory}/>
        <Route exact path="/ReceptionHistory" component={ReceptionHallBookingHistory}/>
        <Route exact path="/Receptions" component={RecepitonHallList}/>
        <Route exact path="/Rooms" component={RoomList}/>
        <Route exact path="/AdminNav" component={AdminNav}/>
        <Route path="/login" component={SignInView}/>
        <Route path="/register" component={SignUpView}/>
        <Route path="/restaurant/dashboard" component={Dashboard}/>
        <Route path="/restaurant/food/add" component={AddItemView}/>
        <Route path="/restaurant/food/edit" component={EditItemView}/>
        <Route path="/restaurant/menu" component={RestuarantView}/>
        <Route path="/restaurant/cart" component={FoodCartView}/>
        <Route path="/restaurant/checkout" component={CheckOutView}/>
        <Route path="/restaurant/orders" component={MyOrdersView}/>
    </Router>
)
export default routes;
