
import React from "react";
import "./banner.scss";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import Navbarss from "../header/Navbar";

const Banner = () => {
  return (
    <>
    
      <section className="main-banner ">
       
      <video autoPlay loop muted className="bg-video">
        <source src="\assets\bannervideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <di className="custum-container">

       <div className="mainbannerchld">
        <div className="cntmainbanner">
<h1>Quantum Proof Security Platform</h1>
<p>Resistant to both current threats and the quantum future.</p>
        </div>
        <div className="buttonmainbanner">
        <button className="buttonnav">Launch Bot <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
              <g clip-path="url(#clip0_189_99)">
                <path d="M10.6338 5L13 7.33333L10.6338 9.66667" stroke="white" stroke-linecap="square" />
                <path d="M1 7.33333H12.1549" stroke="white" stroke-linecap="square" />
              </g>
              <defs>
                <clipPath id="clip0_189_99">
                  <rect width="14" height="14" fill="white" />
                </clipPath>
              </defs>
            </svg></button>
            <button className="buttonbannersec"> Explore Tools </button>
        </div>
       </div>
      </di>
      </section>
    </>
  );
};

export default Banner;
