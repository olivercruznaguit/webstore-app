import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Title from "./components/Title/Title";
import Subtitle from "./components/Subtitle/Subtitle";
import Collection from "./components/Collection/Collection";

function App() {
  return (
    <div className="w-full">
      <NavBar/>
      <Home/>
      <Title title={"Shop"} children={<Subtitle text={"Browse featured collections"}/>}/>
      <Collection/>
    </div>
  );
}

export default App;
