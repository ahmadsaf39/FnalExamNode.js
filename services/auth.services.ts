import {
  STATIC_USERS,
} from "@/utils/constant";

export const login = async (
  username: string,
  password: string
) => {
  const user = STATIC_USERS.find(
    (user) =>
      user.username === username &&
      user.password === password
  );

  if (user) {
    const response = await fetch(
      "/api/send-otp",
      {
        method: "POST",
      }
    );

    const data =
      await response.json();

    localStorage.setItem(
      "generatedOtp",
      data.otp
    );

    localStorage.setItem(
      "role",
      user.role
    );

    return {
      success: true,
    };
  }

  throw new Error(
    "Invalid credentials"
  );
};

export const verifyOtp = async (
  otp: string
) => {
  const generatedOtp =
    localStorage.getItem(
      "generatedOtp"
    );

  if (otp === generatedOtp) {
    localStorage.setItem(
      "token",
      "fake-jwt-token"
    );

    return {
      accessToken:
        "fake-jwt-token",

      refreshToken:
        "fake-refresh-token",
    };
  }

  throw new Error("Invalid OTP");
};