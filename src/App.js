import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./components/home";
import { NavBar } from "./components/navbar";
import A0 from "./components/A0";
import A3 from "./components/A3";
import A6 from "./components/A6";
import A9 from "./components/A9";
import A10 from "./components/A10";
import A13 from "./components/A13";
import A14 from "./components/A14";
import A17 from "./components/A17";
import A18 from "./components/A18";
import A19 from "./components/A19";
import A20 from "./components/A20";
import A22 from "./components/A22";
import A23 from "./components/A23";
import A24 from "./components/A24";
import A25 from "./components/A25";
import A30 from "./components/A30";
import A31 from "./components/A31";
import A32 from "./components/A32";
import A33 from "./components/A33";
import A34 from "./components/A34";
import A36 from "./components/A36";
import A37 from "./components/A37";
import A38 from "./components/A38";
import A39 from "./components/A39";
import A40 from "./components/A40";
import A41 from "./components/A41";
import A44 from "./components/A44";
import A47 from "./components/A47";
import A49 from "./components/A49";
import A53 from "./components/A53";
import A55 from "./components/A55";
import A58 from "./components/A58";
import A59 from "./components/A59";
import A60 from "./components/A60";
import A63 from "./components/A63";
import A66 from "./components/A66";
import A67 from "./components/A67";
import A68 from "./components/A68";
import A69 from "./components/A69";
import A70 from "./components/A70";
import A73 from "./components/A73";
import A74 from "./components/A74";
import A77 from "./components/A77";
import A80 from "./components/A80";
import A81 from "./components/A81";
import A82 from "./components/A82";
import A83 from "./components/A83";
import A85 from "./components/A85";
import A91 from "./components/A91";
import A93 from "./components/A93";
import A95 from "./components/A95";
import A96 from "./components/A96";
import A97 from "./components/A97";
import A100 from "./components/A100";
import A101 from "./components/A101";
import A102 from "./components/A102";
import A104 from "./components/A104";
import A105 from "./components/A105";
import A107 from "./components/A107";
import A109 from "./components/A109";
import A112 from "./components/A112";
import A113 from "./components/A113";
import A114 from "./components/A114";
import A115 from "./components/A115";

function App() {
  return (
    <div className="App">
      <div >
        <BrowserRouter>
          <NavBar />
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="A0" element={<A0 />} />
            <Route path="A3" element={<A3 />} />
            <Route path="A6" element={<A6 />} />
            <Route path="A9" element={<A9 />} />
            <Route path="A10" element={<A10 />} />
            <Route path="A13" element={<A13 />} />
            <Route path="A14" element={<A14 />} />
            <Route path="A17" element={<A17 />} />
            <Route path="A18" element={<A18 />} />
            <Route path="A19" element={<A19 />} />
            <Route path="A20" element={<A20 />} />
            <Route path="A22" element={<A22 />} />
            <Route path="A23" element={<A23 />} />
            <Route path="A24" element={<A24 />} />
            <Route path="A25" element={<A25 />} />
            <Route path="A30" element={<A30 />} />
            <Route path="A31" element={<A31 />} />
            <Route path="A32" element={<A32 />} />
            <Route path="A33" element={<A33 />} />
            <Route path="A34" element={<A34 />} />
            <Route path="A36" element={<A36 />} />
            <Route path="A37" element={<A37 />} />
            <Route path="A38" element={<A38 />} />
            <Route path="A39" element={<A39 />} />
            <Route path="A40" element={<A40 />} />
            <Route path="A41" element={<A41 />} />
            <Route path="A44" element={<A44 />} />
            <Route path="A47" element={<A47 />} />
            <Route path="A49" element={<A49 />} />
            <Route path="A53" element={<A53 />} />
            <Route path="A55" element={<A55 />} />
            <Route path="A58" element={<A58 />} />
            <Route path="A59" element={<A59 />} />
            <Route path="A60" element={<A60 />} />
            <Route path="A63" element={<A63 />} />
            <Route path="A66" element={<A66 />} />
            <Route path="A67" element={<A67 />} />
            <Route path="A68" element={<A68 />} />
            <Route path="A69" element={<A69 />} />
            <Route path="A70" element={<A70 />} />
            <Route path="A73" element={<A73 />} />
            <Route path="A74" element={<A74 />} />
            <Route path="A77" element={<A77 />} />
            <Route path="A80" element={<A80 />} />
            <Route path="A81" element={<A81 />} />
            <Route path="A82" element={<A82 />} />
            <Route path="A83" element={<A83 />} />
            <Route path="A85" element={<A85 />} />
            <Route path="A91" element={<A91 />} />
            <Route path="A93" element={<A93 />} />
            <Route path="A95" element={<A95 />} />
            <Route path="A96" element={<A96 />} />
            <Route path="A97" element={<A97 />} />
            <Route path="A100" element={<A100 />} />
            <Route path="A101" element={<A101 />} />
            <Route path="A102" element={<A102 />} />
            <Route path="A104" element={<A104 />} />
            <Route path="A105" element={<A105 />} />
            <Route path="A107" element={<A107 />} />
            <Route path="A109" element={<A109 />} />
            <Route path="A112" element={<A112 />} />
            <Route path="A113" element={<A113 />} />
            <Route path="A114" element={<A114 />} />
            <Route path="A115" element={<A115 />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
