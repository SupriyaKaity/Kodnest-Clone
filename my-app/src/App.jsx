import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegistrationPage from "./components/RegistrationForm/RegistrationPage";
import LoginPage from "./components/LoginForm/LoginForm";
import ForgotPage from "./components/ForgotForm/ForgotPage";
import ResetForm from "./components/ResetForm/ResetForm";
import HomePage from "./components/HomePage/HomePage";
import Profile from "./components/Profile/Profile";


function App() {
  return (
    <Router>
      <Routes>
        {/* Default route (registration form) */}
        <Route path="/" element={<RegistrationPage />} />
        
        {/* Login page route */}
        <Route path="/login" element={<LoginPage />} />

        {/* Forgot password route */}
        <Route path="/forgot" element={<ForgotPage />} />

        {/* Reset Password */}
        <Route path="/reset" element={<ResetForm />} />

        {/* HomePage route */}
        <Route path="/home" element={<HomePage />} />

        {/* New Profile Page Route */}
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
