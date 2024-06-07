import React, { useState } from "react";

export default function CardProfile() {
  const [showInfo, setShowInfo] = useState(false);
  const handleEdit = () => {
    try {
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16  n">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 flex justify-center">
              <div className="relative">
                <img
                  alt="..."
                  src={require("assets/img/imgAvatar.png").default}
                  className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                />
              </div>
            </div>
            <div className="w-full px-4 text-center mt-20"></div>
          </div>
          <div className="text-center mt-12 ">
            <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
              {JSON.parse(localStorage.getItem("user")).fullName}
            </h3>
            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "}
              {JSON.parse(localStorage.getItem("user")).address}
            </div>
            <div className="mb-2 text-blueGray-600 mt-10">
              <i className="fas fa-envelope mr-2 text-lg text-blueGray-400"></i>
              {JSON.parse(localStorage.getItem("user")).email}
            </div>
          </div>
          <hr className="mt-6 border-b-1 border-blueGray-300" />
          <div className="px-4 py-5 flex-auto">
            <h6
              className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase cursor-pointer"
              onClick={() => setShowInfo(!showInfo)}
            >
              vos Informations
            </h6>
            {showInfo && (
              <div className="px-4 py-5 flex-auto">
                <div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Nom et Prénom
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-500"
                      defaultValue="lucky.jesse"
                    />
                  </div>
                </div>
                <div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      E-mail
                    </label>
                    <input
                      type="email"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      defaultValue="jesse@example.com"
                    />
                  </div>
                </div>
                <div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Address
                    </label>
                    <input
                      type="tel"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      defaultValue="Lucky"
                    />
                  </div>
                </div>

                <div className="flex justify-center items-center">
                  <button
                    className="bg-orange-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleEdit}
                  >
                    mise à jour
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
