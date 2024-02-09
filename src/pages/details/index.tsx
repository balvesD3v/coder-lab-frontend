import "./styles.scss";
import { FaAngleLeft } from "react-icons/fa6";
import { Link, useNavigate, useParams } from "react-router-dom";
import imageTeste from "../../assets/Mask group.png";
import { Button } from "../../components/button";
import { useEffect, useState } from "react";
import { ProductData } from "../../@types/product";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

export const Details = () => {
  const { token } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<ProductData | null>(null);

  const handleGetProductById = async () => {
    const { data } = await api.get<ProductData>(`/product/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setProduct(data);
  };

  useEffect(() => {
    handleGetProductById();
  }, [id]);
  return (
    <div className="contentDetails">
      <Link to="/" className="linkto">
        <FaAngleLeft /> voltar
      </Link>
      <div className="ContentStyled">
        <div className="imagePhoto">
          <img src={product?.photo} alt="" />
        </div>

        <div className="InfoContent">
          <h1>{product?.name}</h1>
          <p>{product?.description}</p>
          <p>{product?.qty}</p>
          <p>R${product?.price}</p>

          <Button onClick={() => navigate(`/edit/${product?.id}`)}>
            <label htmlFor="">Update Product</label>
          </Button>
        </div>
      </div>
    </div>
  );
};
