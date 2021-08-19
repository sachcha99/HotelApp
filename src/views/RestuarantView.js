import React from "react";
import RestHeader from "../components/header/RestHeader";
import Title from "../components/header/Title";
import CategoryLabel from "../components/Food/CategoryLabel";

export default function RestaurantView(){
    return(
        <div>
            <RestHeader/>
            <Title title="Order Delicious Foods" />
            <img className="headerPic" src="https://www.littlestepsasia.com/wp-content/uploads/2020/08/Best-Food-Delivery-Takeaway-Meals-In-Singapore.jpg" />
            <div className="rest-body">
                <CategoryLabel title="Specials"/>
            </div>
        </div>
    );
}