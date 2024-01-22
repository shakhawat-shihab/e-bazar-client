"use client";
import useProductHook from "@/hooks/useProductsHook";
import { IProduct } from "@/interfaces/product";
import Image from "next/image";
import React, { useEffect } from "react";
import "./index.scss";
import Product from "../Product";

type Props = {};

export default function FeaturedProducts({}: Props) {
  const { loadProducts, products } = useProductHook();
  useEffect(() => {
    loadProducts();
  }, []);
  // console.log("products ", products);
  return (
    <div className="product-wrapper">
      {products?.map((product: IProduct) => (
        <Product product={product} key={product?._id} />
      ))}
    </div>
  );
}
