import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {TextField} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        maxWidth:340,
    },
    media: {
        height: 200,
    },
    qty: {
        width: 80,
    },
    addTo:{
        margin: "auto auto"
    },
    btn:{
        marginTop:10
    }
});

export default function FoodCard(props) {
    const classes = useStyles();
    const [qty,setQty] = useState(0);

    const handleQTY =(event)=>{
        const {value} =event.target;
        setQty(value);
        event.preventDefault();
    }
    const handleButton=()=>{
        if(qty>0){
            const item={
                itemName: props.itemName,
                description : props.description,
                itemQty:qty,
                unitPrice:props.price
            }
            props.addToCart(item);
        }
    }

    return (
        <Card className={classes.root && "card"}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    className={classes.media}
                    image= {props.imgURL}
                    height="200"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.itemName}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.description}
                    </Typography>
                    <Typography variant="body1" color="black" component="h5">
                        Price : LKR {props.price}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.addTo}>
                <TextField
                    className={classes.qty}
                    id="standard-number"
                    label="Qty"
                    type="number"
                    InputProps={{ inputProps: { min: 1, max: 10 } }}
                    onChange={handleQTY}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
               <Button className={classes.btn} onClick={handleButton} size="medium" variant="contained" color="secondary">
                    Add To Cart
                </Button>
            </CardActions>
        </Card>
    );
}