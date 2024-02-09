import { Category } from "./category";

export interface ProductData {
  id: string;
  name: string;
  description: string;
  qty: number;
  price: number;
  photo: string;
  category: Category;
}
