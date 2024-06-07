import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";
import Client from "layouts/Client";
import { AuthProvider } from "./context/Auth";

ReactDOM.render(
  <AuthProvider>
    <BrowserRouter>
      <Switch>
        {!!localStorage.getItem("user") ? (
          JSON.parse(localStorage.getItem("user")).role === "client" ? (
            <>
              <Redirect from="*" to="/client" />
              <Route path="/client" component={Client} />
            </>
          ) : (
            <>
              <Redirect from="*" to="/admin" />
              <Route path="/admin" component={Admin} />
            </>
          )
        ) : (
          <>
            <Redirect from="*" to="/auth" />
            <Route path="/auth" component={Auth} />
          </>
        )}
      </Switch>
    </BrowserRouter>
  </AuthProvider>,
  document.getElementById("root")
);
