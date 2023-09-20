import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import Products from "./Components/Products/Products/Products";
import Deals from "./Components/Deals/Deals/Deals";
import Orders from "./Components/Orders/Orders/Orders";
import Login from "./Components/Registration/Login/Login";
import Error from "./Components/Shared/Error/Error";
import Books from "./Components/Products/Books/Books";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/books" element={<Books />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
