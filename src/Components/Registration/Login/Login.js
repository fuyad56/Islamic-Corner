import React from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const Login = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center h-[90vh] w-full">
        <div className="border rounded-3xl shadow-xl phone:w-auto">
          <h1 className="text-3xl font-semibold pl-16 pt-16">Login</h1>
          <form
            action=""
            className="flex flex-col w-auto h-auto pt-6 px-16 pb-10"
          >
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
              required
              className="border-2 rounded py-[6px] border-slate-900 text-md font-medium text-slate-700 px-2 w-[300px] tablet:w-[250px] phone:w-auto"
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              required
              className="border-2 rounded py-[6px] border-slate-900 text-md font-medium text-slate-700 mt-4 px-2 w-[300px] tablet:w-[250px] phone:w-auto"
            />
            <input
              type="submit"
              value="Login"
              className="border-2 border-[#183D3D] text-slate-700 font-medium w- mt-4 py-[6px] px-4 rounded hover:rounded-full hover:bg-[#183D3D] hover:text-slate-200"
            />
          </form>
          <div className="text-center pb-16">
            <h5 className="text-xl font-medium pb-2">Or</h5>
            <button className="border-2 border-[#183D3D] text-slate-700 font-medium mt-2 py-2 px-4 rounded hover:rounded-full hover:bg-[#183D3D] hover:text-slate-200">
              {" "}
              <FontAwesomeIcon icon={faGoogle} className="pr-4" />
              Sin in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
