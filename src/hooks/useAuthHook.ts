import authApi from "@/api/authApi";
import { addUserData } from "@/redux/slices/authSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const useAuthHook = () => {
  const [user, setUser] = useState();
  const [isLoadingAuth, setIsLoadingAuth] = useState(false);
  const [success, setSuccess] = useState(false);
  const [response, setResponse] = useState("");
  const dispatch = useDispatch();

  const logIn = async (props: { email: string; password: string }) => {
    setIsLoadingAuth(true);
    try {
      const res = await authApi.logIn(props);
      // console.log(res?.data);
      setUser(res?.data?.data);
      //   toast.success(res?.data?.message);
      dispatch(addUserData(res?.data?.data));

      localStorage.setItem("token", res?.data?.data?.token);
    } catch (e: any) {
      // console.log(e);
      let message = "";
      if (e?.response?.data?.message) {
        message = e?.response?.data?.message;
      } else {
        message = "Failed to log in";
      }
      //   toast.error(message);
    } finally {
      setIsLoadingAuth(false);
    }
  };

  const signUp = async (props: {
    userName: string;
    email: string;
    role: string;
    password: string;
    confirmPassword: string;
  }) => {
    setIsLoadingAuth(true);
    try {
      const res = await authApi.signUp(props);
      console.log(res?.data);
      //   toast.success(res?.data?.message);
      //   navigate("/");
    } catch (e: any) {
      // console.log(e);
      let message = "";
      if (e?.response?.data?.message) {
        message = e?.response?.data?.message;
      } else {
        message = "Failed to sign up";
      }
      //   toast.error(message);
    } finally {
      setIsLoadingAuth(false);
    }
  };

  //   const checkUser = async (token: string) => {
  //     setIsLoadingAuth(true);
  //     try {
  //       const res = await authApi.checkUser(token);
  //       console.log(res?.data);
  //       //   setCourses(res?.data?.data);
  //       // toast.success(res?.data?.message);
  //       console.log(res);
  //       dispatch(loadUserInfo(res?.data?.data));
  //       // navigate("/log-in");
  //     } catch (e: any) {
  //       // console.log(e);
  //       let message = "";
  //       if (e?.response?.data?.message) {
  //         message = e?.response?.data?.message;
  //       } else {
  //         message = "User is not valid";
  //       }
  //       // toast.error(message);
  //       dispatch(removeUserData());
  //       navigate("/log-in");
  //     } finally {
  //       setIsLoadingAuth(false);
  //     }
  //   };

  return {
    isLoadingAuth,
    user,
    success,
    response,

    logIn,
    signUp,
  };
};

export default useAuthHook;
