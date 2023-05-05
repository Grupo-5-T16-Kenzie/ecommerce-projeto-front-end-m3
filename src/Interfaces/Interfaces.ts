import { TLoginFormValues } from "../components/LoginForm/loginFormSchema";
import { TPatchFormValues } from "../components/PatchUserModal/patchFormSchema";
import { TRegisterFormValues } from "../components/RegisterForm/regiterFormSchema";

export interface IProductsProviderProps {
  children: React.ReactNode;
}

export interface ICartProviderProps {
  children: React.ReactNode;
}

export interface IModalPatchProps {
  children: React.ReactNode;
}

export interface IProductsContext {
  products: IProduct[];
  setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  filterCategories: (selectedCategory: string) => void;
  redirectToLogin: () => void;
}

export interface IPachUserContext{
  patchModal: boolean,
  setPatchModal: React.Dispatch<React.SetStateAction<boolean>>
}

export interface ICartContext {
  cartModal: boolean;
  setCartModal: React.Dispatch<React.SetStateAction<boolean>>;
  cartProducts: ICartProducts[];
  setCartProducts: React.Dispatch<React.SetStateAction<ICartProducts[]>>;
  handleAddItemToCart: (id: number) => void;
  removeItemFromCart: (id: number) => void;
  addItemQuantity: (id: number) => ICartProducts[];
  removeItemQuantity: (id: number) => ICartProducts[];
  wishListModal: boolean;
  setWishListModal: React.Dispatch<React.SetStateAction<boolean>>;
  wishListProducts: IProduct[];
  setWishListProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
  handleAddItemToWishList: (id: number) => void;
  removeItemFromWishList: (id: number) => void;
}

export interface IProduct {
  id: number;
  name: string;
  price: number;
  category: string;
  img: string;
}

export interface ICartProducts extends IProduct {
  quantity: number;
  finalPrice: number;
}

export interface IProductCardProps {
  product: IProduct;
}

export interface INavBar {
  navBar: () => JSX.Element;
}

export interface IProductsList {
  ProductsList: () => JSX.Element;
}

export interface IHeader {
  token: string | null;
}


export interface IUserProviderProps {
  children: React.ReactNode;
}
export interface IUserContext {
  user: IUser | null;
  userLogin: (
    formData: TLoginFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => Promise<void>;
  userRegister: (
    formData: TRegisterFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => Promise<void>;
  patchUser: (formData: TPatchFormValues) => Promise<void>;
  userLogout: () => void;
  patchModal: boolean;
  setPatchModal: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface IUser {
  name: string;
  image_url: string;
  email: string;
  id: number;
  password_confirmation: string;
}
export interface IUserLoginResponse {
  accessToken: string;
  user: IUser;
}

export interface IUserRegisterResponse {
  accessToken: string;
  user: IUser;
}
