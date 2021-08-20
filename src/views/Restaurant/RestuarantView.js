import React, {useEffect, useState} from "react";
import RestHeader from "../../components/header/RestHeader";
import Title from "../../components/header/Title";
import CategoryLabel from "../../components/Food/CategoryLabel";
import API from "../../components/api";
import './Restaurant.css'
import Grid from "@material-ui/core/Grid";
import FoodCard from "../../components/Food/FoodCard";

let cart =[];

export default function RestaurantView(){
    const [foods, setFoodItems] = useState([]);
    const [count,setCount] = useState(0);

    useEffect(() => {
        API.get(`/food/`)
            .then(res => {
                setFoodItems(res.data)
            })
            .catch(err => {
            });
        if(cart.length){
            setCount(cart.length)
        }
    }, []);

    //add item to the cart array
    const addToCart=(item)=>{
        cart.push(item);
        setCount(cart.length);
    }

    const removeCache = () => {
        cart.splice(0, cart.length);
    }

    return(
        <div>
            <RestHeader count={count} cartItems={cart} removeCache={removeCache}/>
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