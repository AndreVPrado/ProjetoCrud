import React, { useState } from 'react';
import api from '../service/index';

const AddProduct = ({ onProductAdded }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      await api.post('/products', { name, description, price, quantity });
      setName('');
      setDescription('');
      setPrice('');
      setQuantity('');
    } catch (error) {
      console.error('Erro ao adicionar produto:', error);
    }
  };

  return (
    <div>
      <h2>Adicionar Produto</h2>
      <form onSubmit={handleAddProduct}>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
};

export default AddProduct;
