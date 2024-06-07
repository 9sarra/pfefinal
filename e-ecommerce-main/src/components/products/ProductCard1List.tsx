import productDatabase from "@data/product-database";
import React, { useEffect, useState } from "react";
import FlexBox from "../FlexBox";
import Grid from "../grid/Grid";
import Pagination from "../pagination/Pagination";
import ProductCard1 from "../product-cards/ProductCard1";
import { SemiSpan } from "../Typography";
import axios from "axios";
import { log } from "console";

export interface ProductCard1ListProps {
  id: number;
  prod: string;
}

const ProductCard1List: React.FC<ProductCard1ListProps> = ({ id, prod }) => {
  const [data, setData] = useState(null);
  const getProducts = async () => {
    if (id) {
      if (prod == "second-category") {
        const res = await axios.get(
          `http://localhost:5001/prod/production/for/user/add/test/second/${id}`
        );

        setData(res.data.data);
      } else if (prod == "third-category") {
        const res = await axios.get(
          `http://localhost:5001/prod/production/for/user/add/test/third/${id}`
        );

        setData(res.data.data);
      } else {
        const res = await axios.get(
          `http://localhost:5001/prod/production/for/user/add/test/main/category/${id}`
        );
    
        setData(res.data.data);
      }
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Grid container spacing={6}>
        {data?.map((item, ind) => {
          
          return (
            <Grid item lg={4} sm={6} xs={12} key={item._id}>
              <ProductCard1 {...item}  />
            </Grid>
        )
        }
          
        )}
      </Grid>

      <FlexBox
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
        mt="32px"
      ></FlexBox>
    </div>
  );
};

export default ProductCard1List;
