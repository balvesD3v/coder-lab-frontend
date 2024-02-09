import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { api } from "../services/api";
import { User } from "../@types/user";
import { SessionData } from "../@types/session";
import { toast } from "react-toastify";

interface AuthContextType {
  signIn: (credentials: { email: string; password: string }) => Promise<void>;
  signOut: () => Promise<void>;
  user: User | undefined;
  token: string | null;
  setToken: (value: string | null) => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

function AuthProvider({ children }: AuthProviderProps) {
  const [data, setData] = useState<SessionData | null>(null);
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("@coderlab:token")
  );

  async function signIn({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    try {
      const { data } = await api.post<SessionData>("session", {
        email,
        password,
      });

      localStorage.setItem("@coderlab:user", JSON.stringify(data.user));
      setToken(data.token);

      localStorage.setItem("@coderlab:token", data.token);

      api.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;

      setData(data);
    } catch (error: any) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Não foi possível entrar.");
      }
    }
  }

  async function signOut() {
    localStorage.clear();
    setToken(null);
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
        console.error("Fail to analyze the user:", error);
      }
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ signIn, user: data?.user, signOut, setToken, token }}
    >
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
