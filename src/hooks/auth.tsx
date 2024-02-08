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

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

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
      const response = await api.post("session", { email, password });
      const { user, token } = response.data;
      console.log(user);

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
    const userJson = localStorage.getItem("@coderlab:user");
    const token = localStorage.getItem("@coderlab:token");

    if (userJson && token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      try {
        const user = JSON.parse(userJson);
        console.log(userJson);
        setData({ token, user });
      } catch (error) {
        console.error("Erro ao analisar dados do usuário:", error);
      }
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
  if (!context) {
    throw new Error("useAuth must be inside authProvider");
  }
  return context;
}

export { AuthProvider, useAuth };
