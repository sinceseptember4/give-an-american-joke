import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./component/home";
import {Api} from "./component/api";
import Random from "./component/random";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/api/`} element={<Api />} />
        <Route path={`/api/ramdom`} element={<Random />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
