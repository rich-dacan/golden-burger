import RoutesMain from "./Routes/routes";
import { ToastContainer } from "react-toastify";
import GlobalStyle from "./Styles/Global-styles";
import { UserProvider } from "./Contexts/UserContext";
import { CartProvider } from "./Contexts/CartContext";

const App = () => {
  return (
    <>
      <UserProvider>
        <CartProvider>
          <RoutesMain />
        </CartProvider>
      </UserProvider>

      <GlobalStyle />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default App;
