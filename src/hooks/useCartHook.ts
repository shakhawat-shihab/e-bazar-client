import cartApi from "@/api/cartApi";
import { setCartLength } from "@/redux/slices/cartSlice";
import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";

interface cartCourse {
  courseId: string;
  title: string;
  description: string;
  thumbnail: string;
  createdAt: string;
  teacherUserId: string;
  teacherfirstName: string;
  teacherlastName: string;
  teacherImage: string;
}

export interface Cart {
  _id: string;
  courseDetails: cartCourse[];
}

const useCartHook = () => {
  const [cart, setCart] = useState<any>();
  const [isLoadingCart, setIsLoadingCart] = useState(false);

  const dispatch = useDispatch();

  const viewCart = async (studentId: string) => {
    setIsLoadingCart(true);
    try {
      const res = await cartApi.viewCart(studentId);
      console.log("viewCart ", res?.data);
      const productList = res?.data?.data?.productList;
      setCart(res?.data?.data);
      if (Array.isArray(productList)) {
        // console.log("length ", productList?.length);
        dispatch(setCartLength(productList?.length));
      }
    } catch (e: any) {
      // console.log(e);
      let message = "";
      if (e?.response?.data?.message) {
        message = e?.response?.data?.message;
      } else {
        message = "Failed to load courses";
      }
      // setCourses([]);
      // toast.error(message);
    } finally {
      setIsLoadingCart(false);
    }
  };

  const addToCart = async (userId: string, productId: string) => {
    setIsLoadingCart(true);
    console.log("userId", userId, "productId ", productId);
    try {
      const res = await cartApi.addToCart(userId, productId);
      const productList = res?.data?.data?.productList;
      if (Array.isArray(productList)) {
        // console.log("length ", productList?.length);
        dispatch(setCartLength(productList?.length));
      }
    } catch (e: any) {
      console.log(e);
      let message = "";
      if (e?.response?.data?.message) {
        message = e?.response?.data?.message;
      } else {
        message = "Failed to add course";
      }
      // setCourses([]);
      // setCart([]);
      //   toast.error(message);
    } finally {
      setIsLoadingCart(false);
    }
  };

  const removeFromCart = async (userId: string, productId: string) => {
    try {
      setIsLoadingCart(true);
      const res = await cartApi.removeFromCart(userId, productId);
      const productList = res?.data?.data?.productList;
      if (Array.isArray(productList)) {
        // console.log("length ", productList?.length);
        dispatch(setCartLength(productList?.length));
      }
    } catch (e: any) {
      console.log(e);
      let message = "";
      if (e?.response?.data?.message) {
        message = e?.response?.data?.message;
      } else {
        message = "Failed to remove course";
      }
      //   toast.error(message);
    } finally {
      setIsLoadingCart(false);
    }
  };

  return {
    viewCart,
    cart,
    addToCart,
    removeFromCart,

    isLoadingCart,
  };
};

export default useCartHook;
