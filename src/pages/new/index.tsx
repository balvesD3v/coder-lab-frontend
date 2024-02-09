import { FaAngleLeft } from "react-icons/fa6";
import "./styles.scss";
import { Select } from "../../components/select";
import { Input } from "../../components/input";
import { SendImage } from "../../components/sendImage";
import { Textarea } from "../../components/textarea";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { InputSmall } from "../../components/inputSmall";
import { InputPrice } from "../../components/inputPrice";
import { Category } from "../../@types/category";

export const New = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [qty, setQty] = useState("");
  const [price, setPrice] = useState<number>(0);
  const [categories, setCategories] = useState<Category[]>([]);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhotoFile] = useState<File | null>(null);

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPrice = parseFloat(e.target.value);
    setPrice(newPrice);
  };

  async function handleNewDish() {
    if (!name) {
      return toast.error("Digite o título da nota");
    }

    if (!category) {
      return toast.error("Escolha uma categoria para o prato");
    }

    if (!price) {
      return toast.error("Digite um preço para o prato");
    }

    if (!qty) {
      return toast.error("Digite uma quantidade para o prato");
    }

    if (price < 0) {
      return toast.error("Digite um preço acima de 0");
    }

    if (!description) {
      return toast.error("Escreva uma descrição para o prato");
    }

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", String(price));
      formData.append("qty", qty);
      formData.append("categoryId", category);

      if (photo) {
        formData.append("file", photo);
      }

      await api.post("/product", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Prato criado com sucesso!");

      navigate("/");
    } catch (error: any) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Não foi possível entrar.");
      }
    }
  }

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

      <h1 className="new">Adicionar prato</h1>

      <section>
        <div className="InputField">
          <div className="up">
            <SendImage onImageSelect={setPhotoFile} />
            <Input
              placeholder="nome do produto"
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
            <Select values={categories} onChange={(e) => setCategory(e)} />
          </div>
          <div className="down">
            <InputPrice
              placeholder="preço"
              type="number"
              onChange={handlePriceChange}
            />
            <Input
              placeholder="quantidade"
              type="number"
              onChange={(e) => setQty(e.target.value)}
            />
          </div>
        </div>

        <Textarea onChange={(e) => setDescription(e.target.value)} />
      </section>

      <div className="button-save">
        <InputSmall title="Salvar alterações" onClick={handleNewDish} />
      </div>
    </main>
  );
};
