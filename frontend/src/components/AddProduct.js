import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
  const [formData, setFormData] = useState({ name: '', category: '', price: '', description: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/admin/add-product', formData);
      alert('Product added successfully');
    } catch (error) {
      console.error('Error adding product', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <input type="text" name="category" value={formData.category} onChange={handleChange} placeholder="Category" required />
      <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Price" required />
      <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" required></textarea>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProduct;

