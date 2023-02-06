import React from "react";
import banner from "../assets/banneryeni.jpg";
import { Link } from "react-router-dom";
import css from '../styles/Home.css'
function Home() {
  return (
    <div
      className="mainpage"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="order">
        <Link to="/menu">Go to menu</Link>
      </div>
    </div>
  );
}

export default Home;
