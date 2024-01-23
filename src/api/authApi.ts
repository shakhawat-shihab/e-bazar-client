import { axiosInstanceToken } from "@/utils/axiosCreate";

class AuthApi {
  endPoints = {
    logIn: "/auth/log-in",
    signUp: "/auth/sign-up",
  };

  logIn = async (input: { email: string; password: string }) => {
    // console.log("input ", input);
    let data = await axiosInstanceToken.post(this.endPoints.logIn, input);
    // console.log("data ", data);
    return data;
  };

  signUp = async (input: {
    userName: string;
    email: string;
    role: string;
    password: string;
    confirmPassword: string;
  }) => {
    let data = await axiosInstanceToken.post(this.endPoints.signUp, input);

    return data;
  };
}

export default new AuthApi();
