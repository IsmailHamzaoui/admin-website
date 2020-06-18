import React from 'react';
import style from './App.module.css';
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";



function App() {
  return (
    <div className={style.App}>
      <Home />
      <Sidebar />
      <Navbar text="Barrowed Books"/>
    </div>
  );
}

export default App;
