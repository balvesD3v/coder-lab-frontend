import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./app.routes";
import { useAuth } from "../hooks/auth";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
  const auth = useAuth();
  const user = auth ? auth.user : null;

  return <BrowserRouter>{user ? <AppRoutes /> : <AuthRoutes />}</BrowserRouter>;
}
