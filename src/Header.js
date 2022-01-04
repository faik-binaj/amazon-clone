import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

const Header = (props) => {
  return (
    <nav className={"header"}>
      <Link to={"/"}>
        <img
          className={"header__logo"}
          src={
            "https://www.seekpng.com/png/full/18-181177_amazon-logo-png-magnetic-rinse-cup-with-toothbrush.png"
          }
          alt={""}
        />
      </Link>

      <div className={"header__search"}>
        <input type={"text"} className={"header__searchInput"} />
        <SearchIcon className={"header__searchIcon"} />
      </div>

      <div className={"header__nav"}>
        <Link to={"/login"} className={"header__link"}>
          <div className={"header__option"}>
            <span className={"header__optionLineOne"}>Hello Qazi</span>
            <span className={"header__optionLineTwo"}>Sign in</span>
          </div>
        </Link>

        <Link to={"/login"} className={"header__link"}>
          <div className={"header__option"}>
            <span className={"header__optionLineOne"}>Return</span>
            <span className={"header__optionLineTwo"}>& Order</span>
          </div>
        </Link>

        <Link to={"/login"} className={"header__link"}>
          <div className={"header__option"}>
            <span className={"header__optionLineOne"}>Your</span>
            <span className={"header__optionLineTwo"}>Prime</span>
          </div>
        </Link>

        <Link to={"/checkout"} className={"header__link"}>
          <div className={"header__optionBasket"}>
            <ShoppingBasketIcon />
            <span className={"header__optionLineTwo header__basketCount"}>
              0
            </span>
          </div>
        </Link>
      </div>

      {/* Basket icon with number*/}
    </nav>
  );
};

export default Header;
