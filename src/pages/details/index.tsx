import "./styles.scss";
import { FaAngleLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import imageTeste from "../../assets/Mask group.png";
import { Button } from "../../components/button";

export const Details = () => {
  return (
    <main>
      <div className="header">
        <a className="coders" href="/">
          CODER's Menu
        </a>
        <div className="search-wrapper">
          <input className="search" type="text" />
        </div>
        <div>
          <div>
            <Button title="new" link="/new" />
          </div>
        </div>
        <div className="user">user</div>
      </div>

      <div className="content">
        <Link to="/" className="linkto">
          <FaAngleLeft /> voltar
        </Link>
        <div className="ContentStyled">
          <div className="imagePhoto">
            <img src={imageTeste} alt="" />
          </div>

          <div className="InfoContent">
            <h1>Produto</h1>
            <p>Descrição</p>

            <Button title="Atualizar Prato" link="/edit/:id" />
          </div>
        </div>
      </div>
    </main>
  );
};
