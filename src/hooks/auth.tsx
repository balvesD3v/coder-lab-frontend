import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { api } from "../services/api";

interface UserData {
  user: any;
  token: string;
}

interface AuthContextType {
  signIn: (credentials: { email: string; password: string }) => Promise<void>;
  user: UserData | null;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

interface AuthProviderProps {
  children: ReactNode;
}

function AuthProvider({ children }: AuthProviderProps) {
  const [data, setData] = useState<UserData | null>(null);

  async function signIn({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    try {
      const response = await api.post("/session", { email, password });
      const { user, token } = response.data;

      localStorage.setItem("@coderlab:user", JSON.stringify(user));
      localStorage.setItem("@coderlab:token", token);

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setData({ user, token });
    } catch (error: any) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível entrar.");
      }
    }
  }

  useEffect(() => {
    const user = localStorage.getItem("@coderlab:user");
    const token = localStorage.getItem("@coderlab:token");

    if (user && token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setData({
        token,
        user: JSON.parse(user),
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, user: data }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
