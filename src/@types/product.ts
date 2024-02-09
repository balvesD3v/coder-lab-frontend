import { Category } from "./category";

export interface ProductData {
  id: string;
  description: string;
  name: string;
  qty: number;
  price: number;
  photo: string;
  category: Category;
}
