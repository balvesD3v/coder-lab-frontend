import { FaAngleLeft } from "react-icons/fa6";
import "./styles.scss";
import { Select } from "../../components/select";
import { Input } from "../../components/input";
import { SendImage } from "../../components/sendImage";
import { Textarea } from "../../components/textarea";
import { Button } from "../../components/button";
import { useEffect, useState } from "react";
import { Category } from "../../@types/category";
import { useNavigate, useParams } from "react-router-dom";
import { productUpdated } from "../../@types/productUpdated";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { InputSmall } from "../../components/inputSmall";

export const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { token } = useAuth();
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState<Category[]>([]);
  const [productData, setProductData] = useState<productUpdated>({
    id: "",
    name: "",
    description: "",
    qty: 0,
    price: 0,
    category: {
      id: "",
      name: "",
    },
  });

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const { data } = await api.get(`/product/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProductData(data);
      } catch (error) {
        console.error("Erro ao obter dados do produto:", error);
      }
    };

    const fetchCategories = async () => {
      try {
        const { data } = await api.get("/category");
        setCategories(data);
      } catch (error) {
        console.error("Erro ao obter categorias:", error);
      }
    };

    fetchProductData();
    fetchCategories();
  }, [id, token]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategoryId(categoryId);

    setProductData((prevData) => ({
      ...prevData,
      category: {
        id: categoryId,
        name: "",
      },
    }));
  };

  const handleSaveChanges = async () => {
    try {
      const formData = new FormData();
      formData.append("name", String(productData.name));
      formData.append("description", String(productData.description));
      formData.append("price", String(productData.price));
      formData.append("qty", String(productData.qty));
      formData.append("categoryId", category);

      if (imageFile) {
        formData.append("file", imageFile);
      }

      const { data } = await api.patch(`/product/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Alterações salvas com sucesso:", data);
      toast.success("Alterações salvas com sucesso!");
    } catch (error) {
      console.error("Erro ao salvar alterações:", error);
      toast.error("Erro ao salvar alterações. Por favor, tente novamente.");
    }
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <main className="DivStyled">
      <a href="/" className="linkto">
        <FaAngleLeft /> voltar
      </a>

      <h1 className="new">Editar prato</h1>

      <section>
        <form className="InputField">
          <div className="up">
            <SendImage onImageSelect={setImageFile} />
            <Input
              placeholder="nome do produto"
              type="text"
              name="name"
              value={productData.name}
              onChange={handleInputChange}
            />
            <Select
              values={categories}
              onChange={(e) => setCategory(e)}
              id={productData.category?.id}
            />
          </div>
          <div className="down">
            <Input
              placeholder="preço"
              type="number"
              name="price"
              value={productData.price}
              onChange={handleInputChange}
            />
            <Input
              placeholder="quantidade"
              type="number"
              value={productData.qty}
              onChange={handleInputChange}
            />
          </div>
          <Textarea
            placeholder="descrição"
            name="description"
            value={productData.description || ""}
            onChange={handleTextareaChange}
          />
        </form>
      </section>

      <div className="button-save">
        <Button onClick={handleSaveChanges}>
          <label htmlFor="">Salvar Alterações</label>
        </Button>
        <InputSmall value={"Excluir alterações"} />
      </div>
    </main>
  );
};
