import React, { useState } from "react";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";
import { getBasketTotal } from "./reducer";
import { db } from "./firebase";
import { useHistory } from "react-router-dom";

function Payment() {
  const history = useHistory();
  const [{ basket, user }, dispatch] = useStateValue();
  const [cod, setCod] = useState(false);
  const [succeded, setSucceded] = useState("");
  const [processing, setProcessing] = useState(false);

  const detectValue = (e) => {
    setCod(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    console.log(new Date());

    try {
      const res = await db
        .collection("users")
        .doc(user?.uid)
        .collection("orders")
        .add({
          basket: basket,
          created: new Date().toString(),
          amount: getBasketTotal(basket),
        });

      dispatch({
        type: "EMPTY_BASKET",
      });

      history.replace("/orders");
    } catch {
      alert("Sorry!! Something went wrong, could you please try again later");
    }

    setProcessing(false);
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout(<Link to="/checkout">{basket?.length} items</Link>)
        </h1>

        {/* Payment Section :   Delivery Address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Adress</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Loas ANgleles, CA</p>
          </div>
        </div>

        {/* Payment Section : Review item */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Items and Delivery</h3>
          </div>
          <div className="payment__items">
            {/* Products in the basket */}
            {basket.map((item) => {
              return (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              );
            })}
          </div>
        </div>
        {/* Payment Section: Payment Option */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <div>
              <h4>Amount: ${getBasketTotal(basket)}</h4>
              <form onSubmit={handleSubmit}>
                <input
                  type="checkbox"
                  name="checkbox"
                  onChange={detectValue}
                  defaultChecked={cod}
                />
                <label htmlFor="checkbox"> Cash On Delivery </label>
                <button disabled={!cod || processing || succeded}>
                  {processing ? "Processing..." : "Order Now"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
