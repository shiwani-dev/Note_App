import { useState } from "react";
import { loginApi, signupApi } from "../services/authApi";

export function useAuth() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ✅ LOGIN
  const login = async ({ email, password }) => {
    try {
      setLoading(true);
      setError("");

      const res = await loginApi({ email, password });

      // 🔑 SAVE TOKEN (MOST IMPORTANT)
      localStorage.setItem("token", res.data.token);

      return true;
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
      return false;
    } finally {
      setLoading(false);
    }
  };

  // ✅ SIGNUP
  const signup = async ({ name, email, password }) => {
    try {
      setLoading(true);
      setError("");

      const res = await signupApi({ name, email, password });

      // optional: auto-login after signup
      localStorage.setItem("token", res.data.token);

      return true;
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
      return false;
    } finally {
      setLoading(false);
    }
  };

  // ✅ LOGOUT
  const logout = () => {
    localStorage.removeItem("token");
  };

  return {
    loading,
    error,
    login,
    signup,
    logout,
  };
}