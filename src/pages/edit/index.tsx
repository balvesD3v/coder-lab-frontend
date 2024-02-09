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

export const Edit = () => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [category, setCategory] = useState("");

  const handleGetCategories = () => {
    api.get<Category[]>("/category").then(({ data }) => setCategories(data));
  };

  useEffect(() => {
    handleGetCategories();
  }, []);

  return (
    <main className="DivStyled">
      <a href="/" className="linkto">
        <FaAngleLeft /> voltar
      </a>

      <h1 className="new">Editar prato</h1>

      <section>
        <div className="InputField">
          <SendImage onImageSelect={setImageFile} />
          <Input placeholder="nome do produto" type="text" />
          <Select values={categories} onChange={(e) => setCategory(e)} />
          <Input placeholder="preço" type="number" />
        </div>

        <Textarea />
      </section>

      <div className="button-save">
        <Button title={"Salvar Alterações"} link="/edit" />
        <Button title={"Excluir Alterações"} link="/edit" />
      </div>
    </main>
  );
};
