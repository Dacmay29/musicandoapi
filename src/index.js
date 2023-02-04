const express = require('express');
const songRouter= require('./routes/songRouter');
const genreRouter= require('./routes/genreRouter'); 
const app = express();

app.use('/canciones', songRouter);
app.use('/generos', genreRouter);

app.listen('3000', () => console.log('Servidor corriendo en el puerto 3000'));