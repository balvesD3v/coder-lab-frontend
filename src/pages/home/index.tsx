import "./styles.scss";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Product } from "../../components/product";
import { Splide, SplideSlide } from "@splidejs/react-splide";

export const Home = () => {
  return (
    <div className="container">
      <div className="header">
        <h3>CODER's Menu</h3>
        <div className="search-wrapper">
          <input className="search" type="text" />
        </div>
        <div>
          <a href="/new">new</a>
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
