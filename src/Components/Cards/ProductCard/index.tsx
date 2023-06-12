import React from "react";
import { StyledButton } from "../../../Styles/buttons-style";
import { Wrapper } from "./style";
import { BsCartPlus } from "react-icons/bs";

interface Props {
  filteredProducts: any;
  addToCart: (product: any) => void;
}

export const ProductsCard: React.FC<Props> = ({
  filteredProducts,
  addToCart,
}) => {
  return (
    <>
      {filteredProducts &&
        filteredProducts.map((product: any) => (
          <Wrapper key={product.id}>
            <figure>
              <img
                onClick={() => addToCart(product)}
                src={product.img}
                alt="Edit"
              />
            </figure>

            <div>
              <h2 title={product.name}>
                {product.name.includes("Kenzie")
                  ? product.name.replace("Kenzie", "Golden")
                  : product.name}
              </h2>
              <p>{product.category}</p>
              <p>
                {product.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
              <StyledButton
                className="golden-button-default"
                onClick={() => addToCart(product)}
              >
                Adicionar
                <BsCartPlus size={20} />
              </StyledButton>
            </div>
          </Wrapper>
        ))}
    </>
  );
};
