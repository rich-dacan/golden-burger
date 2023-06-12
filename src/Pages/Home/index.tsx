import React, { useContext } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { CartContext } from "../../Contexts/CartContext";
import { UserContext } from "../../Contexts/UserContext";
import { FormSearchBar } from "../../Components/FormSearchBar";
import { ModalCart } from "../../Components/Modal";
import { StyledHome } from "./home-style";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { StyledButton } from "../../Styles/buttons-style";
import Header from "../../Components/Header";
import { Navbar } from "../../Components/Navbar";

const HomePage = () => {
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
          {filteredProdutcs &&
            filteredProdutcs.map(product => (
              <li className="product" key={`${product.id}`}>
                <figure>
                  <img
                    onClick={() => addToCart(product)}
                    src={product.img}
                    alt="Edit"
                  />
                </figure>

                <div>
                  <h2>{product.name}</h2>
                  <p>{product.category}</p>
                  <p>
                    {product.price.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                  <StyledButton
                    className="green-button-default"
                    onClick={() => addToCart(product)}
                  >
                    Adicionar
                  </StyledButton>
                </div>
              </li>
            ))}
        </ul>
      </main>
    </StyledHome>
  );
};

export default HomePage;
