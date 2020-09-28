import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Rajeshwari/september/GWbanners/DesktopHero_1500x600._CB403958842_.jpg"
          className="home__image"
          alt="HomeImage"
        />

        <div className="home__row">
          <Product
            id="1"
            title="All new Fire TV Stick"
            price={29.99}
            rating={3}
            image="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonDevices/LEEN/DC-Cards/02_379x304_Desktop_Card_SP._SY304_CB404302689_.jpg"
          />
          <Product
            id="2"
            title="Alexa Assistant"
            price={29.99}
            rating={4}
            image="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonDevices/LEEN/DC-Cards/379x304_Desktop_Card_BE_01._SY304_CB404301999_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="New Echo Dot With Click"
            price={29.99}
            rating={4}
            image="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonDevices/LEEN/DC-Cards/06_379x304_Desktop_Card_GE._SY304_CB404302721_.jpg"
          />
          <Product
            id="4"
            title="The Second Product"
            price={29.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
          />
          <Product
            id="6"
            title="Samsung Galaxy S10 Plus"
            price={29.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="5"
            title="The new Samsung Monitor"
            price={29.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61ZXTZMycXL._SL1000_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
