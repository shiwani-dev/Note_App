import { useState } from "react";
import { loginApi, signupApi } from "../services/authApi";

export function useAuth() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const login = async ({ email, password }) => {
    try {
      setLoading(true);
      setError("");

      const res = await loginApi({ email, password });
      localStorage.setItem("token", res.data.token);

      return true;
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
      return false;
    } finally {
      setLoading(false);
    }
  };

  const signup = async ({ email, password }) => {
    try {
      setLoading(true);
      setError("");

      const res = await signupApi({ email, password });
      localStorage.setItem("token", res.data.token);

      return true;
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
      return false;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
  };

  return { login, signup, logout, loading, error };
}