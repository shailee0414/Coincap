import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAssets } from "../redux/Actions";
import Header from "./Header";
import Navbars from "./Navbar"
import Currency from "./Currency";
import Footer from "./Footer";
import "./Navbar.css"

const App = () => {
  const assetsData = useSelector(
    (_) => _?.assetsData?.assets?.assetsData ?? []
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAssets());
  }, [dispatch]);

  return (
    <>
      <Navbars />
      <Header />
      <Currency data={assetsData} />
      <Footer />
    </>
  );
};
export default App;
