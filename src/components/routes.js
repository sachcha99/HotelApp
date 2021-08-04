import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {createBrowserHistory} from "history";
import { Home } from './Home'
import {RoomBookingHistory} from './RoomBookingHistory'
import { ReceptionHallBookingHistory } from './ReceptionHallBookingHistory';
const hist = createBrowserHistory();

const routes = () => (
    <Router history={hist}>
        <Route exact path="/" component={Home}/>
        <Route exact path="/room" component={RoomBookingHistory}/>
        <Route exact path="/reception" component={ReceptionHallBookingHistory}/>
    </Router>
)
export default routes;
