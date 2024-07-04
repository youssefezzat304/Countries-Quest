//--------------- General --------------
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

//--------------- Components -----------
import NavBar from "./components/NavBar";

//--------------- Pages ----------------
import Home from "./pages/Home";
import Info from "./pages/Info";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </>
  );
}

export default App;
