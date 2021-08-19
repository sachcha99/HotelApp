import React, {useEffect, useState} from "react";
import RestHeader from "../../components/header/RestHeader";
import Title from "../../components/header/Title";
import CategoryLabel from "../../components/Food/CategoryLabel";
import API from "../../components/api";
import './Restaurant.css'

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"


// import Swiper core and required modules
import SwiperCore, {
    Navigation
} from 'swiper/core';
import Grid from "@material-ui/core/Grid";
import {Card} from "@material-ui/core";
import FoodCard from "../../components/Food/FoodCard";

// install Swiper modules
SwiperCore.use([Navigation]);


export default function RestaurantView(){
    const [foods, setFoodItems] = useState([]);

    useEffect(() => {
        API.get(`/food/`)
            .then(res => {
                setFoodItems(res.data)
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            });
    }, []);

    const addToCart = ()=>{

    }

    return(
        <div>
            <RestHeader/>
            <Title title="Order Delicious Foods" />
            <img className="headerPic" src="https://www.littlestepsasia.com/wp-content/uploads/2020/08/Best-Food-Delivery-Takeaway-Meals-In-Singapore.jpg" />
            <div className="rest-body">
                <CategoryLabel title="Specials"/>
                <div className="itemList">
                    <Grid container spacing={1}>
                        {foods.map((item) => (
                            <Grid container item xs={3}>
                                <FoodCard key={item.itemCode} itemName={item.itemName} description={item.description}
                                      imgURL={item.imageURL} price={item.price} addToCart={addToCart}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </div>
        </div>
    );
}