import React from "react";

// components


import CardTableRecherche from "components/Cards/CardTableRecherche";

export default function TablesRecherche() {
  return (
    <>
       <div className="flex flex-wrap mt-4">
         {/* <div className="w-full mb-12 px-4">
          <CardTableRecherche />
        </div>   */}
        <div className="w-full mb-12 px-4">
          <CardTableRecherche color="dark" />
        </div>
      </div>
    </>
  );
}
