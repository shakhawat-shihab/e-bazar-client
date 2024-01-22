"use client";
import React, { Dispatch, SetStateAction } from "react";
import "./index.scss";
import Link from "next/link";
import Button from "../Button";
import { ImCross } from "react-icons/im";
import { FaShoppingCart } from "react-icons/fa";

type Props = {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
};

export default function NavigationBarPopup({ show, setShow }: Props) {
  return (
    <div className={`navbar-popup ${show ? "visible" : "not-visible"}  `}>
      <div className="navbar-popup--close">
        <Button
          size="small"
          className="bg-inherit"
          clickEvent={() => {
            setShow(false);
          }}
        >
          {/* <Image src={close?.src} width={20} height={20} alt="X" /> */}
          <ImCross size={20} className="text-white" />
        </Button>
      </div>

      <div className="navbar-popup__link-wrapper">
        <Link href="#" className="navbar-popup__link">
          Home
        </Link>
        <Link href="#" className="navbar-popup__link">
          Products
        </Link>
        <Link href="#" className="navbar-popup__link">
          About
        </Link>
        <Link href="#" className="navbar-popup__link">
          Contact Us
        </Link>
      </div>
      <div className="navbar-popup__button-wrapper">
        <Button
          size="small"
          className="navbar__button text-midnight-blue bg-inherit"
        >
          <FaShoppingCart size={30} />
        </Button>
        <Button
          size="medium"
          className="navbar__button text-midnight-blue bg-shade-green"
        >
          Log In
        </Button>
      </div>
    </div>
  );
}
