import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../context/Auth";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(AuthContext);

  return user ? <Redirect to="/admin" /> : <Redirect to="/auth" />;
};

export default ProtectedRoute;
