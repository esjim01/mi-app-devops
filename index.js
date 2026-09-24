const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const environment = process.env.APP_ENVIRONMENT || "LOCAL";

app.get('/api/hello', (req, res) => {
  res.json({
    message: "Hola desde DevOps, despliegue de prueba 23-09-2026",
    environment: environment
  });
});



// Solo levanta el servidor si este archivo se ejecuta directamente,
// no cuando lo importa el test
if (require.main === module) {
  app.listen(port, () => {
    console.log(`App escuchando en puerto ${port} - ambiente: ${environment}`);
  });
}

module.exports = app;