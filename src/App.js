import React from "react";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
