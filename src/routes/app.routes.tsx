import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/home";
import { Details } from "../pages/details";
import { New } from "../pages/new";
import { Edit } from "../pages/edit";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/New" element={<New />} />
      <Route path="/edit/:id" element={<Edit />} />
    </Routes>
  );
}
