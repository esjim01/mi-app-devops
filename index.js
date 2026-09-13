const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const environment = process.env.APP_ENVIRONMENT || "LOCAL";

app.get('/api/hello', (req, res) => {
  res.json({
    message: "Hola desde DevOps",
    environment: environment
  });
});

app.listen(port, () => {
  console.log(`App escuchando en puerto ${port} - ambiente: ${environment}`);
});

module.exports = app; // para poder testear sin levantar el server