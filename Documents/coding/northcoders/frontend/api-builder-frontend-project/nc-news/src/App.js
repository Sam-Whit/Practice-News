import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import SubNav from "./Components/SubNav";
import Articles from "./Components/Articles";

function App() {
  return (
    <BrowserRouter>
      <div className="App"></div>
      <Header />
      <NavBar />
      <SubNav />
      <Routes>
        <Route path="/" element={<Articles />}></Route>
      </Routes>
      <Routes path="/articles" element={<Articles />}></Routes>
      <Routes path="/articles/:topic" element={<Articles />}></Routes>
    </BrowserRouter>
  );
}

export default App;
