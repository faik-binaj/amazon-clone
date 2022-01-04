import React from "react";

import Product from './Product'
import "./Home.css";

const Home = () => {
  return (
    <div className={"home"}>
      <img
        className={"home__image"}
        src={
          "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        }
        alt={""}
      />

        <div className={"home__row"}>
            <Product
                id={"12345"}
                title={"The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"}
                price={11.25}
                rating={5}
                image={"https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"}
            />
            <Product
                id={"12345"}
                title={"Zero to One: Notes on Startups, or How to Build the Future"}
                price={7.85}
                rating={4}
                image={"https://images-na.ssl-images-amazon.com/images/I/4137OkbPQ4L._SX331_BO1,204,203,200_.jpg"}
            />
        </div>
        <div className={"home__row"}>
            <Product
                id={"12345"}
                title={"Xbox Series S"}
                price={315.47}
                rating={5}
                image={"https://m.media-amazon.com/images/I/71NBQ2a52CL._SL1500_.jpg"}
            />
            <Product
                id={"12345"}
                title={"PlayStation DualSense Wireless Controller – Midnight Black"}
                price={70.00}
                rating={5}
                image={"https://m.media-amazon.com/images/I/61O9tWR6WDS._SL1475_.jpg"}
            />
            <Product
                id={"12345"}
                title={"Redragon S101 Wired RGB Backlit Gaming Keyboard and Mouse, Gaming Mouse Pad, Gaming Headset Combo"}
                price={11.25}
                rating={4}
                image={"https://m.media-amazon.com/images/I/71EMEQKULsL._AC_SL1500_.jpg"}
            />
        </div>
        <div className={"home__row"}>
            <Product
                id={"12345"}
                title={"VIZIO 55-Inch V-Series 4K UHD LED HDR Smart TV with Apple AirPlay and Chromecast Built-in, Dolby Vision, HDR10+, HDMI 2.1, Auto Game Mode and Low Latency Gaming, V555-J01, 2021 Model"}
                price={1125.25}
                rating={5}
                image={"https://m.media-amazon.com/images/I/81gi1C0GM7L._AC_SL1500_.jpg"}
            />

        </div>

    </div>
  );
};

export default Home;
