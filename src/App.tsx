import React from "react";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Continents from "./pages/Continents";
import Countries from "./pages/Countries";
import CountryDetail from "./pages/CountryDetail";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/continents">continents</Link>
          </li>
          <li>
            <Link to="/countries">countries</Link>
          </li>
          <li>
            <Link to="/detail">detail</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/continents" element={<Continents />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/detail" element={<CountryDetail />} />
      </Routes>
    </>
  );
}

export default App;
