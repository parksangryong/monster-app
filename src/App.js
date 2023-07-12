import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Digilist from "./components/Digilist";
import Poketlist from "./components/Poketlist";
import Home from "./components/Home";
import DigimonInfo from "./components/DigimonInfo";
import PoketInfo from "./components/PoketInfo";

function App() {
  return (
    <div id="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/digimon" element={<Digilist />} />
          <Route path="/digimon/info/*" element={<DigimonInfo />} />
          <Route path="/poketmon" element={<Poketlist />} />
          <Route path="/poketmon/info/*" element={<PoketInfo />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
