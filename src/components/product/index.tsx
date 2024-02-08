import "./styles.scss";
import { FaAngleRight } from "react-icons/fa6";
import imageTeste from "../../assets/Mask group.png";
import { useNavigate } from "react-router-dom";

interface ProductProps {
  id?: string;
  name: string;
  description: string;
  price: number;
  image?: string;
}

export const Product: React.FC<ProductProps> = ({
  id,
  name,
  description,
  price,
  image,
}) => {
  const navigate = useNavigate();
  function handleNavigation() {
    navigate(`/details/${id}`);
  }

  return (
    <div className="card">
      <img src={imageTeste} alt="Plate" onClick={handleNavigation} />
      <div className="DivInfo">
        <h3>
          {name}
          <FaAngleRight />
        </h3>
        <p>{description}</p>

        <span>R${price}</span>
      </div>
    </div>
  );
};
