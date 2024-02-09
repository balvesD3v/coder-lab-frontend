import * as yup from "yup";

export type EditProductFormInput = {
  name: string;
  categoryId: string;
  price: number;
  description: string;
  qty: number;
};

export const EditProductValidation = yup.object({
  name: yup.string().required("O email é obrigatório."),
  categoryId: yup.string().required("A senha é obrigatório."),
  price: yup.number().required("A senha é obrigatório."),
  description: yup.string().required("A senha é obrigatório."),
  qty: yup.number().required("A senha é obrigatório."),
});
