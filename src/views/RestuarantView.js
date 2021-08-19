import React from "react";
import RestHeader from "../components/header/RestHeader";
import './RestaurantView.css'
import Title from "../components/header/Title";

export default function RestaurantView(){
    return(
        <div>
            <RestHeader/>
            <Title title="Order Delicious Foods" />
            <img className="headerPic" src="https://www.littlestepsasia.com/wp-content/uploads/2020/08/Best-Food-Delivery-Takeaway-Meals-In-Singapore.jpg" />

        </div>
    );
}