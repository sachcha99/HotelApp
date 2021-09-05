import React, {useEffect, useState} from "react";
import API from "../../components/api";
import OrderCard from "../../components/Food/OrderCard";
import RestHeader from "../../components/header/RestHeader";
import Title from "../../components/header/Title";
import CategoryLabel from "../../components/Food/CategoryLabel";

export default function MyOrdersView(){
    const [rows, setRows] = useState([]);
    const token =JSON.parse(sessionStorage.getItem("token"));
    const cart = JSON.parse(localStorage.getItem("cart"));

    useEffect(() => {
        API.get(`/order/${token.id}`)
            .then(res => {
                setRows(res.data)
            })
            .catch(err => {
            });
    }, [rows]);

    const removeCache = () => {

    }

    return(
        <div>
            <RestHeader count={cart.length} cartItems={cart} removeCache={removeCache}/>
            <Title title="My Orders" />
            <img className="headerPic" src="https://rs.projects-abroad.net/v1/hero/indian-cuisine-south-africa-food-tours-product-5e146c7a97eb2.[1600].jpeg" />
            <div className="rest-body">
                <CategoryLabel title="My Orders"/>
                {rows.length > 0 && rows.map((row)=>{
                    return(
                        <OrderCard row={row}/>
                    )
                })}
            </div>
        </div>
    )

}