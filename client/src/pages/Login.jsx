import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import LoginForm from "../components/auth/LoginForm";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { login, loading, error } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();

    await login({ email, password }, (success) => {
      if (success) {
        navigate("/notes", { replace: true });
      }
    });
  };

  return (
    <LoginForm
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      handleLogin={handleLogin}
      loading={loading}
      error={error}
    />
  );
}

export default Login;
