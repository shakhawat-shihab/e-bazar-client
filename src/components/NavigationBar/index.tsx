"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import "./index.scss";
import logo from "../../../public/assets/images/logo.png";
import Button from "../Button";
import { FaShoppingCart } from "react-icons/fa";
import NavigationBarPopup from "../NavigationBarPopup";
import { BiCategory } from "react-icons/bi";
import { useSelector } from "react-redux";
import useCartHook from "@/hooks/useCartHook";

type Props = {};

export default function NavigationBar({}: Props) {
  const [show, setShow] = useState(false);
  const { viewCart } = useCartHook();

  const { auth, cart } = useSelector((state: any) => state);
  // console.log("cart from navbar ", cart);

  useEffect(() => {
    if (auth?.userData?.userId) viewCart(auth?.userData?.userId);
  }, [auth?.userData?.userId]);

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <Link href="#">
          <Image
            src={logo.src}
            alt="logo of organization"
            width={150}
            height={80}
            className="navbar__logo__image"
          />
        </Link>
      </div>

      <div className="navbar__link-wrapper">
        <Link href="/" className="navbar__link">
          Home
        </Link>
        <Link href="#" className="navbar__link">
          Products
        </Link>
        <Link href="#" className="navbar__link">
          About
        </Link>
        <Link href="#" className="navbar__link">
          Contact Us
        </Link>
      </div>

      <div className="navbar__button-wrapper">
        <Link href="/cart" style={{ marginRight: "30px" }}>
          <Button
            size="small"
            className="navbar__button text-midnight-blue bg-inherit"
          >
            <div className="navbar__button__cart-icon-wrapper">
              <FaShoppingCart size={34} />
              <div className="navbar__button__cart-length">1</div>
            </div>
            {/* <FaShoppingCart size={30} /> */}
          </Button>
        </Link>

        {auth?.userData?.email ? (
          <Button
            size="medium"
            className=" navbar__button text-midnight-blue bg-shade-green"
          >
            Log Out
          </Button>
        ) : (
          <Button
            size="medium"
            className=" navbar__button text-midnight-blue bg-shade-green"
          >
            <Link href="login">Log In</Link>
          </Button>
        )}
      </div>

      <div className="navbar__responsive-button">
        <Button
          size="small"
          className=""
          clickEvent={() => {
            setShow(true);
          }}
        >
          <BiCategory size={30} />
        </Button>
      </div>
      <NavigationBarPopup show={show} setShow={setShow} />
    </div>
  );
}
