import React from "react";

// components

import MainCategoryFormComp from "components/Cards/mainCategoryForm";

export default function MainCategoryForm() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        {/* <div className="w-full mb-12 px-4">
          <CardTableProduit />
        </div>   */}
        <div className="w-full mb-12 px-4">
          <MainCategoryFormComp color="dark" />
        </div>
      </div>
    </>
  );
}
