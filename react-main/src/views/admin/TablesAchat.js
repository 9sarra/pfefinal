import React from "react";

// components


import CardTableAcha from "components/Cards/CardTableAchat";

export default function TablesAchat() {
  return (
    <>
       <div className="flex flex-wrap mt-4">
         {/* <div className="w-full mb-12 px-4">
          <CardTableAcha />
        </div>   */}
        <div className="w-full mb-12 px-4">
          <CardTableAcha color="dark" />
        </div>
      </div>
    </>
  );
}
