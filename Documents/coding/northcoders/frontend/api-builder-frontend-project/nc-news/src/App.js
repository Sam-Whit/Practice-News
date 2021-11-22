import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import SubNav from "./Components/SubNav";
import Home from "./Components/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App"></div>
      <Header />
      <NavBar />
      <SubNav />
      <Routes>{/* <Route path="/" element={<Home />}></Route> */}</Routes>
    </BrowserRouter>
  );
}

export default App;
