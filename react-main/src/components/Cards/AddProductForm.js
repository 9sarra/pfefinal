import React, { useState, useEffect } from "react";
import axios from "axios";
export default function AddProductForm() {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [mainCategory, setMainCategory] = useState();
  const [secondCategory, setSecondCategory] = useState();
  const [thirdCategory, setThirdCategory] = useState();
  const [coupon, setCoupon] = useState();
  const [loyaltyPoints, setLoyaltyPoints] = useState();
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const handleGetData = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5001/prod/get-main-category",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const res2 = await axios.get(
        "http://localhost:5001/prod/getSecond/category",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const res3 = await axios.get(
        "http://localhost:5001/prod/getThird/Category/List",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (res.data.mainCategories.length > 0) {
        setMainCategory(res.data.mainCategories[0]._id);
      }
      setData(res.data.mainCategories);
      if (res2.data.res.length > 0) {
        setSecondCategory(res2.data.res[0]._id);
      }
      if (res3.data.res.length > 0) {
        setThirdCategory(res3.data.res[0]._id);
      }
      setData2(res2.data.res);
      setData3(res3.data.res);
    } catch (err) {}
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("price", price);
    formData.append("mainCategory", mainCategory);
    formData.append("secondCategory", secondCategory);
    formData.append("thirdCategory", thirdCategory);
    formData.append("coupon", coupon);
    formData.append("loyaltyPoints", loyaltyPoints);
    try {
      await axios.post(
        "http://localhost:5001/prod/create/getCategories/products/one",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    handleGetData();
  }, []);
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">My account</h6>
            <button
              onClick={handleSubmit}
              className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
            >
              Ajouter
            </button>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Product Information
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    title
                  </label>
                  <input
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    coupon
                  </label>
                  <input
                    onChange={(e) => setCoupon(e.target.value)}
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Loyalty Points
                  </label>
                  <input
                    onChange={(e) => setLoyaltyPoints(e.target.value)}
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    price
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setPrice(e.target.value)}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Photo
                  </label>
                  <input
                    type="file"
                    id="photo"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    onChange={handleFileChange}
                  />
                </div>
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Categories
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Main Category
                  </label>
                  <select
                    value={mainCategory}
                    onChange={(e) => setMainCategory(e.target.value)}
                  >
                    {data?.map((el) => {
                      return <option value={el._id}>{el.title}</option>;
                    })}
                  </select>
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Second Category
                  </label>
                  <select
                    value={secondCategory}
                    onChange={(e) => setSecondCategory(e.target.value)}
                  >
                    {data2?.map((el) => {
                      return <option value={el._id}>{el.title}</option>;
                    })}
                  </select>
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Third Category
                  </label>
                  <select
                    value={thirdCategory}
                    onChange={(e) => setThirdCategory(e.target.value)}
                  >
                    {data3?.map((el) => {
                      return <option value={el._id}>{el.title}</option>;
                    })}
                  </select>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
