import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Detail from "./components/Detail";
import Form from "./components/Form";

function App() {
  return (
   
    <div className="App">
      <Routes>
      <Route exact path="/" component={LandingPage} />
      <Route path="/home" component={NavBar} />
      <Route exact path="/home" component={Home} />
      <Route path="/Detail/:id" component={Detail} />
      <Route path="/create" component={Form} />
      </Routes>
    </div>
 
  );
}

export default App;