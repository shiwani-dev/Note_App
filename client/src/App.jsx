import { Routes, Route } from "react-router-dom";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import NotesPage from "@/pages/NotesPage";
import PublicRoute from "@/providers/public-route";
import ProtectedRoute from "@/providers/protected-route";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicRoute children={<Login />} />} />
      <Route path="/signup" element={<PublicRoute children={<Signup />} />} />
      <Route
        path="/notes"
        element={<ProtectedRoute children={<NotesPage />} />}
      />
    </Routes>
  );
}

export default App;
