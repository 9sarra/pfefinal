import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

import Dashboard from "views/admin/Dashboard.js";
import Maps from "views/admin/Maps.js";
import Settings from "views/admin/Settings.js";
import Tables from "views/admin/Tables.js";
import TablesClients from "views/admin/TablesClients";
import TablesProduit from "views/admin/TablesProduit";
import MainCategoryList from "views/admin/mainCategoryList";
import TablesAchat from "views/admin/TablesAchat";
import TablesCommande from "views/admin/TablesCommande";
import TablesRecherche from "views/admin/TablesRecherche";
import AddProduct from "views/admin/AddProduct";
import SecondCategoryList from "views/admin/secondCategoryList";
import ThirdCategoryList from "views/admin/thirdCategoryList";
import Fovortie from "views/admin/favorite.js";
import MainCategoryForm from "../views/admin/mainCategoryForm";
import SecondCategoryForm from "../views/admin/secondCategoryForm";
import ThirdCategoryForm from "../views/admin/ThirdCategoryForm";

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
          <Route path="/client/favorite"  component={Fovortie} />
            <Route
              path="/admin/tablesClients"
              exact
              component={TablesClients}
            />
            <Route
              path="/admin/mainCategoryList"
              exact
              component={MainCategoryList}
            />
            <Route
              path="/admin/mainCategoryForm"
              exact
              component={MainCategoryForm}
            />
            <Route
              path="/admin/secondCategoryList"
              exact
              component={SecondCategoryList}
            />
            <Route
              path="/admin/secondCategoryForm"
              exact
              component={SecondCategoryForm}
            />
            <Route
              path="/admin/ThirdCategoryList"
              exact
              component={ThirdCategoryList}
            />
            <Route
              path="/admin/ThirdCategoryForm"
              exact
              component={ThirdCategoryForm}
            />
            <Route
              path="/admin/tablesProduit"
              exact
              component={TablesProduit}
            />

            <Route path="/admin/addProduct" exact component={AddProduct} />
            <Route
              path="/admin/tablesCommande"
              exact
              component={TablesCommande}
            />
            <Route
              path="/admin/tablesRecherche"
              exact
              component={TablesRecherche}
            />
            <Redirect from="/admin" to="/admin/tablesProduit" />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
