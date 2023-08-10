import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./components/home";
import Test from "./components/test";
import { NavBar } from "./components/navbar";

function App() {
  return (
    <div className="App">
      <div >
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="test" element={<Test />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
