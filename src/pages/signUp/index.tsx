import "./styles.scss";
import "react-toastify/dist/ReactToastify.css";
import image from "../../assets/undraw_sign_up_n6im (1).svg";
import { Input } from "../../components/input";
import { FaUser, FaLock, FaRegEnvelope } from "react-icons/fa6";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { Button } from "../../components/button";
import { useNavigate } from "react-router-dom";

type Name = { name: string };
type Email = { email: string };
type Password = { password: string };

export const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState<Name>({ name: "" });
  const [email, setEmail] = useState<Email>({ email: "" });
  const [password, setPassword] = useState<Password>({ password: "" });

  const handleSignUp = async () => {
    if (!name || !email || !password) {
      return toast.error("Fill in all fields");
    }

    try {
      const userData = {
        name: name.name,
        email: email.email,
        password: password.password,
      };
      toast.success("user successfully registered");
      navigate("/login");
      await api.post("/users", userData);
    } catch (error: any) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(`Failed to register user: ${error.response.data.message}`);
      } else {
        toast.error("Failed to register user. Please, try again later.");
      }
    }
  };

  return (
    <div className="container">
      <h1>CODER'S MENU</h1>

      <div className="form-styled">
        <img src={image} alt="form" />

        <form action="">
          <div className="input-field">
            <h2>Create your account</h2>
            <Input
              type="text"
              placeholder="user"
              icon={FaUser}
              onChange={(e) => setName({ name: e.target.value })}
            />
            <Input
              type="text"
              placeholder="email"
              icon={FaRegEnvelope}
              onChange={(e) => setEmail({ email: e.target.value })}
            />
            <Input
              type="password"
              placeholder="password"
              icon={FaLock}
              onChange={(e) => setPassword({ password: e.target.value })}
            />

            <Button onClick={handleSignUp}>
              <label htmlFor="">Create Account</label>
            </Button>

            <a className="login" href="/login">
              I already have an account
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
