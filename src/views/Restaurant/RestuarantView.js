import React, {useEffect, useState} from "react";
import RestHeader from "../../components/header/RestHeader";
import Title from "../../components/header/Title";
import CategoryLabel from "../../components/Food/CategoryLabel";
import API from "../../components/api";
import './Restaurant.css'
import Grid from "@material-ui/core/Grid";
import FoodCard from "../../components/Food/FoodCard";
import Footer from "../../components/footer/Footer";
import PageLoaderTimeOut from "../../components/Preloader/PageLoaderTimeOut";

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
            <PageLoaderTimeOut/>
            <Title title="Order Delicious Foods" />
            <img className="headerPic" src="https://rs.projects-abroad.net/v1/hero/indian-cuisine-south-africa-food-tours-product-5e146c7a97eb2.[1600].jpeg" />
            <div className="rest-body">
                <CategoryLabel title="Pizza"/>
                <div className="itemList">
                    <Grid container spacing={1}>
                        {foods.filter(food => food.category.includes('pizza')).map((item) => (
                            <Grid container item xs={3}>
                                <FoodCard key={item.itemCode} itemName={item.itemName} description={item.description}
                                          imgURL={item.imageURL} price={item.price} addToCart={addToCart}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </div>
                <CategoryLabel title="Kottu"/>
                <div className="itemList">
                    <Grid container spacing={1}>
                        {foods.filter(food => food.category.includes('kottu')).map((item) => (
                            <Grid container item xs={3}>
                                <FoodCard key={item.itemCode} itemName={item.itemName} description={item.description}
                                          imgURL={item.imageURL} price={item.price} addToCart={addToCart}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </div>
                <CategoryLabel title="Noodles"/>
                <div className="itemList">
                    <Grid container spacing={1}>
                        {foods.filter(food => food.category.includes('noodles')).map((item) => (
                            <Grid container item xs={3}>
                                <FoodCard key={item.itemCode} itemName={item.itemName} description={item.description}
                                          imgURL={item.imageURL} price={item.price} addToCart={addToCart}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </div>
                <CategoryLabel title="Dessert"/>
                <div className="itemList">
                    <Grid container spacing={1}>
                        {foods.filter(food => food.category.includes('dessert')).map((item) => (
                            <Grid container item xs={3}>
                                <FoodCard key={item.itemCode} itemName={item.itemName} description={item.description}
                                          imgURL={item.imageURL} price={item.price} addToCart={addToCart}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </div>
                <CategoryLabel title="Beverages"/>
                <div className="itemList">
                    <Grid container spacing={1}>
                        {foods.filter(food => food.category.includes('beverages')).map((item) => (
                            <Grid container item xs={3}>
                                <FoodCard key={item.itemCode} itemName={item.itemName} description={item.description}
                                          imgURL={item.imageURL} price={item.price} addToCart={addToCart}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </div>

            </div>
            <Footer/>
        </div>
    );
}