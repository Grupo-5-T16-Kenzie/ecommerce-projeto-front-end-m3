export interface IProductsProviderProps {
    children: React.ReactNode;
  }

  export interface IProductsContext {
    products: IProduct[];
    setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
    category: string;
    setCategory: React.Dispatch<React.SetStateAction<string>>;
    filterCategories: (selectedCategory: string) => void;
  }
  

  export interface IProduct {
    id: number;
    name: string;
    price: number;
    category: string;
    img: string;
  }

  export interface IProductCardProps {
    product: IProduct;
  }



  export interface INavBar {
    navBar: () => JSX.Element;
  }

  export interface IProductsList {
    ProductsList: () => JSX.Element

  }

  export interface IHeader{
    token: string | null;
    
  }