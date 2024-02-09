import "./styles.scss";
import { FaAngleRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { ProductData } from "../../@types/product";

interface ProductProps {
  product: ProductData;
}

export const Product: React.FC<ProductProps> = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div className="card">
      <img
        src={product.photo}
        alt="Plate"
        onClick={() => navigate(`/details/${product.id}`)}
      />
      <div className="DivInfo">
        <h3>
          {product.name}
          <FaAngleRight />
        </h3>
        <p>{product.description}</p>
        <p>{product.qty}</p>
        <span>R${product.price}</span>
      </div>
    </div>
  );
};
