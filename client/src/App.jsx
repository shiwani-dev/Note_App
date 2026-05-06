import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotesPage from "./pages/NotesPage";
import { useEffect } from "react";
function ProtectedLayout({children}){
  const token=localStorage.getItem("token")
  console.log(token)
  const navigate=useNavigate();

  useEffect(()=>{
    if(!token){
      navigate("/")
    }else{
      navigate("/notes")
    }

  },[navigate,token])
  
  return children;
}

function App() {

  return (
    <Routes>
      <Route path="/" element={<ProtectedLayout><Login /></ProtectedLayout>} />
      <Route path="/signup" element={<Signup />} />

      <Route
        path="/notes"
        element={<ProtectedLayout><NotesPage/></ProtectedLayout>}
      />

    </Routes>
  );
}

export default App;