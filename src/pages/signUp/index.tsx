import "./styles.scss";
import image from "../../assets/undraw_sign_up_n6im (1).svg";
import { Input } from "../../components/input";
import { FaUser, FaLock, FaRegEnvelope } from "react-icons/fa6";
import { InputSmall } from "../../components/inputSmall";

export function SignUp() {
  return (
    <div className="container">
      <h1>CODER'S MENU</h1>

      <div className="form-styled">
        <img src={image} alt="form" />

        <form action="">
          <div className="input-field">
            <h2>Crie sua conta</h2>
            <Input type="text" placeholder="user" icon={FaUser} />
            <Input type="text" placeholder="email" icon={FaRegEnvelope} />
            <Input type="password" placeholder="password" icon={FaLock} />

            <InputSmall link="/login" title="Fazer Login" />
          </div>
        </form>
      </div>
    </div>
  );
}
