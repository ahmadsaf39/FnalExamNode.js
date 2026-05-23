import {
  STATIC_USER,
} from "@/utils/constant";

export const login = async (
  username: string,
  password: string
) => {
  if (
    username ===
      STATIC_USER.username &&
    password ===
      STATIC_USER.password
  ) {
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
      STATIC_USER.role
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
    return {
      accessToken:
        "fake-jwt-token",

      refreshToken:
        "fake-refresh-token",
    };
  }

  throw new Error("Invalid OTP");
};