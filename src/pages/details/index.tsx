import "./styles.scss";
import { FaAngleLeft, FaMinus, FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import imageTeste from "../../assets/Mask group.png";

export const Details = () => {
  return (
    <main>
      <div className="header">
        <h3>CODER's Menu</h3>
        <div className="search-wrapper">
          <input className="search" type="text" />
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
          </div>
        </div>
      </div>
    </main>
  );
};
