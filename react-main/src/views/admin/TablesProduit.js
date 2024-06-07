import React from "react";

// components


import CardTableProduit from "components/Cards/CardTableProduit";

export default function TablesProduit() {
  return (
    <>
       <div className="flex flex-wrap mt-4">
         {/* <div className="w-full mb-12 px-4">
          <CardTableProduit />
        </div>   */}
        <div className="w-full mb-12 px-4">
          <CardTableProduit color="dark" />
        </div>
      </div>
    </>
  );
}
