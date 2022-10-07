import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./screens/Login";
import Register from "./screens/Register";
import DashBoard from "./components/DashBoard";
import Home from "./screens/Home";
import Category from "./screens/Category"
import About from "./screens/About"
import Bungalow from "./screens/Bungalow";
import SelfContain from "./screens/SelfContain";
import Singleroom from "./screens/Singleroom";
import Compoundhouse from "./screens/Compoundhouse";
import AddHouse from "./components/AddHouse"
function App() {
  return (
    <div>
    

      <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<DashBoard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/category" element={<Category />} />
        <Route path="/about" element={<About />} />
        <Route path="/bungalow" element={<Bungalow />} />
        <Route path="/selfcontain" element={<SelfContain />} />
        <Route path="/singleroom" element={<Singleroom />} />
        <Route path="/compoundhouse" element={<Compoundhouse />} />
        <Route path="/addhouse" element={<AddHouse />} />
     
      </Routes>
    </div>
  );
}

export default App;
