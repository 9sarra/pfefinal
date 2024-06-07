import React from "react";
import { Link, useHistory } from "react-router-dom";



// components

export default function CardSettings() {
  const history = useHistory()

  function produit() {

    history.push("/admin/tablesProduit")

  }
  const historys = useHistory()

  function achat() {

    historys.push("/admin/tablesAchat")

  }
  const history3 = useHistory()

  function recherches() {

    history3.push("/admin/tablesRecherche")

  }
  const history4 = useHistory()

  function getPage(url) {

    history4.push(url)

  }
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">Mon Profil </h6>

          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Bienvenue à votre maison
            </h6>
            <div className="flex flex-wrap">
              <section >
                <div className="container mx-auto px-4">
                  <div className="flex flex-wrap">
                    <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                        <div className="px-4 py-5 flex-auto">
                          
                          <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-orange-500"  onClick={() => getPage('/client/orders')}>
                            <i class="fas fa-shipping-fast text-green-500 mr-2"></i>
                          </div>
                          <h6 className="text-xl font-semibold">Mes commandes</h6>
                          <p className="mt-2 mb-4 text-blueGray-500">
                            <a>Toutes mes commandes</a>
                          </p>
                          <div class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-jdvyuc">
                            <h3 class=" MuiBox-root css-m7upf9">0</h3>
                          </div>
                          <div class="flex justify-center items-center">
                          </div>
                          
                          
                        </div>
                      </div>
                    </div>
                    <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                        <div className="px-4 py-5 flex-auto">
                          <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-800">
                            <i className="fas fa-gift"></i>
                          </div>
                          <h6 className="text-xl font-semibold">Bons d'achat</h6>
                          <p className="mt-2 mb-4 text-blueGray-500">
                            Mes <br></br> bons d'achat
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                        <div className="px-4 py-5 flex-auto">
                          <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-orange-500" onClick={(e) => achat()}>
                            <i className="fas fa-check"></i>
                          </div>
                          <h6 className="text-xl font-semibold">Mes achats</h6>
                          <p className="mt-2 mb-4 text-blueGray-500">
                            <a>Tous mes achats</a>
                          </p>
                          <div class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-jdvyuc">
                            <h3 class=" MuiBox-root css-m7upf9">0</h3>
                          </div>
                          <div class="flex justify-center items-center">
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                        <div className="px-4 py-5 flex-auto">
                          <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-800">
                            <i className="fas fa-credit-card"></i>
                          </div>
                          <h6 className="text-xl font-semibold">Mes finances</h6>
                          <p className="mt-2 mb-4 text-blueGray-500">
                            <a>  Mon <br></br> solde à payer</a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                        <div className="px-4 py-5 flex-auto">
                          <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-orange-500">
                            <i className="fas fa-star"></i>
                          </div>
                          <h6 className="text-xl font-semibold">Points de fidélité</h6>
                          <p className="mt-2 mb-4 text-blueGray-500">
                            Mes <br></br>points de fidélité
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                        <div className="px-4 py-5 flex-auto">
                          <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-800">
                            <i className="fas fa-retweet"></i>
                          </div>
                          <h6 className="text-xl font-semibold">Vus récemment </h6>
                          <p className="mt-2 mb-4 text-blueGray-500">
                            Mes<br></br> vus récement
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                        <div className="px-4 py-5 flex-auto">
                          <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-orange-500" onClick={() => getPage('/client/favorite')}>

                            <i className="fas fa-heart" ></i>
                          </div>
                          <h6 className="text-xl font-semibold">Mes favoris</h6>
                          <p className="mt-2 mb-4 text-blueGray-500">
                          favoris
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                        <div className="px-4 py-5 flex-auto">
                          <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-800"  onClick={(e) => recherches()}>
                            <i className="fas fa-search"></i>
                          </div>
                          <h6 className="text-xl font-semibold">Mes recherche</h6>
                          <p className="mt-2 mb-4 text-blueGray-500">
                            Recherches
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto"> 
              </div>
            </div> */}
                  {/* <HomePageCards/> */}
                </div>
              </section>
            </div>
            {/* 
            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Tous votre avis
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Votre avis
                  </label>
                  <textarea
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue="A beautiful UI Kit and Admin for React & Tailwind CSS. It is Free and Open Source."
                    rows="4"
                  ></textarea>
                  <div className="flex flex-wrap items-center mt-32"></div>
                </div>
              </div>
            </div> */}
          </form>
        </div>
      </div>
    </>
  );
}

