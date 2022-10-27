const express = require('express');
const routerLogin = require('./routers/login.router');
const routerUser = require('./routers/user.router');

const app = express();

app.use(express.json());

app.use('/login', routerLogin);
app.use('/user', routerUser);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
