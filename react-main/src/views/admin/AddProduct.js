import React from "react";

// components

import AddProductForm from "components/Cards/AddProductForm";

export default function AddProduct() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-12/12 px-4">
          <AddProductForm />
        </div>
      </div>
    </>
  );
}
