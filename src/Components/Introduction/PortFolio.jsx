import React from "react";
import "./PortFolio.css";
import img1 from "../../Assets/login.jpg";
import img2 from "../../Assets/TextUtils.png";
import img3 from "../../Assets/login.jpg";




function PortFolio(props) {
  return (
    <div id="portfolio" data-theme={props.mode}>
      <div className="container">
        <h1 className="p-title">Portfolio</h1>
        <div className="Project-list">
          <div className="p-item">
            <img src={img1} alt="" />
            <div className="p-layer">
              <h3 className="p-layer-title">Login Page</h3>
              <p className="p-layer-desc">
                The toggle theme login page in React.js seamlessly alternates
                between light and dark themes, ensuring a visually comfortable
                user experience through smooth transitions.
              </p>
              <a href="https://nadiarajpoot.github.io/Toggle-Theme-Login-page/">
                <i class="fa-solid fa-up-right-from-square"></i>
              </a>
            </div>
          </div>
          <div className="p-item">
            <img src={img2} alt="" />
            <div className="p-layer">
              <h3 className="p-layer-title">TextUtils</h3>
              <p className="p-layer-desc">
                A user-friendly React web app with Create React App and
                Bootstrap, offering efficient text manipulation tools like case
                conversion, space removal, clipboard copying, and word/character
                counting. Streamlining essential tasks for a seamless and
                intuitive experience.
              </p>
              <a href="https://nadiarajpoot.github.io/TextUtils/">
                <i class="fa-solid fa-up-right-from-square"></i>
              </a>
            </div>
          </div>
          <div className="p-item">
            <img src={img3} alt="" />
            <div className="p-layer">
              <h3 className="p-layer-title">Login Page</h3>
              <p className="p-layer-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis.
              </p>
              <a href="#">
                <i class="fa-solid fa-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </div>
        <a href="#" className="btn">
          See more
        </a>
      </div>
    </div>
  );
}

export default PortFolio;
