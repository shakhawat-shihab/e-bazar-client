"use client";

import CartItem from "@/components/CartItem";
import useCartHook from "@/hooks/useCartHook";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import "./index.scss";
import { axiosInstanceToken } from "@/utils/axiosCreate";

type Props = {};

const Cart = (props: Props) => {
  const { viewCart, cart } = useCartHook();
  const { auth } = useSelector((state: any) => state);

  useEffect(() => {
    if (auth?.userData?.userId) viewCart(auth?.userData?.userId);
  }, [auth?.userData?.userId]);

  console.log("cart  ", cart);

  const checkOutCart = async () => {
    console.log("checkout ", auth?.userData?.userId);
    if (auth?.userData?.userId) {
      let data = await axiosInstanceToken.post("/payment/ssl-init", {
        userId: auth?.userData?.userId,
      });
      console.log("ssl data ", data);

      window.location.replace(data?.data);
    }
  };

  return (
    <div>
      <div className="container">
        <div className=" cart-container">
          <h1 className="cart-title">Cart</h1>
          <hr />
          {!cart || cart?.productList?.length == 0 ? (
            <div className="cart-empty-message">
              <h3>There is no item</h3>
            </div>
          ) : (
            <div className="cart-item-container">
              <div className="product-row-header">
                <h1>Title</h1>
                <h1>Unit Price</h1>
                <h1>Quantity</h1>
                <h1>Total</h1>
              </div>
              {cart?.productList?.map((x: any) => (
                <CartItem props={x} key={x?._id} />
              ))}
              <div className="tota-price">
                <h3>
                  Total Amount{" "}
                  <span style={{ color: "green" }}> {cart?.total}</span> (BDT)
                </h3>
              </div>

              <div className="checkout-button-container">
                <button
                  onClick={() => checkOutCart()}
                  // disabled={isLoadingCheckout ? true : false}
                >
                  Check Out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
