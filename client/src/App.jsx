//--------------- General --------------
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

//--------------- Components -----------
import NavBarr from "./components/NavBarr";

//--------------- Pages ----------------
import Home from "./pages/Home";
import Info from "./pages/Info";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <>
      <NavBarr darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <Routes>
        <Route path="/" element={<Home darkMode={darkMode}/>} />
        <Route path="info/:id" element={<Info darkMode={darkMode}/>} />
      </Routes>
    </>
  );
}

export default App;
