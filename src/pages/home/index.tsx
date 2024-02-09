import "./styles.scss";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Product } from "../../components/product";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Button } from "../../components/button";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { useAuth } from "../../hooks/auth";
import { useEffect, useState } from "react";
import { ProductData } from "../../@types/product";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const { token, signOut } = useAuth();
  const navigate = useNavigate();
  const [products, setProducts] = useState<ProductData[]>([]);

  const handleGetAllProducts = async () => {
    const { data } = await api.get<ProductData[]>("/product", {
      headers: { Authorization: `Bearer ${token}` },
    });

    setProducts(data);
  };

  useEffect(() => {
    handleGetAllProducts();
  }, []);

  return (
    <div className="container">
      <div className="header">
        <a className="coders" href="/">
          CODER's Menu
        </a>
        <div className="search-wrapper">
          <input className="search" type="text" />
        </div>

        <div>
          <Button onClick={() => navigate("/new")}>
            <label htmlFor="">New</label>
          </Button>
        </div>
        <div className="user">user</div>
        <a href="/" className="signOut" onClick={signOut}>
          <FaArrowRightFromBracket className="arrowRight" />
        </a>
      </div>

      <section className="content">
        <h2>Refeições</h2>

        <Splide
          options={{
            perPage: 4,
            breakpoints: {
              426: {
                perPage: 1,
              },
            },
            type: "slide",
            arrows: false,
          }}
        >
          {products.map((product) => (
            <SplideSlide className="splide-slide" key={product.id}>
              <Product product={product} />
            </SplideSlide>
          ))}
        </Splide>
      </section>

      <section className="content">
        <h2>Sobremesas</h2>

        <Splide
          options={{
            perPage: 4,
            breakpoints: {
              426: {
                perPage: 1,
              },
            },
            type: "slide",
            arrows: false,
          }}
        >
          {products.map((product) => (
            <SplideSlide className="splide-slide" key={product.id}>
              <Product product={product} />
            </SplideSlide>
          ))}
        </Splide>
      </section>

      <section className="content">
        <h2>Bebidas</h2>

        <Splide
          options={{
            perPage: 4,
            breakpoints: {
              426: {
                perPage: 1,
              },
            },
            type: "slide",
            arrows: false,
          }}
        >
          {products.map((product) => (
            <SplideSlide className="splide-slide" key={product.id}>
              <Product product={product} />
            </SplideSlide>
          ))}
        </Splide>
      </section>
    </div>
  );
};
