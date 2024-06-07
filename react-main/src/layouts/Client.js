import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views
import Settings from "views/admin/Settings.js";
import Fovortie from "views/admin/favorite.js";
import Orders from "views/admin/Tables";
export default function Admin() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/client/settings" exact component={Settings} />
            <Route path="/client/favorite"  component={Fovortie} />
            <Route path="/client/orders"  component={Orders} />
            <Redirect from="/client" to="/client/settings" />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
