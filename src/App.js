import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./components/home";
import { NavBar } from "./components/navbar";
import Datos2017 from "./components/añosPaginas/datos2017";
import Datos2018 from "./components/añosPaginas/Datos2018";
import Datos2019 from "./components/añosPaginas/Datos2019";
import Datos2020 from "./components/añosPaginas/Datos2020";

function App() {
  return (
    <div className="App">
      <div >
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Datos2017" element={<Datos2017 />} />
            <Route path="Datos2018" element={<Datos2018 />} />
            <Route path="Datos2019" element={<Datos2019 />} />
            <Route path="Datos2020" element={<Datos2020 />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
