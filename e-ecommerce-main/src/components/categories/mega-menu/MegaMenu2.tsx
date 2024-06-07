import Card from "@component/Card";
import React from "react";
import CategoryMenuItem from "../category-menu-item/CategoryMenuItem";
import MegaMenu3 from "./MegaMenu3";
import { StyledMegaMenu1 } from "./MegaMenuStyle";

export interface MegaMenu2Props {
  data: {
    icon: string;
    href: string;
    title: string;
    menuData?: any;
  }[];
}

const MegaMenu2: React.FC<MegaMenu2Props> = ({ data }) => {
  console.log("dataCategory : ", data);
  if (data.length > 0) {
    return (
      <StyledMegaMenu1 className="mega-menu">
        <Card ml="1rem" py="0.5rem" boxShadow="regular">
          {data?.map((item) => (
            <CategoryMenuItem
              title={item.title}
              href={item.href}
              icon={item.icon}
              caret={!!item.menuData}
              key={item.title}
            >
              {item.menuData && (
                <MegaMenu3 minWidth="560px" data={item.menuData} />
              )}
            </CategoryMenuItem>
          ))}
        </Card>
      </StyledMegaMenu1>
    );
  }
  return <StyledMegaMenu1 className="mega-menu"></StyledMegaMenu1>;
};

export default MegaMenu2;
