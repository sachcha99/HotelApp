import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {createBrowserHistory} from "history";
import { Home } from './Home'
import {RoomBookingHistory} from './RoomBookingHistory'
import { ReceptionHallBookingHistory } from './ReceptionHallBookingHistory';
import {RecepitonHallList} from './RecepitionHall/ReceptionHallList'
import {RoomList} from "./Rooms/RoomList"

const hist = createBrowserHistory();

const routes = () => (
    <Router history={hist}>
        <Route exact path="/" component={Home}/>
        <Route exact path="/room" component={RoomBookingHistory}/>
        <Route exact path="/reception" component={ReceptionHallBookingHistory}/>
        <Route exact path="/" component={RecepitonHallList}/>
        <Route exact path="/rooms" component={RoomList}/>
    </Router>
)
export default routes;
