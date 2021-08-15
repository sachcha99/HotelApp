import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {createBrowserHistory} from "history";
import { Home } from './Home'
import {RoomBookingHistory} from './Rooms/RoomBookingHistory'
import { ReceptionHallBookingHistory } from './RecepitionHall/ReceptionHallBookingHistory';
import {RecepitonHallList} from './RecepitionHall/ReceptionHallList'
import {RoomList} from "./Rooms/RoomList"

const hist = createBrowserHistory();

const routes = () => (
    <Router history={hist}>
        <Route exact path="/" component={Home}/>
        <Route exact path="/RoomHistory" component={RoomBookingHistory}/>
        <Route exact path="/ReceptionHistory" component={ReceptionHallBookingHistory}/>
        <Route exact path="/Receptions" component={RecepitonHallList}/>
        <Route exact path="/Rooms" component={RoomList}/>
    </Router>
)
export default routes;
