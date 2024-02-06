import "./styles.scss";
import image from "../../assets/undraw_visionary_technology_re_jfp7.svg";
import { Input } from "../../components/input";
import { FaLock, FaRegEnvelope } from "react-icons/fa6";
import { InputSmall } from "../../components/inputSmall";

export function SignIn() {
  return (
    <div className="container">
      <h1>CODER'S MENU</h1>

      <div className="form-styled">
        <form action="">
          <div className="input-field">
            <h2>Faça login</h2>
            <Input type="text" placeholder="email" icon={FaRegEnvelope} />
            <Input type="password" placeholder="password" icon={FaLock} />

            <InputSmall link={"/"} title="Fazer Conta" />
          </div>
        </form>

        <img src={image} alt="form" />
      </div>
    </div>
  );
}
