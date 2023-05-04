import { useContext } from "react";
import { Header } from "../../components/Header/Header";
import { NavBar } from "../../components/NavBar/NavBar";
import { ProductsList } from "../../components/ProductsList/ProductsList";
import { StyledDashboardPage } from "./StyleDashboard";
import { CartContext } from "../../providers/CartContext";
import { CartModal } from "../../components/CartModal/CartModal";
import { WishListModal } from "../../components/WishListModal/WishListModal";
import { Salutation } from "../../components/Salutation/Salutation";

export const DashboardPage = () => {
  const { cartModal, wishListModal } = useContext(CartContext);

  return (
    <StyledDashboardPage>
      {wishListModal && <WishListModal />}
      {cartModal && <CartModal />}
      <Header />
      <Salutation />
      {NavBar()}
      <ProductsList />
    </StyledDashboardPage>
  );
};
