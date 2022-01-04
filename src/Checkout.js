import React from "react";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

const Checkout = () => {
  const [{ basket }] = useStateValue();

  return (
    <div className={"checkout"}>
      <div className={"checkout__left"}>
        <img
          className={"checkout__ad"}
          src={
            "https://images-na.ssl-images-amazon.com/images/I/7191qk-xnFL.jpg"
          }
          alt={""}
        />
        {basket?.length === 0 ? (
          <div>
            <h2>Your Shopping Basket is empty</h2>
            <p>
              You have no items in your basket. To buy one or m items, click
              "Add to Basket" next to the item!
            </p>
          </div>
        ) : (
          <div>
            <h2 className={"checkout__title"}>Your Shopping Bask</h2>

            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
        {basket.length > 0 && (
            <div className={"checkout__left"}>
                <Subtotal />
            </div>
        )}
    </div>
  );
};

export default Checkout;
