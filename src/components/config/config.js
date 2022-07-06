import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodoList from "../TodoTask/TodoList";
import ProductTask from "../products/ProductsTask";
import Header from "../header/Header";
import Home from "../home/Home";

function Config() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<ProductTask />}></Route>
          <Route path="/task_2" element={<TodoList />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
export default Config;
