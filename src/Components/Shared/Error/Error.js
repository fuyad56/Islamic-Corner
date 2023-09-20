import React from "react";
import Navbar from "../Navbar/Navbar";

const Error = () => {
  return (
    <div>
      <Navbar />
      <footer className="h-[100vh] bg-[#183D3D]">
        <div className="flex items-center justify-center h-full flex-col w-auto tablet:mx-[100px] phone:mx-[30px]">
          <div className="border text-center p-10 rounded-3xl shadow-xl bg-white">
            <h1 className="text-[100px] font-extrabold text-[#183D3D] tablet:text-[60px] phone:text-4xl">
              Oops!!!
            </h1>
            <h3 className="text-3xl font-semibold text-slate-800 pb-2 tablet:text-2xl phone:text-xl mt-1">
              404 - page note found
            </h3>
            <p className="text-md font-medium text-slate-600 pb-4 laptop:w-[500px] tablet:w-[450px]">
              The page you are looking for might have been removed had its name
              changed or is temporarily unavailable.
            </p>
            <button>
              <a
                href="/"
                className="border-2 border-[#183D3D] text-slate-700 font-medium py-1 px-4 rounded hover:rounded-full hover:bg-[#183D3D] hover:text-slate-200"
              >
                Go to home page
              </a>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Error;
