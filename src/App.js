//import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Route, HashRouter } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Users from "./components/users/users";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <Router>      
      <Navbar/>
      <HashRouter>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
      </HashRouter>
    </Router>
  );
}

export default App;
