import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import { useHistory } from "react-router-dom";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const history = useHistory();
  function useQuery() {}
  const [user, setUserData] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const query = new URLSearchParams(window.location.search);
  useEffect(() => {
    const tokenGeted = query.get("token");
    setToken(tokenGeted);
    localStorage.setItem("token", tokenGeted);
  }, []);
  useEffect(() => {
    if (token) {
      fetchUserProfile();
    }
  }, [token]);

  const login = async (email, password) => {
    try {
      const response = await axios.post(
        "http://localhost:5001/api/users/login",
        {
          email,
          password,
        }
      );

      const { token, user } = response.data;
      setToken(token);
      localStorage.setItem("token", response.data.token);
      setUserData(user);
      fetchUserProfile();
    } catch (error) {
      console.error("Login failed:", error);
      // Handle login error (e.g., show a message to the user)
    }
  };

  const fetchUserProfile = async () => {
    try {
      if (token && token !== "null") {
        const response = await axios.get("http://localhost:5001/api/users/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("token", response.data.token);
        setUserData(response.data.user);
        if (response.data.user.role === "client") {
          history.push("/client");
        } else {
          history.push("/admin");
        }
      }
    } catch (error) {
      console.error("Fetching profile failed:", error);
      // Handle profile fetch error (e.g., show a message to the user)
    }
  };

  const logout = () => {
    setUserData(null);
    setToken(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
