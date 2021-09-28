import React, {useState} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {TextField} from "@material-ui/core";
import { createTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { green, purple } from '@material-ui/core/colors';
import {Button, Col, Row} from "reactstrap";

const theme = createTheme({
    palette: {
        def: green,
    },
});

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
        marginLeft:8,
        marginBottom:8,
        marginTop:8
    },
    margin: {
        margin: theme.spacing(1),
        marginTop:10,
        color:"#fff",
    },
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
                <Row className={classes.addTo}>
                    <Col xs={2}>
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
                    </Col>
                    <Col xs={8} style={{textAlign:"right"}}>
                        <Button color="success" onClick={handleButton} className={classes.margin}>
                            Add To Cart
                        </Button>
                    </Col>
                </Row>
        </Card>
    );
}