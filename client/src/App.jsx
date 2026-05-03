import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotesPage from "./pages/NotesPage";

function App() {
  const user = localStorage.getItem("user");

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route
        path="/notes"
        element={user ? <NotesPage /> : <Navigate to="/login" />}
      />

      <Route path="*" element={<Navigate to={user ? "/notes" : "/login"} />} />
    </Routes>
  );
}

export default App;