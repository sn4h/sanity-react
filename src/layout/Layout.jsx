import React from "react";
import {Outlet} from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

import '../index.css'

function Layout() {
  return (
    <>
      <Header/>
      <main className="Main">
        <Outlet/>
      </main>
      <Footer/>
    </>
  )
}

export default Layout