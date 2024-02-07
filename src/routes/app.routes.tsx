import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/home";
import { Details } from "../pages/details";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  );
}
