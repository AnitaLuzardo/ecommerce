const express = require('express');
const app = express();
const path = require('path');

app.listen(process.env.PORT || 3000, () => console.log('Servidor Planet Cookies corriendo, http://localhost:3000'));