//import logo from './logo.svg';
import "./App.css";
import {Route, HashRouter, Routes } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Users from "./components/users/users";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
      <HashRouter>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        </Routes>
      </HashRouter>

  );
}

export default App;
