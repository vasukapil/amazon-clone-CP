import React from "react";
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
    <div className="Header">
      <img
        className="Header__logo"
        src="./Images/Amazon-Logo.png"
        alt="amazon logo"
      />

      <div className="Header__search">
        <input
          className="Header__search--input"
          type="text"
          placeholder="Search for products, brands and more"
        />
        <SearchIcon className="Header__searchIcon" />
      </div>

      <div className="Header__nav">
        <div className="Header__options">
          <span className="Header__optionsLineOne">Hello Guest</span>
          <span className="Header__optionsLineTwo">Sign In</span>
        </div>
        <div className="Header__options">
          <span className="Header__optionsLineOne">Returns</span>
          <span className="Header__optionsLineTwo">&amp; Orders</span>
        </div>
        <div className="Header__options">
          <span className="Header__optionsLineOne">Your</span>
          <span className="Header__optionsLineTwo">Prime</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
