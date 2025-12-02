const swaggerUi = require("swagger-ui-express");


const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Gerenciador de Pedidos API',
    description: 'API para gerenciar pedidos e itens',
  },
  host: 'localhost:3000',
  schemes: ['http'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./gerenciador-de-pedidos/gerenciador-de-pedidos/src/routes/orderRoutes.js']; // onde estão suas rotas

swaggerAutogen(outputFile, endpointsFiles, doc);

