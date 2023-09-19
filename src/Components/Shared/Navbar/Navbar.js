import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  // Dynamic the navigation background color
  const location = useLocation();
  const pathname = location.pathname;

  const [activeLink, setActiveLink] = useState(pathname);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  // Conditionally show the menu button and the close button
  const [menu, setMenu] = useState(false);

  const handleToggle = () => {
    setMenu(!menu);
  };

  return (
    <nav className="border-b shadow-lg static">
      <div className="flex justify-between items-center py-[30px] z-10 desktop:mx-[200px] laptop:mx-[120px] tablet:mx-[80px] phone:mx-[30px]">
        <div>
          <h1
            className="desktop:text-4xl laptop:text-3xl tablet:text-2xl phone:text-xl font-bold text-[#183D3D]"
            style={{ fontFamily: "Croissant One" }}
          >
            Islamic Corner
          </h1>
        </div>
        <div className="text-lg font-medium w-[540px] hidden desktop:block laptop:hidden">
          <ul className="flex md:hidden justify-between items-center">
            <li
              className={`${
                activeLink === "/" ? "bg-[#183D3D] text-gray-200" : ""
              } text-slate-700 py-1 px-4 rounded`}
            >
              <Link to={"/"} onClick={handleLinkClick}>
                Home
              </Link>
            </li>
            <li
              className={`${
                activeLink === "/products" ? "bg-[#183D3D] text-gray-200" : ""
              } text-slate-700 py-1 px-4 rounded`}
            >
              <Link to={"/products"} onClick={handleLinkClick}>
                Products
              </Link>
            </li>
            <li
              className={`${
                activeLink === "/deals" ? "bg-[#183D3D] text-gray-200" : ""
              } text-slate-700 py-1 px-4 rounded`}
            >
              <Link to={"/deals"} onClick={handleLinkClick}>
                Deals
              </Link>
            </li>
            <li
              className={`${
                activeLink === "/orders" ? "bg-[#183D3D] text-gray-200" : ""
              } text-slate-700 py-1 px-4 rounded`}
            >
              <Link to={"/orders"} onClick={handleLinkClick}>
                Orders
              </Link>
            </li>
            <li className="border-2 border-[#183D3D] text-slate-700 py-1 px-4 rounded hover:rounded-full hover:bg-[#183D3D] hover:text-slate-200">
              <Link to={"/login"}>Login</Link>
            </li>
          </ul>
        </div>

        <div className="desktop:hidden laptop:block">
          <button onClick={handleToggle} className="text-xl">
            {menu ? (
              <FontAwesomeIcon icon={faXmark} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </button>

          {menu && (
            <div className="text-lg font-medium absolute top-20 left-0 h-full">
              <ul className="text-center shadow-xl bg-transparent rounded-e-3xl px-16 py-20 h-full">
                <li
                  className={`${
                    activeLink === "/" ? "bg-[#183D3D] text-slate-300" : ""
                  } text-slate-700 py-1 px-4 rounded my-4`}
                >
                  <Link to={"/"} onClick={handleLinkClick}>
                    Home
                  </Link>
                </li>
                <li
                  className={`${
                    activeLink === "/products"
                      ? "bg-[#183D3D] text-slate-300"
                      : ""
                  } text-slate-700 py-1 px-4 rounded my-4`}
                >
                  <Link to={"/products"} onClick={handleLinkClick}>
                    Products
                  </Link>
                </li>
                <li
                  className={`${
                    activeLink === "/deals" ? "bg-[#183D3D] text-slate-300" : ""
                  } text-slate-700 py-1 px-4 rounded my-4`}
                >
                  <Link to={"/deals"} onClick={handleLinkClick}>
                    Deals
                  </Link>
                </li>
                <li
                  className={`${
                    activeLink === "/orders"
                      ? "bg-[#183D3D] text-slate-300"
                      : ""
                  } text-slate-700 py-1 px-4 rounded my-4`}
                >
                  <Link to={"/orders"} onClick={handleLinkClick}>
                    Orders
                  </Link>
                </li>
                <li className="border-2 border-[#183D3D] text-slate-700 py-1 px-4 rounded hover:rounded-full hover:bg-[#183D3D] hover:text-slate-200">
                  <Link to={"/login"}>Login</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
