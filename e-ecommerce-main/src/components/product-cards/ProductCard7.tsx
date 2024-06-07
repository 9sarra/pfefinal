import Box from "@component/Box";
import Image from "@component/Image";
import { useAppContext } from "@context/app/AppContext";
import Link from "next/link";
import React, { useCallback } from "react";
import { SpaceProps } from "styled-system";
import Button from "../buttons/Button";
import IconButton from "../buttons/IconButton";
import FlexBox from "../FlexBox";
import Icon from "../icon/Icon";
import Typography from "../Typography";
import { StyledProductCard7 } from "./ProductCardStyle";
import { useRouter } from 'next/router';
export interface ProductCard7Props {
  id: string | number;
  title: string;
  qty: number;
  price: number;
  imgUrl?: string;
  count:number;
  setCount:any
}

const ProductCard7: React.FC<ProductCard7Props & SpaceProps> = ({
  id,
  title,
  qty,
  price,
  imgUrl,
  count,
  setCount,
  ...props
}) => {
  const router = useRouter();
  const { dispatch } = useAppContext();
  const handleRemoveItem=()=>{
    const items=JSON.parse(localStorage.getItem('cart'))
    if(items.length>0){
      const findedElement=items.findIndex((el)=>el.id.toString()==id.toString())
      
      
      if(findedElement>-1){
      const filtredData=items.filter(obj => obj.id.toString() !== id.toString());
      localStorage.setItem('cart',JSON.stringify(filtredData))
      }
      if(JSON.parse(localStorage.getItem('cart')).length==0){
        router.push('/');
      }
      setCount(count+1)
    }
  }
  const increaseITem=()=>{
    const items=JSON.parse(localStorage.getItem('cart'))
    if(items.length>0){
      const findedElement=items.findIndex((el)=>el.id.toString()==id.toString())
      
      
      if(findedElement>-1){
        items[findedElement].qty+=1
        console.log(items[findedElement].qty);
        localStorage.setItem('cart',JSON.stringify(items))
      }else{
        items.push({
          id:id,
          imgUrl,
          title,
          price,
          qty:1
        })
        localStorage.setItem('cart',JSON.stringify(items))
      }
    }
    setCount(count+1)
  }
  const decreaseITem=()=>{
    const items=JSON.parse(localStorage.getItem('cart'))
    if(items.length>0){
      const findedElement=items.findIndex((el)=>el.id.toString()==id.toString())
      
      
      if(findedElement>-1){
        items[findedElement].qty-=1
        if(items[findedElement].qty==0){
          const filtredData=items.filter(obj => obj.id.toString() !== id.toString());
          localStorage.setItem('cart',JSON.stringify(filtredData))
        }else{
          localStorage.setItem('cart',JSON.stringify(items))
        }
        
      }else{
        items.push({
          id:id,
          imgUrl,
          title,
          price,
          qty:1
        })
        localStorage.setItem('cart',JSON.stringify(items))
      }
    }
    setCount(count+1)
  }
  return (
    <StyledProductCard7 {...props}>
      <Image
        src={`http://localhost:5001/${imgUrl}`}
        size={140}
        display="block"
        alt={imgUrl}
      />
      <FlexBox
        className="product-details"
        flexDirection="column"
        justifyContent="space-between"
        minWidth="0px"
        width="100%"
      >
        
          <a>
            <Typography
              className="title"
              fontWeight="600"
              fontSize="18px"
              mb="0.5rem"
            >
              {title}
            </Typography>
          </a>
        
        <Box position="absolute" right="1rem" top="1rem">
          <IconButton
            padding="4px"
            ml="12px"
            size="small"
            onClick={handleRemoveItem}
          >
            <Icon size="1.25rem">close</Icon>
          </IconButton>
        </Box>

        <FlexBox
          // width="100%"
          justifyContent="space-between"
          alignItems="flex-end"
        >
          <FlexBox flexWrap="wrap" alignItems="center">
            <Typography color="gray.600" mr="0.5rem">
              ${price} x {qty}
            </Typography>
            <Typography fontWeight={600} color="primary.main" mr="1rem">
              ${(price * qty)}
            </Typography>
          </FlexBox>

          <FlexBox alignItems="center">
            <Button
              variant="outlined"
              color="primary"
              padding="5px"
              size="none"
              borderColor="primary.light"
              onClick={decreaseITem}
              disabled={qty === 1}
            >
              <Icon variant="small">minus</Icon>
            </Button>
            <Typography mx="0.5rem" fontWeight="600" fontSize="15px">
              {qty}
            </Typography>
            <Button
              variant="outlined"
              color="primary"
              padding="5px"
              size="none"
              borderColor="primary.light"
              onClick={increaseITem}
            >
              <Icon variant="small">plus</Icon>
            </Button>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </StyledProductCard7>
  );
};

export default ProductCard7;
