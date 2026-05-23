import api from "./api";

export const login = async (
  username: string,
  password: string
) => {
  const response = await api.post(
    "/auth/login",
    {
      username,
      password,
    }
  );

  return response.data;
};

export const verifyOtp = async (
  otp: string
) => {
  const response = await api.post(
    "/auth/verify-otp",
    {
      otp,
    }
  );

  return response.data;
};