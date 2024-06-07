import LazyImage from "@component/LazyImage";
import { useAppContext } from "@context/app/AppContext";
import { CartItem } from "@reducer/cartReducer";
import Link from "next/link";
import React, { Fragment, useCallback, useEffect, useState } from "react";
import { CSSProperties } from "styled-components";
import Box from "../Box";
import Button from "../buttons/Button";
import Card, { CardProps } from "../Card";
import { Chip } from "../Chip";
import FlexBox from "../FlexBox";
import Icon from "../icon/Icon";
import Modal from "../modal/Modal";
import ProductIntro from "../products/ProductIntro";
import Rating from "../rating/Rating";
import { H3, SemiSpan } from "../Typography";
import { StyledProductCard1 } from "./ProductCardStyle";
import axios from 'axios'
export interface ProductCard1Props extends CardProps {
  className?: string;
  style?: CSSProperties;
  imgUrl?: string;
  title?: string;
  price?: number;
  off?: number;
  rating?: number;
  id?: string | number;
  _id:string
  // className?: string;
  // style?: CSSProperties;
  // imgUrl: string;
  // title: string;
  // price: number;
  // off: number;
  // rating?: number;
  // subcategories?: Array<{
  //   title: string;
  //   url: string;
  // }>;
}

const ProductCard1: React.FC<ProductCard1Props> = ({
  imgUrl,
  title,
  price,
  _id,
  ...props
}) => {

 
  
  const [qty,setDataQty]=useState(0)
  
  const [count,setCount]=useState(0)
  const handleCartItem=()=>{
    const items:any=JSON.parse(localStorage.getItem('cart'));
    
    if(items){
      const findedElement=items.findIndex((el)=>el.id.toString()==_id.toString())
      
      
      if(findedElement>-1){
        items[findedElement].qty+=1
        console.log(items[findedElement].qty);
        
        setDataQty(items[findedElement].qty+1)
        localStorage.setItem('cart',JSON.stringify(items))
      }else{
        items.push({
          id:_id,
          imgUrl,
          title,
          price,
          qty:1
        })
        localStorage.setItem('cart',JSON.stringify(items))
      }
    }
  }
  const handleCartItemDescrise=()=>{
    const items:any=JSON.parse(localStorage.getItem('cart'));
    
    if(items){
      const findedElement=items.findIndex((el)=>el.id.toString()==_id.toString())
      
      if(findedElement>-1){
        items[findedElement].qty-=1
        if(items[findedElement].qty>0){
          
          localStorage.setItem('cart',JSON.stringify(items))
          setDataQty(items[findedElement].qty-1)
        }
       
      }else{
        items.push({
          id:_id,
          imgUrl,
          title,
          price,
          qty:1
        })
        localStorage.setItem('cart',JSON.stringify(items))
      }
    }
  }
  useEffect(()=>{
    const items:any=JSON.parse(localStorage.getItem('cart'));
    
    if(items){
      
      const findedElement=items.findIndex((el)=>el.id.toString()==_id.toString())
      
      if(findedElement>-1){
        setDataQty(items[findedElement].qty)
      }else{
        setDataQty(0)
      }
    }
  })
  const [data, setData] = useState([]);
  const handleGetData = async () => {
    const token=localStorage.getItem('token')
    try {
      const res = await axios.get(
        "http://localhost:5001/favorite/get-favorite",
        {
          headers:{ Authorization: `Bearer ${token}` },
        }
      );
      console.log('res : ',res.data.res);
      
      setData(res.data.res);
    } catch (err) {}
  };
  const handlAddFavorite=async(id)=>{
    const token=localStorage.getItem('token')
  
    
      await axios.post('http://localhost:5001/favorite/add-favorite',{prodId:id},{
        headers:{ Authorization: `Bearer ${token}` },
      })
      setCount(count+1)
  }
  const handlRemoveFavorite=async(id)=>{
   
    
      await axios.delete(`http://localhost:5001/favorite/edit-favorite/${id}`);
      setCount(count+1)
  }
  
  useEffect(() => {
    handleGetData();
  }, [count]);

 
  
  return (
    <StyledProductCard1 {...props}>
      <div className="image-holder">
        
          {
            data.findIndex((el)=>el.prodId._id.toString()==_id.toString())>-1?(
              <FlexBox className="extra-icons" onClick={()=>handlRemoveFavorite(data[data.findIndex((el)=>el.prodId._id.toString()==_id.toString())]._id)}>
              <Icon className="favorite-icon outlined-icon" variant="small" style={{color:'red'}}>
              heart-filled
            </Icon>
            </FlexBox>
           ):(
            <FlexBox className="extra-icons" onClick={()=>handlAddFavorite(_id)}>
            <Icon className="favorite-icon outlined-icon" variant="small" >
            heart
          </Icon>
           </FlexBox>
          )
          }
          
          {/* <Icon className="favorite-icon" color="primary" variant="small">
              heart-filled
            </Icon> */}
        

        <Link href={`/product/${_id}`}>
          <a>
            <LazyImage
              src={`http://localhost:5001/${imgUrl}`}
              width="100%"
              height="auto"
              layout="responsive"
              alt={title}
            />
          </a>
        </Link>
      </div>
      <div className="details">
        <FlexBox>
          <Box flex="1 1 0" minWidth="0px" mr="0.5rem">
            <Link href={`/product/${_id}`}>
              <a>
                <H3
                  className="title"
                  fontSize="14px"
                  textAlign="left"
                  fontWeight="600"
                  color="text.secondary"
                  mb="10px"
                  title={title}
                >
                  {title}
                </H3>
              </a>
            </Link>

            <FlexBox alignItems="center" mt="10px">
              <SemiSpan pr="0.5rem" fontWeight="600" color="primary.main">
                {Number(price).toFixed(2)}dt
              </SemiSpan>
            </FlexBox>
          </Box>

          <FlexBox
            flexDirection="column-reverse"
            alignItems="center"
            justifyContent={"space-between"}
            width="30px"
          >
            {/* <div className="add-cart"> */}
            <Button
              variant="outlined"
              color="primary"
              padding="3px"
              size="none"
              borderColor="primary.light"
              onClick={handleCartItem}
            >
              <Icon variant="small">plus</Icon>
            </Button>

            {/* {!!cartItem?.qty && (
              
            )} */}
            <Fragment>
              <SemiSpan color="text.primary" fontWeight="600">
                {qty}
              </SemiSpan>
              <Button
                variant="outlined"
                color="primary"
                padding="3px"
                size="none"
                borderColor="primary.light"
                onClick={handleCartItemDescrise}
              >
                <Icon variant="small">minus</Icon>
              </Button>
            </Fragment>
          </FlexBox>
        </FlexBox>
      </div>
    </StyledProductCard1>
  );
};



export default ProductCard1;
