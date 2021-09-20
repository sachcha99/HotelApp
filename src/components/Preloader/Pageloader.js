import React, { Component } from "react";
import "./Preloader.css";
import  image  from "../Images/logonew.png";
import Header from "../header/Header";

class Pageloader extends Component {
    pageloader() {
    let preload = document.querySelector(".pageloader");
    setTimeout(() => {
      preload.style.opacity = "0";
      setTimeout(() => {
        preload.style.display = "none";
      }, 1000);
    }, 1000);
  }

  componentDidMount() {
    this.pageloader();
  }

  render() {
    return (
      <div>
      <div className="pageloader">
          
      <Header/>
        <div class="spinner_wrap_pageLoader">
          <div class="spinner" >  <img className="pageloaderPic" src={image} /> </div>
          {/* <div className="pageloadeTxt" data-textPageloader=" Loading..."> Loading...</div> */}
        </div>
      </div>

      </div>
    );
  }
}

export default Pageloader;
