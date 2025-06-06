import { useState, useEffect } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "../App.css";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Settings from "../pages/Settings";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";

function RouteApp() {
  return (
    <>
      <BrowserRouter>
        <h1>Demo Route</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RouteApp;
