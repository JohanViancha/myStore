const express = require('express');
const routerApi = require('./routes')
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('Hello Worlssd!');
});

app.get('/api', (req, res) => {
  res.send('Hola, soy una nueva ruta');
});


app.get('/categories/:idCategory/products/:idProduct', (req, res) => {
  const { idCategory, idProduct } = req.params;
  res.json({ idCategory,idProduct, name: 'products 1', description: 'Product', price: 3000 });
});



routerApi(app);
app.listen(port, () => {
  console.log('Corriendo en el puerto' + port);
});
