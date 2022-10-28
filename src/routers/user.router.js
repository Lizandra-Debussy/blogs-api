const express = require('express');
const userController = require('../controllers/user.controller');

const emailValidate = require('../middlewares/emailValidate');
const nameValidate = require('../middlewares/nameValidate');
const passwordValidate = require('../middlewares/passwordValidate');
const tokenValidate = require('../middlewares/tokenValidate');

const routerUser = express.Router();

routerUser.post('/', 
nameValidate,
emailValidate,
passwordValidate,
userController.createUser);

routerUser.get('/',
tokenValidate, 
userController.listUsers);

module.exports = routerUser;