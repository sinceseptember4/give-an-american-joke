import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Jokes from './jokes.json';
import Home from "./ component/home";
import Api from "./ component/api";
import Random from "./ component/random";
function App() {
const jokes =JSON.parse(JSON.stringify(Jokes.jokes));
const jokesLength= jokes.length;
let randnum = Math.floor( Math.random() * jokesLength );
console.log(jokes[randnum].joke);
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
