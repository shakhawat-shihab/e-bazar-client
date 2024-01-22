"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import "./index.scss";
import logo from "../../../public/assets/images/logo.png";
import Button from "../Button";
import { FaShoppingCart } from "react-icons/fa";
import NavigationBarPopup from "../NavigationBarPopup";
import { BiCategory } from "react-icons/bi";

type Props = {};

export default function NavigationBar({}: Props) {
  const [show, setShow] = useState(false);
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
        <Link href="#" className="navbar__link">
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
        <Button
          size="medium"
          className=" navbar__button text-midnight-blue bg-shade-green"
        >
          Log In
        </Button>
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
