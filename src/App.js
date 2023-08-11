import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./components/home";
import { NavBar } from "./components/navbar";

function App() {
  return (
    <div className="App">
      <div >
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
