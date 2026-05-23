export interface LoginRequest {
  username: string;
  password: string;
}

export interface VerifyOtpRequest {
  otp: string;
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
}

export interface User {
  id: number;
  username: string;
  role: string;
}