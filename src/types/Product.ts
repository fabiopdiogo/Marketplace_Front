import { AuthContext } from "../contexts/Auth/AuthContext";

export type Product = {
  _id: string;
  name: string;
  image_path: string;
  amount : number;
}


export type UseProductsContextType = { products: Product[] };