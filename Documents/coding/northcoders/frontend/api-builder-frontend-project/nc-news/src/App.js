import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import SubNav from "./Components/SubNav";
import Articles from "./Components/Articles";
import Article from "./Components/Article";
import { useState, useContext } from "react";
import { UserContext } from "./Contexts/userContext";
import Login from "./Components/Login";
import RequireLogin from "./Components/RequireLogin";

function App() {
  const { user, setUser, isLoggedIn, logOut } = useContext(UserContext);
  const [query, setQuery] = useState("");
  // const [user, setUser] = useState({}); //getRid & prop drilling

  return (
    <BrowserRouter>
      <div className="App">
        <Header setQuery={setQuery} />
        <NavBar setQuery={setQuery} />
        <RequireLogin>
          {isLoggedIn ? (
            <div>
              <SubNav />
              <Routes>
                <Route path="/" element={<Articles query={query} />}></Route>
                <Route
                  path="/articles"
                  element={<Articles query={query} />}
                ></Route>
                <Route
                  path="/articles/:article_id"
                  element={<Article query={query} />}
                ></Route>
                <Route path="/login" element={<Login />} />
              </Routes>
            </div>
          ) : (
            <></>
          )}
        </RequireLogin>
      </div>
    </BrowserRouter>
  );
}

export default App;
