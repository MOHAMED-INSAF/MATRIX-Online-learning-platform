import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Study from "./Pages/Study/Study";
import Community from "./Pages/Community/Community";
import Store from "./Pages/Store/Store";
import LoginSignup from "./Pages/LoginSignup/LoginSignup";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/study" element={<Study />} />
          <Route path="/community" element={<Community />} />
          <Route path="/store" element={<Store />} />
          <Route path="/loginsignup" element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
