import { useEffect, useState } from "react";
// import courseApi from "../../api/courseApi";
// import { useDispatch } from "react-redux";
// import { toast } from "react-toastify";

import { IProduct } from "@/interfaces/product";
import productApi from "@/api/productApi";

const useProductHook = () => {
  const [products, setProducts] = useState<IProduct[] | null>();

  const [isSuccess, setSuccess] = useState(true);

  const [isLoadingProduct, setIsLoadingProduct] = useState(false);

  const loadProducts = async () => {
    try {
      setIsLoadingProduct(true);
      const res = await productApi.loadProducts();
      // console.log("res?.data  ", res?.data?.data);
      setProducts(res?.data?.data);
      // toast.success(res?.data?.message);
    } catch (e: any) {
      // console.log(e);
      let message = "";
      if (e?.response?.data?.message) {
        message = e?.response?.data?.message;
      } else {
        message = "Failed to load courses";
      }

      // toast.error(message);
    } finally {
      setIsLoadingProduct(false);
    }
  };

  return {
    products,
    isLoadingProduct,
    loadProducts,
    isSuccess,
  };
};

export default useProductHook;
