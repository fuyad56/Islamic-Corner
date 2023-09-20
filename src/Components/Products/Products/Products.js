import React from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <Navbar />
      <div className="text-center text-3xl">
        <Link to={"/products/books/:id"} >Books</Link>
      </div>
    </div>
  );
};

export default Products;
