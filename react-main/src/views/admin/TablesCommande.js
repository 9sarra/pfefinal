import React from "react";

// components


import CardTableCommande from "components/Cards/CardTableCommande";

export default function TablesProduit() {
  return (
    <>
       <div className="flex flex-wrap mt-4">
         {/* <div className="w-full mb-12 px-4">
          <CardTableCommande />
        </div>   */}
        <div className="w-full mb-12 px-4">
          <CardTableCommande color="dark" />
        </div>
      </div>
    </>
  );
}
