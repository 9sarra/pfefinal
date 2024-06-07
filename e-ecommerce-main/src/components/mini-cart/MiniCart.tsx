import { useState,useEffect } from "react";
import Avatar from "@component/avatar/Avatar";
import FlexBox from "@component/FlexBox";
import LazyImage from "@component/LazyImage";
import { useAppContext } from "@context/app/AppContext";
import { CartItem } from "@reducer/cartReducer";
import Link from "next/link";
import React, { Fragment, useCallback } from "react";
import Button from "../buttons/Button";
import Divider from "../Divider";
import Icon from "../icon/Icon";
import Typography, { H5, Paragraph, Tiny } from "../Typography";
import { StyledMiniCart } from "./MiniCartStyle";
import axios from 'axios'
import { log } from "console";

type MiniCartProps = {
  toggleSidenav?: () => void;
};

const MiniCart: React.FC<MiniCartProps> = ({ toggleSidenav }) => {
  const [count,setCount]=useState(0)
  useEffect(()=>{
    console.log('');
    
  },[count])
  const { state, dispatch } = useAppContext();
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
  
  

  const handleCartAmountChange = useCallback(
    (amount, product) => () => {
      dispatch({
        type: "CHANGE_CART_AMOUNT",
        payload: {
          ...product,
          qty: amount,
        },
      });
    },
    []
  );

  const getTotalPrice = () => {
    return (
      cartList.reduce(
        (accumulator, item) => accumulator + item.price * item.qty,
        0
      ) || 0
    );
  };
  const handleRemoveItem=(id)=>{
  
    const items=JSON.parse(localStorage.getItem('cart'));
    console.log('items : ',items);
    
    if(items&&items.length>0){  
      const findedElement=items.findIndex((el)=>el.id.toString()==id.toString())
      if(findedElement>-1){
        const filtredData=items.filter(obj => obj.id.toString() !== id.toString());
        localStorage.setItem('cart',JSON.stringify(filtredData))
        
      }
      
      setCount(count+1)
      toggleSidenav()
    }
    
  }
  const handleSaveOrder=async()=>{
    const items=JSON.parse(localStorage.getItem('cart'));
    const token=localStorage.getItem('token')
    const orderDetails=[]
    if(items.length>0){
      items.forEach(element => {
        orderDetails.push({
          qty:element.qty,
          productId:element.id
        })
      });
      await axios.post('http://localhost:5001/order/save-order',{
      orderDetails
    },{
      headers:{ Authorization: `Bearer ${token}` },
    })
    const emptyData:any=[]
    localStorage.setItem('cart',JSON.stringify(emptyData))
    setCount(count+1)
    toggleSidenav()
    }
    
  }
  return (
    <StyledMiniCart>
      <div className="cart-list">
        <FlexBox alignItems="center" m="0px 20px" height="74px">
          <Icon size="1.75rem">bag</Icon>
          <Typography fontWeight={600} fontSize="16px" ml="0.5rem">
            {cartList.length} item
          </Typography>
        </FlexBox>

        <Divider />

        {!!!cartList.length && (
          <FlexBox
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="calc(100% - 80px)"
          >
            <LazyImage
              src={`http://localhost:5001`}
              width="90px"
              height="100%"
            />
            <Paragraph
              mt="1rem"
              color="text.muted"
              textAlign="center"
              maxWidth="200px"
            >
              Your shopping bag is empty. Start shopping
            </Paragraph>
          </FlexBox>
        )}
        {cartList.map((item: CartItem) => (
          <Fragment key={item.id}>
            <div className="cart-item">
              

              <Link href={`/product/${item.id}`}>
                <a>
                  <Avatar
                    src={`http://localhost:5001/${item.imgUrl}` || "/assets/images/products/iphone-x.png"}
                    mx="1rem"
                    alt={item.name}
                    size={76}
                  />
                </a>
              </Link>

              <div className="product-details">
                <Link href={`/product/${item.id}`}>
                  <a>
                    <H5 className="title" fontSize="14px">
                      {item.name}
                    </H5>
                  </a>
                </Link>
                <Tiny color="text.muted">
                  ${item.price} x {item.qty}
                </Tiny>
                <Typography
                  fontWeight={600}
                  fontSize="14px"
                  color="primary.main"
                  mt="4px"
                >
                  ${(item.qty * item.price).toFixed(2)}
                </Typography>
              </div>

              <Icon
                className="clear-icon"
                size="1rem"
                ml="1.25rem"
                onClick={()=>handleRemoveItem(item.id)}
              >
                close
              </Icon>
            </div>
            <Divider />
          </Fragment>
        ))}
      </div>

      {!!cartList.length && (
        <Fragment>
      
            <Button
              variant="contained"
              color="primary"
              m="1rem 1rem 0.75rem"
              onClick={handleSaveOrder}
            >
              <Typography fontWeight={600}>
                souvgarder
              </Typography>
            </Button>
        
          <Link href="/cart">
            <Button
              color="primary"
              variant="outlined"
              m="0px 1rem 0.75rem"
              onClick={toggleSidenav}
            >
              <Typography fontWeight={600}>View Cart</Typography>
            </Button>
          </Link>
        </Fragment>
      )}
    </StyledMiniCart>
  );
};

MiniCart.defaultProps = {
  toggleSidenav: () => {},
};

export default MiniCart;
