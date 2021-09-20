import React, { Component } from "react";
import "./Preloader.css";
import  image  from "../Images/logonew.png";

class Preloader extends Component {
  preloader() {
    let preload = document.querySelector(".preloader");
    setTimeout(() => {
      preload.style.opacity = "0";
      setTimeout(() => {
        preload.style.display = "none";
      }, 1000);
    }, 4800);
  }

  componentDidMount() {
    this.preloader();
  }

  render() {
    return (
      <div className="preloader">
        <div class="spinner_wrap">
          <div class="spinner" >  <img className="PreLoaderPic" src={image} /> </div>
          <div className="preloadTxt" data-text=" Lemon Tree Hotel"> Lemon Tree Hotel</div>
        </div>
      </div>
    );
  }
}

export default Preloader;
