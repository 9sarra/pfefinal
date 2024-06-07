import React from "react";

// components

import MainCategoryListComp from "components/Cards/mainCategoryList";

export default function MainCategoryList() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        {/* <div className="w-full mb-12 px-4">
          <CardTableProduit />
        </div>   */}
        <div className="w-full mb-12 px-4">
          <MainCategoryListComp color="dark" />
        </div>
      </div>
    </>
  );
}
