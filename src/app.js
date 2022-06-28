const express = require('express');
const app = express();
const path = require('path');
const routeMain = require('./routes/mainRoute')

const publicPath = path.resolve (__dirname, '../public');
app.use(express.static(publicPath));

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use('/', routeMain)

app.listen(process.env.PORT || 3000, () => console.log('Servidor Planet Cookies corriendo, http://localhost:3000'));