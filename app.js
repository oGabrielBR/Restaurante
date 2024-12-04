// Importando o express
const express = require('express');
const app = express();

// Definindo a porta do servidor
const PORT = process.env.PORT || 3000;

// Middleware para servir arquivos estáticos
app.use(express.static('public'));

// Middleware para interpretar dados do corpo da requisição (necessário para POST)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Definindo uma rota principal
app.get('/', (req, res) => {
    res.send('Servidor funcionando!');
});

// Importando e utilizando as rotas (exemplo de como integrar rotas)
const authRoutes = require('./routes/authRoutes');
const menuRoutes = require('./routes/menuRoutes');import { db, auth } from "../models/firebase.js";

// Uso do Firebase
db.collection("produtos").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    console.log(doc.data());
  });
});
app.use('/auth', authRoutes);
app.use('/menu', menuRoutes);

// Inicializando o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
