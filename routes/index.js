'use strict'

const express = require('express');
const UserCntrls = require('../controllers/user');
const api = express.Router();

api.get('/user', UserCntrls.getUsers);
api.get('/user/:userId', UserCntrls.getUser);
api.post('/user', UserCntrls.saveUser);
api.put('/user/:userId', UserCntrls.updateUser);
api.delete('/user/:userId', UserCntrls.deleteUser);

module.exports = api;
