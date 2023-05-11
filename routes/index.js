const productsRouter = require('./products.router.js');
const usersRouter = require('./users.router.js');


function routerApi(app){
  app.use('/products', productsRouter)
  app.use('/users', usersRouter)

}


module.exports = routerApi;
