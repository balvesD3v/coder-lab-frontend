import { FaAngleLeft } from "react-icons/fa6";
import "./styles.scss";
import { Select } from "../../components/select";
import { Input } from "../../components/input";
import { SendImage } from "../../components/sendImage";
import { Textarea } from "../../components/textarea";
import { Button } from "../../components/button";
import { useEffect, useState } from "react";
import { Category } from "../../@types/category";
import { api } from "../../services/api";
import { EditProductFormInput, EditProductValidation } from "./types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { ProductData } from "../../@types/product";
import { useAuth } from "../../hooks/auth";

export const Edit = () => {
  const { id } = useParams();
  const { token } = useAuth();
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [category, setCategory] = useState("");
  const [product, setProduct] = useState<ProductData | null>(null);

  const handleGetProductById = async () => {
    const { data } = await api.get<ProductData>(`/product/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setProduct(data);
  };

  const onSubmit = (values: EditProductFormInput) => {};

  const { handleSubmit, reset, register, formState } =
    useForm<EditProductFormInput>({
      resolver: yupResolver(EditProductValidation),
      defaultValues: {
        categoryId: product?.category.id,
        description: product?.description,
        name: product?.name,
        qty: product?.qty,
        price: product?.price,
      },
    });

  const handleGetCategories = () => {
    api.get<Category[]>("/category").then(({ data }) => setCategories(data));
  };

  useEffect(() => {
    handleGetProductById();
  }, [id]);

  useEffect(() => {
    handleGetCategories();
  }, []);

  console.log(formState.errors);

  return (
    <main className="DivStyled">
      <a href="/" className="linkto">
        <FaAngleLeft /> voltar
      </a>

      <h1 className="new">Editar prato</h1>

      <section>
        <form className="InputField" onSubmit={handleSubmit(onSubmit)}>
          <SendImage onImageSelect={setImageFile} />
          <Input
            placeholder="nome do produto"
            type="text"
            {...register("name")}
          />
          <Select
            values={categories}
            {...register("categoryId")}
            onChange={(e) => setCategory(e)}
          />
          <Input placeholder="preço" type="number" {...register("price")} />
          <Textarea {...register("description")} />
        </form>
      </section>

      <div className="button-save">
        <Button>
          <label htmlFor="">Salvar Alterações</label>
        </Button>
        <Button>
          <label htmlFor="">Excluir Alterações</label>
        </Button>
      </div>
    </main>
  );
};
