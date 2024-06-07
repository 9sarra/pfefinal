import axios from "axios";
import React, { useState, useEffect } from "react";

export default function SecondCategoryForm() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [data, setData] = useState();

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5001/prod/createSecondCategory",
        {
          title: name,
          mainCategoryId: selectedOption,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
  };
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
      setData(res.data.mainCategories);
    } catch (err) {}
  };

  useEffect(() => {
    handleGetData();
  }, []);
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">
              Add Second Category
            </h6>
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
          <form
            onSubmit={(e) => {
              e.preventDefault();
              // Handle form submission here
            }}
          >
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Main Category Information
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="title"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    id="title"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue="lucky.jesse"
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="photo"
                  >
                    Photo
                  </label>
                  <input
                    type="file"
                    id="photo"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    onChange={handleFileChange}
                  />
                  {selectedFile && (
                    <img
                      src={URL.createObjectURL(selectedFile)}
                      alt="Selected"
                      className="mt-4"
                      width="100"
                      height="100"
                    />
                  )}
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="photo"
                  >
                    Th Main Category
                  </label>

                  <select
                    name="role"
                    value={selectedOption}
                    onChange={handleChange}
                  >
                    {data?.map((el) => {
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
