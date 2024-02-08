import "./styles.scss";
import image from "../../assets/undraw_visionary_technology_re_jfp7.svg";
import { Input } from "../../components/input";
import { FaLock, FaRegEnvelope } from "react-icons/fa6";
import { InputSmall } from "../../components/inputSmall";
import { useAuth } from "../../hooks/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function SignIn() {
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function handleSignIn() {
    signIn({ email, password });
    navigate("/");
  }

  return (
    <div className="container">
      <h1>CODER'S MENU</h1>

      <div className="form-styled">
        <form action="">
          <div className="input-field">
            <h2>Faça login</h2>
            <Input
              type="text"
              placeholder="email"
              icon={FaRegEnvelope}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="password"
              icon={FaLock}
              onChange={(e) => setPassword(e.target.value)}
            />

            <InputSmall title="Fazer login" onClick={handleSignIn} />

            <a className="register" href="/">
              Crie sua conta
            </a>
          </div>
        </form>

        <img src={image} alt="form" />
      </div>
    </div>
  );
}
