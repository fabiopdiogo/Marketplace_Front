import { AuthContext } from "../contexts/Auth/AuthContext";

export type Product = {
  _id: string;
  name: string;
  image_path: string;
  amount : number;  
  price: number;
}


export type UseProductsContextType = { products: Product[] };