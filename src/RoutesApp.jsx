import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./views";
import { Movements } from "./views/Movements";

export const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Movimientos/:username" element={<Movements />} />
    </Routes>
  );
};
