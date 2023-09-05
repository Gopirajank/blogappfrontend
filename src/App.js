import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Setting from "./pages/Setting";
import Write from "./pages/Write";
import Single from "./pages/Single";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const {user} = useContext(Context); // Make sure the variable name is correct (uppercase "U")

  console.log("User:", User); // Log the value of User

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Home />} />
        <Route
          path="/register"
          element={User ? <Navigate to="/" /> : <Register />}
        />
        <Route
          path="/login"
          element={User ? <Navigate to="/" /> : <Login />}
        />
        <Route path="/post/:id" element={<Single />} />
        <Route
          path="/write"
          element={User ? <Write /> : <Navigate to="/login" />}
        />
        <Route
          path="/setting"
          element={User ? <Setting /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
