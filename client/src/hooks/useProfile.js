import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function useProfile() {
  const navigate = useNavigate();

  const [showProfile, setShowProfile] = useState(false);

  const user = JSON.parse(localStorage.getItem("user")) || {};

  const toggleProfile = () => {
    setShowProfile((prev) => !prev);
  };

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return {
    user,
    showProfile,
    toggleProfile,
    logout,
  };
}