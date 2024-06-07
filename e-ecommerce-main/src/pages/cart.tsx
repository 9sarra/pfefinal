import { useAppContext } from "@context/app/AppContext";
import { CartItem } from "@reducer/cartReducer";
import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import Box from "../components/Box";
import Button from "../components/buttons/Button";
import { Card1 } from "../components/Card1";
import Divider from "../components/Divider";
import FlexBox from "../components/FlexBox";
import Grid from "../components/grid/Grid";
import CheckoutNavLayout from "../components/layout/CheckoutNavLayout";
import ProductCard7 from "../components/product-cards/ProductCard7";
import Select from "../components/Select";
import TextField from "../components/text-field/TextField";
import TextArea from "../components/textarea/TextArea";
import Typography from "../components/Typography";
import countryList from "../data/countryList";
import { log } from "console";
import { useRouter } from 'next/router';


const Cart = () => {
  const { state } = useAppContext();
  const router = useRouter();
  
  const [count,setCount]=useState(0)
  let cartList=[]
  if(typeof window !== "undefined"){
    const cart=localStorage.getItem('cart')
    if(cart){
      const items=JSON.parse(cart)
      if(items){
        cartList  =items ;
      }
    }
    
  }

  const getTotalPrice = () => {
    return (
      cartList.reduce(
        (accumulator, item) => accumulator + item.price * item.qty,
        0
      ) || 0
    );
  };
  useEffect(()=> {
    console.log();
    
  },[count])
  const handleCheckout=()=>{
    router.push('/checkoutForm')
  }
  const handleCheckoutShank=()=>{

  }
  return (
    <Fragment>
      <Grid container spacing={6}>
        <Grid item lg={8} md={8} xs={12}>
          {cartList.map((item) => (
            <ProductCard7 key={item.id} mb="1.5rem" {...item} setCount={setCount} count={count}/>
          ))}
        </Grid>
        <Grid item lg={4} md={4} xs={12}>
          <Card1>
            <FlexBox
              justifyContent="space-between"
              alignItems="center"
              mb="1rem"
            >
              <Typography color="gray.600">Total:</Typography>
              <FlexBox alignItems="flex-end">
                <Typography fontSize="18px" fontWeight="600" lineHeight="1">
                  {getTotalPrice()}dt
                </Typography>
                
              </FlexBox>
            </FlexBox>

            <Divider mb="1rem" />


            
          
              <Button variant="contained" color="primary" fullwidth onClick={handleCheckout}>
                Checkout Now
              </Button>
           
            <Button variant="outlined" color="primary" my="1rem" fullwidth onClick={handleCheckoutShank}>
              Checkout shank
            </Button>
          </Card1>
        </Grid>
      </Grid>
    </Fragment>
  );
};

const stateList = [
  {
    value: "New York",
    label: "New York",
  },
  {
    value: "Chicago",
    label: "Chicago",
  },
];

Cart.layout = CheckoutNavLayout;

export default Cart;
