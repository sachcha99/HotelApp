import React from 'react'
import {ReceptionHallBookingForm} from './ReceptionHallBookingForm'
import { RoomBookingForm } from './RoomBookingForm'
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

export const Home = () => {
    return (
        <div>
            <Header/>
            <div>
            <ReceptionHallBookingForm/>
            <RoomBookingForm/>
            </div>
           
            {/* <Footer/> */}
        </div>
    )
}
