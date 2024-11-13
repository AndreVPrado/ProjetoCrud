import React, { useState } from 'react';
import ProductList from './components/productList';
import AddProduct from './components/addProduct';
import EditProduct from './components/editProduct';
import './App.css'
import api from './service/index';

const App = () => {
  const [editingProduct, setEditingProduct] = useState(null);

  const handleEdit = (product) => {
    setEditingProduct(product);
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/products/${id}`);
      window.location.reload(); // Atualiza a lista de usuários
    } catch (error) {
      console.error('Erro ao deletar produto:', error);
    }
  };

  const handleProductAdded = () => {
    window.location.reload(); // Atualiza a lista de usuários após adição
  };

  const handleProductUpdated = () => {
    setEditingProduct(null);
    window.location.reload(); // Atualiza a lista de usuários após edição
  };

  function Filtragem(product){
    if (product.categoria.includes(filtro) || filtro === null) {
      return true
    }
  }

  return (
    <div>
      <h1>Gerenciamento de Produtos</h1>
      {editingProduct ? (
        <EditProduct product={editingProduct} onProductUpdated={handleProductUpdated} />
      ) : (
        <AddProduct onProductAdded={handleProductAdded} />
      )}
      <ProductList onEdit={handleEdit} onDelete={handleDelete} />

    </div>
  );
};

export default App;
