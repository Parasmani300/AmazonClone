import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";
import { AnimatedList } from "react-animated-list";

const MapProduct = ({ basket }) => (
  <AnimatedList animation="fade">
    {basket.map((item) => {
      return (
        <CheckoutProduct
          key={item.id}
          id={item.id}
          image={item.image}
          title={item.title}
          price={item.price}
          rating={item.rating}
        />
      );
    })}
  </AnimatedList>
);

export default function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="ad"
        />
        <div>
          <p>Hello, {user?.email}</p>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          <MapProduct basket={basket} />
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}
