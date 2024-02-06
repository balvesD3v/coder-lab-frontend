import { Routes, Route } from "react-router-dom";
import { SignUp } from "../pages/signUp";
import { SignIn } from "../pages/signIn";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/login" element={<SignIn />} />
    </Routes>
  );
}
