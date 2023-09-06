import { AuthContext } from "../contexts/Auth/AuthContext";

export type Product = {
  _id: string;
  name: string;
  image_path: string;
}

export const initState: Product[] = [{
  "_id": "001",
  "name": "PTeste",
  "image_path": "teste/teste"
}];

export type UseProductsContextType = { products: Product[] };