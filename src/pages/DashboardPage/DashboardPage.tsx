import { useContext } from "react";
import { Header } from "../../components/Header/Header";
import { NavBar } from "../../components/NavBar/NavBar";
import { ProductsList } from "../../components/ProductsList/ProductsList";
import { StyledDashboardPage } from "./StyleDashboard";
import { CartContext } from "../../providers/CartContext";
import { CartModal } from "../../components/CartModal/CartModal";

export const DashboardPage = () => {
  const { cartModal } = useContext(CartContext);

  return (
    <StyledDashboardPage>
      {cartModal && <CartModal />}
      <Header />
      {NavBar()}
      <ProductsList />
    </StyledDashboardPage>
  );
};
