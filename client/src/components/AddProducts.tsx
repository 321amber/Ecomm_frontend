
import type { RootState } from "../store";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const AddProducts = () => {
  const items = useSelector((state:RootState)=> state.products.items); 
  const [formData, setFormData] = useState({
    id: items.length+1,
    title: "",
    price:0,
    stock:"IN STOCK",
    rating:0,
    description: "",
    catagory: "",
    images: null as File | null,
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, files } = e.target as HTMLInputElement;
    if (name === "image" && files) {
      setFormData({ ...formData, images: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = new FormData();
    data.append("id",formData.id);
    data.append("stock",formData.stock);
    data.append("price", formData.price);
    data.append("rating", formData.rating);
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("catagory", formData.catagory);
    if (formData.images) {
      data.append("image", formData.images);
    }

   for (let pair of data.entries()) {
  console.log(pair[0]+ ': ' + pair[1]);
}
    
    try {
      const res = await fetch("https://ecomm-backend-zg6q.onrender.com", {
        method: "POST",
        body: data,
      });

      const newProduct = await res.json();
      console.log("Product added:", newProduct);

    } catch (err) {
      console.error("Error uploading product:", err);
    }

    setFormData({
      id : items.length + 1,
      stock: "IN STOCK",
      price: 0,
      rating:0,
      title: "",
      description: "",
      catagory: "",
      images: null,
    });

    navigate('/', {replace:true});
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data" className="formData">
      <input type="text" name="title" placeholder="Title" className="entries" onChange={handleChange} required />
      <input type="text" name="price" placeholder="price in $" className="entries" onChange={handleChange} required />
      <input type="text" name="stock" placeholder="available is in stock?" className="entries" onChange={handleChange}/>
      <input type="text" name="rating" placeholder="current rating" className="entries" onChange={handleChange} required />
      <textarea name="description" placeholder="Description" className="description" onChange={handleChange} required />
      <input type="text" name="catagory" placeholder="Category" className="entries" onChange={handleChange} required />
      <input type="file" name="image" accept="image/*" className="imageUpload" onChange={handleChange} required />
      <button type="submit" className="formSubmit">Add Product</button>
    </form>
  );
};

