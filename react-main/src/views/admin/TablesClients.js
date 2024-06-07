import React from "react";

// components


import CardTableClients from "components/Cards/CardTableClients";

export default function TablesClients() {
  return (
    <>
       <div className="flex flex-wrap mt-4">
         {/* <div className="w-full mb-12 px-4">
          <CardTableClients />
        </div>   */}
        <div className="w-full mb-12 px-4">
          <CardTableClients color="dark" />
        </div>
      </div>
    </>
  );
}
