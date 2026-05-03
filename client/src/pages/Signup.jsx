
import { useState } from "react";
import { useNavigate} from "react-router-dom";
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

    if (!name.trim() || !email.trim() || !password.trim()) {
      setError("Please fill all fields");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const res = await signupApi({
        name,
        email,
        password,
      });

      localStorage.setItem("user", JSON.stringify(res.data.user));

      navigate("/notes");
    } catch (err) {
      console.log(err);

      setError(
        err.response?.data?.message || "Signup failed. Please try again."
      );
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