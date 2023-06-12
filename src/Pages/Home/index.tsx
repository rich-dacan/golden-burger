import React, { useContext } from "react";

import { CartContext } from "../../Contexts/CartContext";
import { UserContext } from "../../Contexts/UserContext";
import { ModalCart } from "../../Components/Modal";
import { StyledHome } from "./home-style";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";

import { Navbar } from "../../Components/Navbar";
import { ProductsCard } from "../../Components/Cards/ProductCard";

const HomePage: React.FC = () => {
  const { userLogout, filteredProdutcs, itensCounter } =
    useContext(UserContext);
  const { addToCart, modal, modalCartToogle } = useContext(CartContext);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#9E6F21",
      },
      secondary: {
        main: "#EB5757",
      },
    },
  });

  return (
    <StyledHome>
      {modal && <ModalCart />}

      <Navbar
        theme={theme}
        itensCounter={itensCounter}
        modalCartToggle={modalCartToogle}
        userLogout={userLogout}
      />

      <main>
        <ul className="products-container">
          <ProductsCard
            filteredProducts={filteredProdutcs}
            addToCart={addToCart}
          />
        </ul>
      </main>
    </StyledHome>
  );
};

export default HomePage;
