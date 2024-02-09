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
      <section className="content">
        <h2>Snacks</h2>

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
          {products
            .filter((product) => product.category.name === "snacks")
            .map((product) => (
              <SplideSlide className="splide-slide" key={product.id}>
                <Product product={product} />
              </SplideSlide>
            ))}
        </Splide>
      </section>

      <section className="content">
        <h2>Desserts</h2>

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
          {products
            .filter((product) => product.category.name === "Desserts")
            .map((product) => (
              <SplideSlide className="splide-slide" key={product.id}>
                <Product product={product} />
              </SplideSlide>
            ))}
        </Splide>
      </section>

      <section className="content">
        <h2>Drinks</h2>

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
          {products
            .filter((product) => product.category.name === "Drinks")
            .map((product) => (
              <SplideSlide className="splide-slide" key={product.id}>
                <Product product={product} />
              </SplideSlide>
            ))}
        </Splide>
      </section>
    </div>
  );
};
