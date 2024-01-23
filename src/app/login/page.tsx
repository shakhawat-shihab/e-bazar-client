"use client";
import Loader from "@/components/Loader";
import useAuthHook from "@/hooks/useAuthHook";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import "./index.scss";

type Props = {};

const LogIn = (props: Props) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { logIn, isLoadingAuth, user } = useAuthHook();

  const handleLogin = async (data: any) => {
    // console.log(getValues("email"));
    // console.log(getValues("password"));
    let email = getValues("email").toLowerCase().trim();
    let password = getValues("password");
    await logIn({ email, password });
  };

  console.log(user);

  return (
    <div className="login-container">
      {isLoadingAuth && (
        <div>
          <Loader />
        </div>
      )}

      <form
        onSubmit={handleSubmit(handleLogin)}
        className="login-form"
        autoComplete="off"
      >
        <h2>User Login</h2>
        {/* email */}
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="email">Email:</label>
          <Controller
            name="email"
            control={control}
            rules={{
              required: "email must be provided",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                message: "Invalid email",
              },
            }}
            render={({ field }) => (
              <input
                placeholder="Enter Email"
                {...field}
                type="text"
                style={{
                  border: errors?.email ? "1px solid red" : "",
                }}
              />
            )}
          />
          <span
            className={`${
              errors?.email?.message ? "error-message-visible" : "error-message"
            }`}
          >
            {" "}
            *{errors?.email?.message}{" "}
          </span>
        </div>
        {/* password */}
        <div style={{ marginBottom: "25px" }}>
          <label htmlFor="password">Password:</label>
          <Controller
            name="password"
            control={control}
            rules={{
              required: "password must be provided",
              minLength: {
                value: 8,
                message: "Minimum length must be 8",
              },
              // pattern: {
              //   value:
              //     /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/,
              //   message:
              //     "Password must contain one special character, a capital letter, a digit ",
              // },
            }}
            render={({ field }) => (
              <input
                placeholder="Enter Password"
                {...field}
                type="text"
                style={{
                  border: errors?.password ? "1px solid red" : "",
                }}
              />
            )}
          />
          <span
            className={`${
              errors?.password?.message
                ? "error-message-visible"
                : "error-message"
            }`}
          >
            {" "}
            *{errors?.password?.message}{" "}
          </span>
        </div>
        {/* <div className="register">
          <p>
            Don't have an account? <Link to="/register">Register</Link>{" "}
          </p>
        </div>
        <div className="register">
          <p>
            Forget Password? <Link to="/forget-password">Reset Password</Link>{" "}
          </p>
        </div> */}
        <div>
          <input type="submit" value="Login" />
        </div>
      </form>
    </div>
  );
};

export default LogIn;
