const express = require('express');
const { faker } = require('@faker-js/faker')
const router = express.Router();

router.get('/', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let i = 0; i < limit; i++) {
    products.push({
          name: faker.commerce.productName(),
          description: faker.commerce.productDescription(),
          price: parseInt(faker.commerce.price(), 10),
          image: faker.image.url()
        });
  }
  res.json([
   products
  ]);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({ id, name: 'products 1', description: 'Product', price: 3000 });
});


module.exports = router;
