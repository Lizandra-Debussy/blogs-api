const express = require('express');

const routerLogin = require('./routers/login.router');
const routerUser = require('./routers/user.router');
const routerCategories = require('./routers/categories.router');
const routerBlogPost = require('./routers/blogPost.router');

const app = express();

app.use(express.json());

app.use('/login', routerLogin);
app.use('/user', routerUser);
app.use('/categories', routerCategories);
app.use('/post', routerBlogPost);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
