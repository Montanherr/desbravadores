const { defineConfig } = require("cypress");

module.exports = defineConfig({

  e2e: {
   baseuRL: 'https://reservas.desbravador.com.br/',
  },
});
