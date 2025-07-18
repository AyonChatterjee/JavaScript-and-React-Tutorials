import React from "react";
import Goal from "./ConditionRendering";
import Garage from "./ReactList";
import Myform from "./Forms";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import NoPage from "./Pages/NoPage";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Goal isGoal={true} />
        <Garage />
        <Myform />
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
