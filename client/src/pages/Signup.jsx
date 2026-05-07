import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupApi } from "../services/authApi";
import SignupForm from "../components/auth/SignupForm";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();

    setError("");

    if (!name.trim()) {
      setError("Name is required");
      return;
    }

    if (!email.trim()) {
      setError("Email is required");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Invalid email");
      return;
    }

    if (!password.trim()) {
      setError("Password is required");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    try {
      setLoading(true);
      const res = await signupApi({ name, email, password });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      console.log(res.data);
      
      navigate("/notes");
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SignupForm
      name={name}
      setName={setName}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      handleSignup={handleSignup}
      loading={loading}
      error={error}
    />
  );
}

export default Signup;