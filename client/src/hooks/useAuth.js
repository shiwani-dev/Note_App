import { useState} from "react";
import { loginApi, signupApi } from "../services/authApi";

export function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const login = async ({ email, password }) => {
    try {
      setLoading(true);
      setError("");

      const res = await loginApi({ email, password });

      localStorage.setItem("user", JSON.stringify(res.data.user));
      setUser(res.data.user);

      return true;
    } catch (err) {
      setError(
        err.response?.data?.message || "Login failed"
      );
      return false;
    } finally {
      setLoading(false);
    }
  };

  const signup = async ({ name, email, password }) => {
    try {
      setLoading(true);
      setError("");

      const res = await signupApi({ name, email, password });

      localStorage.setItem("user", JSON.stringify(res.data.user));
      setUser(res.data.user);

      return true;
    } catch (err) {
      setError(
        err.response?.data?.message || "Signup failed"
      );
      return false;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return {
    user,
    loading,
    error,
    login,
    signup,
    logout,
  };
}