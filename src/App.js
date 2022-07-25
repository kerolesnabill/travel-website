import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/commen/NavBar";
import Home from "./components/pages/Home";
import Tours from "./components/pages/Tours";
import About from "./components/pages/About";
import Error from "./components/pages/Error";
import Footer from "./components/commen/Footer";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
