import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Single from "./pages/Single";
import Write from "./pages/Write";




function App() {
  return (
    <div className="app">
      <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/post/:id" element={<Single />} />
          <Route path="/write" element={<Write />} />
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
