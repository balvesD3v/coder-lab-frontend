import { Category } from "./category";

export interface productUpdated {
  id?: string;
  name?: string;
  description?: string;
  qty?: number;
  price?: number;
  photo?: string;
  category?: Category;
}
