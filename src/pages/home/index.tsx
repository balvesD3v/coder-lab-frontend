import "./styles.scss";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Product } from "../../components/product";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Button } from "../../components/button";

export const Home = () => {
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
          <Button title="new" link="/new" />
        </div>
        <div className="user">user</div>
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
          <SplideSlide className="splide-slide">
            <Product description="teste" name="teste" price={10} />
          </SplideSlide>
          <SplideSlide className="splide-slide">
            <Product description="teste" name="teste" price={10} />
          </SplideSlide>
          <SplideSlide className="splide-slide">
            <Product description="teste" name="teste" price={10} />
          </SplideSlide>
          <SplideSlide className="splide-slide">
            <Product description="teste" name="teste" price={10} />
          </SplideSlide>
          <SplideSlide className="splide-slide">
            <Product description="teste" name="teste" price={10} />
          </SplideSlide>
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
          <SplideSlide className="splide-slide">
            <Product description="teste" name="teste" price={10} />
          </SplideSlide>
          <SplideSlide className="splide-slide">
            <Product description="teste" name="teste" price={10} />
          </SplideSlide>
          <SplideSlide className="splide-slide">
            <Product description="teste" name="teste" price={10} />
          </SplideSlide>
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
          <SplideSlide className="splide-slide">
            <Product description="teste" name="teste" price={10} />
          </SplideSlide>
          <SplideSlide className="splide-slide">
            <Product description="teste" name="teste" price={10} />
          </SplideSlide>
          <SplideSlide className="splide-slide">
            <Product description="teste" name="teste" price={10} />
          </SplideSlide>
        </Splide>
      </section>
    </div>
  );
};
