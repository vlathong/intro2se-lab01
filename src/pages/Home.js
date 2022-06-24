import React from 'react'
import { Link } from "react-router-dom";
import BannerImage from "../assets/banner2.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Sơn Tùng MTP </h1>
        <p> Hit hot nhất năm 2022 </p>
        <Link to="/menu">
          <button> Trải nghiệm </button>
        </Link>
      </div>
    </div>
  );
}

export default Home