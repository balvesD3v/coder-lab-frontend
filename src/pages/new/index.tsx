import "./styles.scss";
import { FaAngleLeft } from "react-icons/fa6";
import { Select } from "../../components/select";
import { Input } from "../../components/input";
import { SendImage } from "../../components/sendImage";
import { Textarea } from "../../components/textarea";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { InputPrice } from "../../components/inputPrice";
import { Category } from "../../@types/category";
import { Button } from "../../components/button";

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
      return toast.error("Enter the title of the note");
    }

    if (!category) {
      return toast.error("Choose a category for the product");
    }

    if (!price) {
      return toast.error("Enter a price for the product");
    }

    if (!qty) {
      return toast.error("Enter a quantity for the product");
    }

    if (price < 0) {
      return toast.error("Enter a price for the product greater than 0");
    }

    if (!description) {
      return toast.error("Write a description for the product");
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
        toast.error("Unable to enter.");
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
    <main className="containernew">
      <a href="/" className="linkto">
        <FaAngleLeft /> Back
      </a>

      <h1 className="new">Add new product</h1>

      <section className="content">
        <div className="InputField">
          <div className="up">
            <SendImage onImageSelect={setPhotoFile} />
            <Select values={categories} onChange={(e) => setCategory(e)} />
          </div>
          <div className="down">
            <Input
              placeholder="product name"
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
            <InputPrice
              placeholder="price"
              type="number"
              onChange={handlePriceChange}
            />
            <Input
              placeholder="quantity"
              type="number"
              onChange={(e) => setQty(e.target.value)}
            />
          </div>
        </div>

        <Textarea
          placeholder="description"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
        />
      </section>

      <div className="button-save">
        <Button onClick={handleNewDish}>
          <label htmlFor="">Save editions</label>
        </Button>
      </div>
    </main>
  );
};
