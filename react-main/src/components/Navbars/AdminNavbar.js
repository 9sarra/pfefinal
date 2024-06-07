import React from "react";
import { useHistory } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

import UserDropdown from "components/Dropdowns/UserDropdown.js";

export default function Navbar() {
  const history = useHistory();
  function Déconnexion() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    history.push("/auth/login");
    window.location.reload();
  }
  const history1 = useHistory();
  function settings() {
    history1.push("/admin/settings");
  }
  
  const handleComerce=()=>{
    const token=window.localStorage.getItem('token')
    window.location.href=`http://localhost:3000?token=${token}`
  }
  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
        <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
          {/* Brand */}
          <a
            className="text-white text-sm uppercase hidden lg:inline-block font-semibold"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
          >
            Dashboard
          </a>
          {/* Form */}
          <form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
            <li className="flex items-center">
              <button
                onClick={handleComerce}
                className="bg-white text-blueGray-700 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                type="button"
               
              >
                <i className="fas fa-arrow-alt-circle-up"></i> E-Commerce
              </button>
            </li>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <li className="flex items-center">
              <button
                className="bg-white text-blueGray-700 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                type="button"
                onClick={(e) => Déconnexion()}
              >
                <i className="fas fa-arrow-alt-circle-down"></i> Déconnexion
              </button>
            </li>
          </form>
          {/* User */}
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
}
