import React from "react";
import ContentList from "../screens/ContentList";
import ContentListVideo from "../screens/ContentListVideo";
import MenuNabar from "../screens/MenuNabar";
import RegistrationChannel from "../screens/RegistrationChannel";
import "./sass/Homes.css";
const Homes = () => {
  return (
    <>
      <div className="header ">
        <div className="container">
          <div className="header1">
            <i class="fa-solid fa-bars menu_icon"></i>
            <div className="youtobe">
              <i class="fa-brands fa-youtube youtobe_icon"></i>
              <div className="youtobe_text">YouTobe</div>
            </div>
          </div>
          <div className="header2">
            <div className="header2_input">
              <input placeholder="tim kiem" className="input" />
            </div>
            <div className="keybard">
              <i class="fa-solid fa-keyboard"></i>
            </div>
            <div className="search">
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="mic">
              <i class="fa-solid fa-microphone"></i>
            </div>
          </div>
          <div className="header3">
            <div className="camera buttom-icon">
              <i class="fa-solid fa-video"></i>
            </div>
            <div className="solid buttom-icon">
              <i class="fa-solid fa-face-grin-hearts"></i>
            </div>
            <div className="bell buttom-icon">
              <i class="fa-solid fa-bell"></i>
            </div>
            <div className="avatar buttom-icon">
              <i class="fa-solid fa-circle-user"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="grid__row">
          <div className="grid_column-2">
           <MenuNabar/>           
           <RegistrationChannel/>
          </div>
          <div className="grid_column_10">
           <ContentList/>
           <ContentListVideo/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homes;
