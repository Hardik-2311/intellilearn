import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import PricingPage from "./pages/Pricing";
import MyLearning from "./pages/MyLearning";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="learnings" element={<MyLearning />} />
      </Routes>
    </div>
  );
}

export default App;
