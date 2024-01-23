import { IProduct } from "@/interfaces/product";
import Image from "next/image";
import React from "react";
import "./index.scss";
import Button from "../Button";
import { FaCartPlus } from "react-icons/fa";
import { useSelector } from "react-redux";
import useCartHook from "@/hooks/useCartHook";

type Props = {
  product: IProduct;
};

export default function Product({ product }: Props) {
  const { auth } = useSelector((state: any) => state);
  // console.log(auth?.userData?.userId);

  const { addToCart } = useCartHook();

  return (
    <div className="product-card">
      <div className="product-card__image-wrapper">
        <img
          src={product?.thumbnail}
          height={400}
          width={300}
          alt={product?.title}
          className="product-card__image"
        />
      </div>
      <div className="product-card__content">
        <h3 className="product-card__content__title">{product?.title}</h3>
        <p className="product-card__content__description">
          {product?.description}
        </p>
        <p className="product-card__content__price">{product?.price} ৳</p>
      </div>
      <div className=" product-card__button-wrapper">
        <div className=" product-card__button">
          <Button
            size="large"
            className="bg-sage-violet text-white"
            clickEvent={() => addToCart(auth?.userData?.userId, product?._id)}
          >
            <span style={{ marginRight: "12px" }}> Add to Cart</span>
            <FaCartPlus size={24} className=" " />
          </Button>
        </div>
      </div>
    </div>
  );
}
