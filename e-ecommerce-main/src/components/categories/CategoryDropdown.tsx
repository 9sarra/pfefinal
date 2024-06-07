import { useEffect, useState } from "react";
import navigations from "@data/navigations";
import React from "react";
import CategoryMenuItem from "./category-menu-item/CategoryMenuItem";
import { StyledCategoryDropdown } from "./CategoryDropdownStyle";
import MegaMenu1 from "./mega-menu/MegaMenu1";
import MegaMenu2 from "./mega-menu/MegaMenu2";
import axios from "axios";
export interface CategoryDropdownProps {
  open: boolean;
  position?: "absolute" | "relative";
}

const CategoryDropdown: React.FC<CategoryDropdownProps> = ({
  open,
  position,
}) => {
  const megaMenu = {
    MegaMenu1,
    MegaMenu2,
  };
  const [data, setData] = useState(null);
  const getData = async () => {
    const res = await axios.get(
      "http://localhost:5001/prod/all/getCategories/products"
    );
    if (res) {
      setData(res.data.newData);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  console.log(data);

  return (
    <StyledCategoryDropdown open={open} position={position}>
      {data?.map((item) => {
        let MegaMenu = megaMenu[item.menuComponent];

        return (
          <CategoryMenuItem
            title={item.title}
            href={`/product/search/${item._id}`}
            icon={item.icon}
            caret={!!item.menuData}
            key={item.title}
          >
            <MegaMenu data={item.menuData || {}} />
          </CategoryMenuItem>
        );
      })}
    </StyledCategoryDropdown>
  );
};

CategoryDropdown.defaultProps = {
  position: "absolute",
};

export default CategoryDropdown;
