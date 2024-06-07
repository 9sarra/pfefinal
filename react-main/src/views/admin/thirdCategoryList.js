import React from "react";

// components

import ThirdCategoryListComp from "components/Cards/ThirdCategoryList";

export default function ThirdCategoryList() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        {/* <div className="w-full mb-12 px-4">
          <CardTableProduit />
        </div>   */}
        <div className="w-full mb-12 px-4">
          <ThirdCategoryListComp color="dark" />
        </div>
      </div>
    </>
  );
}
