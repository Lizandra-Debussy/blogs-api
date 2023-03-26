const express = require('express');
const userController = require('../controllers/user.controller');

const inputValidate = require('../middlewares/inputsValidate');
const tokenValidate = require('../middlewares/tokenValidate');

const routerUser = express.Router();

routerUser.post('/', 
inputValidate.nameValidate,
inputValidate.emailValidate,
inputValidate.passwordValidate,
userController.createUser);

routerUser.get('/',
tokenValidate, 
userController.listUsers);

routerUser.get('/:id',
tokenValidate,
userController.getUserById);

module.exports = routerUser;