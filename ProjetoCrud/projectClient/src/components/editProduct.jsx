import React, { useState, useEffect } from 'react';
import api from '../service/index';

const EditProduct = ({ product, onProductUpdated }) => {
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [quantity, setQuantity] = useState(product.quantity);

  useEffect(() => {
    setName(product.name);
    setDescription(product.description);
    setPrice(product.price);
    setQuantity(product.quantity);
  }, [product]);

  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/products/${product.id}`, { name, description, price, quantity });
      onProductUpdated();
    } catch (error) {
      console.error('Erro ao atualizar produto:', error);
    }
  };

  return (
    <div>
      <h2>Editar Produto</h2>
      <form onSubmit={handleUpdateProduct}>
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
        <div>
        <button type="submit">Atualizar</button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
