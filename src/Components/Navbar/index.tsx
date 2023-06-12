import React from "react";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import { ThemeProvider } from "@material-ui/core/styles";
import { FormSearchBar } from "../FormSearchBar";
import { Container } from "./style";
import useWindowSize from "../../Hooks/useWindowSize";

interface Props {
  theme?: any;
  itensCounter: number;
  userLogout: () => void;
  modalCartToggle: () => void;
}

export const Navbar: React.FC<Props> = ({
  theme,
  itensCounter,
  userLogout,
  modalCartToggle,
}) => {
  const mobile = useWindowSize().width < 600;

  return (
    <Container>
      <div>
        <h1>Golden Burger</h1>

        <nav>
          {!mobile && <FormSearchBar />}
          <div>
            <button>
              <ShoppingCartIcon
                className="shoppingIcon"
                onClick={() => modalCartToggle()}
              />
            </button>
            <p onClick={() => modalCartToggle()}>{itensCounter}</p>
          </div>

          <button>
            <ExitToAppIcon className="exitIcon" onClick={() => userLogout()} />
          </button>
        </nav>
      </div>

      {mobile && <FormSearchBar />}

      {/* <ThemeProvider theme={theme}></ThemeProvider> */}
    </Container>
  );
};
