import React, { useState } from "react";
import { useUser } from "./UserContext";
import { useProducts } from "./ProductContext";

export const AdminUpload = () => {
  const { user } = useUser();
  const { products, addProduct } = useProducts();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");

  if (user?.role !== "admin") return <div>Access Denied</div>;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (!name || !price || !imagePreview) return;

    addProduct({ id: Date.now(), name, price, image: imagePreview });

    setName("");
    setPrice("");
    setImageFile(null);
    setImagePreview("");
  };

  return (
    <div>
      <h2>Upload Product</h2>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input type="file" accept="image/*" onChange={handleFileChange} />
      
      {imagePreview && (
        <div>
          <p>Preview:</p>
          <img src={imagePreview} alt="Preview" width={100} />
        </div>
      )}

      <button onClick={handleSubmit}>Upload</button>

      <h3>Existing Products</h3>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <img src={p.image} width={50} alt={p.name} /> {p.name} - ₹{p.price}
          </li>
        ))}
      </ul>
    </div>
  );
};
