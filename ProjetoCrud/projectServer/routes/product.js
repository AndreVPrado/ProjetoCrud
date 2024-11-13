const express = require('express');
const Product = require('../models/product');
const router = express.Router();


// Rota para listar usuários
router.get('/products', async (req, res) => {
  const products = await Product.findAll();
  res.json(products);
});

// Rota para adicionar usuário
router.post('/products', async (req, res) => {
  const { name, description, price, quantity } = req.body;
  const newProduct = await Product.create({ name, description, price, quantity });
  res.json(newProduct);
});

// Rota para editar usuário
router.put('/products/:id', async (req, res) => {
  const { id } = req.params;
  const { name, description, price, quantity } = req.body;
  await Product.update({ name, description, price, quantity }, { where: { id } });
  res.json({ message: 'Produto atualizado com sucesso' });
});

// Rota para deletar usuário
router.delete('/products/:id', async (req, res) => {
  const { id } = req.params;
  await Product.destroy({ where: { id } });
  res.json({ message: 'Produto deletado com sucesso' });
});

module.exports =  router;