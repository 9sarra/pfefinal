import React from "react";

// components

import SecondCategoryListComp from "components/Cards/secondCategoryList";

export default function SecondCategoryList() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        {/* <div className="w-full mb-12 px-4">
          <CardTableProduit />
        </div>   */}
        <div className="w-full mb-12 px-4">
          <SecondCategoryListComp color="dark" />
        </div>
      </div>
    </>
  );
}
