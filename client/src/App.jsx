import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Services from "./components/Services";
import Textchat from "./components/Textchat";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path="/service" element={<Services />}></Route>
        <Route path="/textchat" element={<Textchat />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
