import React, { useState, useEffect } from 'react';
import api from '../service/index';

const ProductList = ({ onEdit, onDelete }) => {
  const [products, setProducts] = useState([]);
  const [filtro, setFiltro] = useState(null);

  function Filtragem(product){
    if (product.description.includes(filtro) || filtro === null) {
      return true
    }
  }

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const response = await api.get('/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Erro ao carregar produtos:', error);
    }
  };

  return (
      <div>
        <div id='filtros'>
        <button className='btns' onClick={() => setFiltro("")}>Não filtrar</button>
        <button className='btns' onClick={() => setFiltro("ddd")}>limpeza</button>
        <button className='btns' onClick={() => setFiltro("sss")}>alimento</button>
        <button className='btns' onClick={() => setFiltro("rrr")}>utensílio</button>
      </div>

      <h2>Lista de Produtos</h2>
      <ul className='mostra_itens'>
        {products.filter(Filtragem).map(product => (
          <li className='lista_itens' key={product.id}>
            {product.name} - {product.description} - R${product.price} - {product.quantity}
            <button className='button2' onClick={() => onEdit(product)}>Editar</button>
            <button className='button2' onClick={() => onDelete(product.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
