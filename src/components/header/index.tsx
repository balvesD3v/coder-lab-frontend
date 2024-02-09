import "./styles.scss";
import { useNavigate } from "react-router-dom";
import { Button } from "../button";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { useAuth } from "../../hooks/auth";

export const Header = () => {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="header">
      <a className="coders" href="/">
        CODER's Menu
      </a>

      <div className="search-wrapper">
        <input className="search" type="text" />
      </div>

      <div>
        <Button className="new" onClick={() => navigate("/new")}>
          <label htmlFor="">New</label>
        </Button>
      </div>
      <div className="user">user</div>
      <a href="/" className="signOut" onClick={signOut}>
        <FaArrowRightFromBracket className="arrowRight" />
      </a>
    </div>
  );
};
