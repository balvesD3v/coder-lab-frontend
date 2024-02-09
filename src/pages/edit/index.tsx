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

export const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { token } = useAuth();
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>("");
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
        console.error("Error getting product data:", error);
      }
    };

    const fetchCategories = async () => {
      try {
        const { data } = await api.get("/category");
        setCategories(data);
      } catch (error) {
        console.error("Error getting categories:", error);
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
      formData.append("categoryId", String(productData.category?.id));

      if (imageFile) {
        formData.append("file", imageFile);
      }

      await api.patch(`/product/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Changes saved successfully!");
    } catch (error) {
      console.error("Error saving changes:", error);
      toast.error("Error saving changes. Please try again.");
    }
  };

  const handleDeleteProduct = async () => {
    try {
      await api.delete(`/product/${id}`);
      toast.error("Success product deleted");
      navigate("/");
    } catch (error) {
      toast.error("Unable to delete dish, try again later!");
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
    <main className="containeredit">
      <a href="/" className="linkto">
        <FaAngleLeft /> Back
      </a>

      <h1 className="new">Edit Product</h1>

      <section>
        <form className="InputField">
          <div className="up">
            <SendImage onImageSelect={setImageFile} />

            <Select
              values={categories}
              onChange={handleCategoryChange}
              id={selectedCategoryId}
            />
          </div>
          <div className="down">
            <Input
              placeholder="price"
              type="number"
              name="price"
              value={productData.price}
              onChange={handleInputChange}
            />{" "}
            <Input
              placeholder="product name"
              type="text"
              name="name"
              value={productData.name}
              onChange={handleInputChange}
            />
            <Input
              placeholder="quantity"
              type="number"
              value={productData.qty}
              onChange={handleInputChange}
            />
          </div>
          <Textarea
            placeholder="description"
            name="description"
            value={productData.description || ""}
            onChange={handleTextareaChange}
          />
        </form>
      </section>

      <div className="button-save">
        <Button onClick={handleSaveChanges}>
          <label htmlFor="">Save editions</label>
        </Button>
        <Button
          onClick={handleDeleteProduct}
          style={{ backgroundColor: "#5e161f" }}
        >
          <label htmlFor="">Delete Product</label>
        </Button>
      </div>
    </main>
  );
};
