import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import SubNav from "./Components/SubNav";
import Articles from "./Components/Articles";
import Article from "./Components/Article";
import { useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  return (
    <BrowserRouter>
      <div className="App"></div>
      <Header setQuery={setQuery} />
      <NavBar setQuery={setQuery} />
      <SubNav />
      <Routes>
        <Route path="/" element={<Articles query={query} />}></Route>
        <Route path="/articles" element={<Articles query={query} />}></Route>
        <Route
          path="/articles/:article_id"
          element={<Article query={query} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
