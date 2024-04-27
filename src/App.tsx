import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Title from "./components/Title/Title";
import Subtitle from "./components/Subtitle/Subtitle";
import Collection from "./components/Collection/Collection";
import SizeChart from "./components/SizeChart/SizeChart";
import ContactUs from "./components/ContactUs/ContactUs";

function App() {
  return (
    <div className="w-full">
      <NavBar/>
      <Home/>
      <Title title={"Shop"} children={<Subtitle text={"Browse featured collections"}/>}/>
      <Collection/>
      <Title title={"Size Chart"} children={<Subtitle text={"Guide for choosing your sizes"}/>}/>
      <SizeChart/>
      <Title title={"Contact Us"} children={undefined}/>
      <ContactUs/>
    </div>
  );
}

export default App;
